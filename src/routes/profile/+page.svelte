<script lang="ts">
	import { updateUser, getAuthorMetaData } from '$lib/api/nostr';
	import { onMount } from 'svelte';

	let username: string = '';
	let avatar: string = '';
	let metadata: any;

	async function updateUserName() {
		const metadata = {
			name: username,
			picture: avatar
		};

		await updateUser(metadata);
	}

	onMount(async () => {
		try {
			const publicKey = await window.nostr.getPublicKey();
			metadata = await getAuthorMetaData(publicKey);

			username = metadata.name;
			avatar = metadata.picture;
		} catch (error) {
			console.log(error);
		}
	});
</script>

<div>
	<form class="form-container">
		<label for="username">Title</label>
		<input type="text" id="username" name="username" placeholder="username" bind:value={username} />
		<input type="text" id="avatar" name="avatar" placeholder="avatar" bind:value={avatar} />
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
