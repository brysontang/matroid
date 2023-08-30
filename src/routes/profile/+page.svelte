<script lang="ts">
	import { updateUser } from '$lib/api/nostr';

	let username: string = '';

	async function updateUserName() {
		const metadata = {
			name: username
		};

		await updateUser(metadata);
	}
</script>

<div>
	<form>
		<label for="username">Title</label>
		<input type="text" id="title" name="title" placeholder="Title" bind:value={username} />
		{username}

		<button type="submit" on:click={updateUserName}>Submit</button>
	</form>
</div>
