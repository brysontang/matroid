<script lang="ts">
	import { updateUser, getAuthorMetaData } from '$lib/api/nostr';
	import { onMount } from 'svelte';
	import createStore from '$lib/store/createStore.js';

	let username: string = '';
	let avatar: string = '';
	let metadata: any;
	let pubKey: string;
	let loadingAuthor = false;

	async function updateUserName() {
		const metadata = {
			name: username,
			picture: avatar
		};

		await updateUser(metadata);
	}

	createStore.subscribe(async (value) => {
		pubKey = value.pubKey;
		if (!pubKey) return;
		try {
			loadingAuthor = true;
			metadata = await getAuthorMetaData(pubKey);
			loadingAuthor = false;

			username = metadata.name;
			avatar = metadata.picture;
		} catch (error) {
			console.log(error);
			loadingAuthor = false;
		}
	});
</script>

<div>
	<form class="form-container">
		<label for="username">Title</label>
		<input
			type="text"
			id="username"
			name="username"
			placeholder={loadingAuthor ? 'Loading...' : 'username'}
			bind:value={username}
		/>
		<input
			type="text"
			id="avatar"
			name="avatar"
			placeholder={loadingAuthor ? 'Loading...' : 'avatar'}
			bind:value={avatar}
		/>
		<button type="submit" on:click={updateUserName}>Submit</button>
	</form>
</div>

<style>
	.form-container {
		padding: 8px;
		display: flex;
		flex-direction: column;
		gap: 8px;
		justify-content: center;
		width: 35%;
	}
</style>
