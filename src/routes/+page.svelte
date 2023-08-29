<script lang="ts">
	// @ts-ignore
	import FeedItem from '$lib/FeedItem/FeedItem.svelte';

	import { onMount } from 'svelte';
	import { nostrGet } from '$lib/api/nostr';

	let feed: any = [];

	onMount(async () => {
		feed = await nostrGet([{ kinds: [128] }]);
	});
</script>

<div id="feed-page-content">
	{#each feed as event}
		<div>
			<FeedItem {event} />
		</div>
	{/each}
</div>

<style>
	/* CSS styles go here */
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		color: 'white';
	}

	#feed-page-content {
		color: white;
	}
</style>
