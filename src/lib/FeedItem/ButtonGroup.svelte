<script lang="ts">
	import { likePost } from '$lib/api/nostr';
	import Button from '$lib/Button/Button.svelte';
	import type { Post } from '$lib/interfaces/Post';
	import createStore from '$lib/store/createStore.js';

	export let changeSeed: (seed: number) => void;
	export let post: Post;
	export let seed: number;

	let pubKey: string;

	createStore.subscribe((value) => {
		pubKey = value.pubKey;
	});

	$: userHasLiked = post?.likeEvent?.some((likeEvent) => likeEvent.pubkey === pubKey);

	function randomSeed() {
		changeSeed(Math.floor(Math.random() * 100000));
	}

	function handleLikePost() {
		likePost(post.publicKey, post.id);
	}
</script>

<div class="button-container">
	<Button symbol="ξ" pillLabel="Seed" pillValue={String(seed)} onClick={randomSeed} />
	<Button
		symbol="♥"
		pillLabel="Likes"
		pillValue={String(post?.likes)}
		onClick={handleLikePost}
		selectColor="#f54284"
		active={userHasLiked}
		disabled={post.likeEvent === undefined}
	/>
	<!-- <Button symbol="⚡" pillLabel="Zaps" pillValue={'0 sats'} onClick={() => {}} /> -->
</div>

<style>
	.button-container {
		padding-left: 8px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
</style>
