<script lang="ts">
	import { onMount } from 'svelte';
	import PostComponent from '$lib/FeedItem/PostComponent.svelte';
	import { getAuthorMetaData, getLikes } from '$lib/api/nostr';
	import { getTag } from '$lib/util/nostr';

	import type { Post } from '$lib/interfaces/Post';

	export let event: any;

	let post: Post;

	onMount(async () => {
		try {
			loadPostData();
		} catch (e) {
			console.error(e);
		}
	});

	async function loadPostData() {
		fillObject();

		const [author, likeEvents] = await Promise.all([
			getAuthorMetaData(event.pubkey),
			getLikes(event.id)
		]);

		assignAuthorToPost(author);
		calculateAndAssignLikes(likeEvents);
	}

	function fillObject() {
		let content = JSON.parse(event.content);
		post = {
			id: event.id,
			...content,
			publicKey: event.pubkey,
			color: getTag(event.tags, 'c'),
			createdAt: event.created_at
		};
	}

	function assignAuthorToPost(author: any) {
		post.author = author;
	}

	function calculateAndAssignLikes(likeEvents: any) {
		let likesCount = 0;
		const uniqueLikers = new Set();

		likeEvents.forEach((likeEvent: any) => {
			if (!uniqueLikers.has(likeEvent.pubkey)) {
				likesCount++;
				uniqueLikers.add(likeEvent.pubkey);
			}
		});

		post.likes = likesCount;
	}
</script>

<div class="post" style="--bg-color: {post?.color}">
	{#if post}
		<PostComponent {post} />
	{/if}
</div>

<style>
	.post {
		background-color: var(--bg-color);
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
