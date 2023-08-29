<script lang="ts">
	import { nostrCreate } from '$lib/api/nostr';

	let username: string = '';

	async function updateUserName() {
		await nostrCreate(0, JSON.stringify({ name: username }), []);
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
