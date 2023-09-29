<script lang="ts">
	import { onMount } from 'svelte';
	import PostComponent from '$lib/FeedItem/PostComponent.svelte';
	import { getAuthorMetaData } from '$lib/api/nostr';

	interface Post {
		id: string;
		title: string;
		sketch: string;
		publicKey: string;
		color: string;
		author: Record<string, string>;
		seeds: number[];
		createdAt: number;
	}

	export let event: any;

	onMount(async () => {
		post.author = await getAuthorMetaData(event.pubkey);
	});

	function getTag(tags: string[][], tag: string) {
		for (let t of tags) {
			if (t[0] === tag) {
				return t[1];
			}
		}
		return '';
	}
	console.log('e', event);
	let content = JSON.parse(event.content);
	let post: Post = {
		id: event.id,
		...content,
		publicKey: event.pubkey,
		color: getTag(event.tags, 'c'),
		createdAt: event.created_at
	};
</script>

<div class="post" style="--bg-color: {post.color}">
	<PostComponent {post} />
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
