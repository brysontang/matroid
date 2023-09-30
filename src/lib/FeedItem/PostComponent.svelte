<script lang="ts">
	import { isVisible } from '$lib/util/isVisible';
	import { P5Renderer } from 'p5js-renderer-svelte';
	import { onMount } from 'svelte';

	import type { Post } from '$lib/interfaces/Post';
	import ButtonGroup from '$lib/FeedItem/ButtonGroup.svelte';

	export let post: Post;

	let div: HTMLDivElement;
	let formattedDate: string;

	let inView = false;
	let seed = post?.seeds[0];

	$: if (post?.createdAt) {
		let date = new Date(post.createdAt * 1000);
		formattedDate = date.toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		});
	}
	$: username = post?.author?.name || post.publicKey;

	onMount(() => {
		const handleVisible = (event: CustomEvent) => {
			inView = event.detail.inView;
		};

		// Forgive me typescript gods
		(div as any).addEventListener('visible', handleVisible);

		return () => {
			(div as any).removeEventListener('visible', handleVisible);
		};
	});

	function changeSeed(newSeed: number) {
		seed = newSeed;
	}
</script>

<div class="post">
	<div class="header">
		<div class="header-text">
			<span class="title">{post.title}</span>
			<a href={`/profile/${post.publicKey}`}>
				<span>{username}</span>
			</a>
		</div>
	</div>

	<div class="post-section">
		<div use:isVisible={{ threshold: 0 }} bind:this={div}>
			{#if inView}
				<P5Renderer title={post.title} sketch={post.sketch} width={400} height={400} {seed} />
			{:else}
				<div style="width: 400px; height: 400px; background-color: #f0f0f0; border-radius: 10px;" />
			{/if}
		</div>
		<ButtonGroup {changeSeed} {post} />
	</div>

	<div class="footer">
		<span>{formattedDate}</span>
	</div>
</div>

<style>
	.title {
		margin-top: 0px;
	}
	.header-text {
		display: flex;
		flex-direction: column;
	}
	.post {
		display: flex;
		flex-direction: column;
	}
	.post-section {
		display: flex;
		flex-direction: row;
		align-content: 'start';
	}
	.footer {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		padding-right: 58px;
	}
</style>
