<script lang="ts">
	import { likePost } from '$lib/api/nostr';
	import Button from '$lib/Button/Button.svelte';
	import type { Post } from '$lib/interfaces/Post';

	export let changeSeed: (seed: number) => void;
	export let post: Post;

	function randomSeed() {
		changeSeed(Math.floor(Math.random() * 100000));
	}

	function handleLikePost() {
		likePost(post.publicKey, post.id);
	}
</script>

<div class="button-container">
	<Button symbol="ξ" onClick={randomSeed} />
	<Button symbol="♥" onClick={handleLikePost} />
	<Button symbol="⚡" onClick={() => {}} />
</div>

<style>
	.button-container {
		padding-left: 8px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
</style>
