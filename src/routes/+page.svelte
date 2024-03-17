<script lang="ts">
	import { getTag } from '$lib/util/nostr';

	import FeedItem from '$lib/FeedItem/FeedItem.svelte';
	import FeedTransition from '$lib/FeedItem/FeedTransition.svelte';

	import { onMount } from 'svelte';
	import { getNostrPosts } from '$lib/api/nostr';

	let feed: any = [];

	onMount(async () => {
		feed = await getNostrPosts();
	});

	enum ShiftDirection {
		Previous = -1,
		Current = 0,
		Next = 1
	}

	function getShiftedColor(index: number, shift: ShiftDirection) {
		// Check if the index is within the bounds of the array
		if (index + shift >= 0 && index + shift < feed.length) {
			// If it is, return the shifted index
			return getTag(feed[index + shift].tags, 'c');
		} else {
			// If it's not, return -1
			return -1;
		}
	}
</script>

<div id="feed-page-content">
	{#if feed.length === 0}
		<p class="loading-text">Loading...</p>
	{:else}
		<FeedTransition
			topColor={-1}
			bottomColor={getShiftedColor(0, ShiftDirection.Current)}
			height={'2vh'}
		/>
	{/if}
	{#each feed as event, index}
		<div>
			<FeedItem {event} />
			<FeedTransition
				topColor={getShiftedColor(index, ShiftDirection.Current)}
				bottomColor={getShiftedColor(index, ShiftDirection.Next)}
				height={getShiftedColor(index, ShiftDirection.Next) === -1 ? '2vh' : '10vh'}
			/>
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

	.loading-text {
		padding-left: 2rem;
	}
</style>
