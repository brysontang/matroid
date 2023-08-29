<script lang="ts">
	import { onMount } from 'svelte';
	import PostComponent from '$lib/FeedItem/PostComponent.svelte';
	import { nostrGet } from '$lib/api/nostr';

	interface Post {
		title: string;
		sketch: string;
		color: string;
		author: string;
	}

	export let event: any;

	onMount(async () => {
		const metadata = await nostrGet([{ kinds: [0], authors: [event.pubkey] }]);

		const content = metadata[0].content;
		post.author = JSON.parse(content).name;
	});

	function getTag(tags: string[][], tag: string) {
		for (let t of tags) {
			if (t[0] === tag) {
				return t[1];
			}
		}
		return '';
	}

	let content = JSON.parse(event.content);
	let post: Post = {
		...content,
		color: getTag(event.tags, 'c')
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
