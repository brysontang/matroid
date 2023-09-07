<script lang="ts">
	import { updateUser } from '$lib/api/nostr';

	let username: string = '';
	let avatar: string = '';

	async function updateUserName() {
		const metadata = {
			name: username,
			picture: avatar
		};

		await updateUser(metadata);
	}
</script>

<div>
	<form>
		<label for="username">Title</label>
		<input type="text" id="username" name="username" placeholder="username" bind:value={username} />
		<input type="text" id="avatar" name="avatar" placeholder="avatar" bind:value={avatar} />
		<button type="submit" on:click={updateUserName}>Submit</button>
	</form>
</div>
