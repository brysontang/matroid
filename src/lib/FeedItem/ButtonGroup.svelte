<script lang="ts">
	import { likePost } from '$lib/api/nostr';
	import Button from '$lib/Button/Button.svelte';
	import type { Post } from '$lib/interfaces/Post';
	import { onMount } from 'svelte';

	export let changeSeed: (seed: number) => void;
	export let post: Post;
	export let seed: number;

	let publicKey: string;

	onMount(async () => {
		publicKey = await window.nostr.getPublicKey();
	});

	$: userHasLiked = post?.likeEvent?.some((likeEvent) => likeEvent.pubkey === publicKey);

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
	/>
	<Button symbol="⚡" pillLabel="Zaps" pillValue={'0 sats'} onClick={() => {}} />
</div>

<style>
	.button-container {
		padding-left: 8px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
</style>
