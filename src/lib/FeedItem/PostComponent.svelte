<script lang="ts">
	import { isVisible } from '$lib/util/isVisible';
	import { likePost } from '$lib/api/nostr';
	import Button from '$lib/Button/Button.svelte';
	import { P5Renderer } from 'p5js-renderer-svelte';
	import { onMount } from 'svelte';

	interface Post {
		id: string;
		title: string;
		author: Record<string, string>;
		likes: number;
		publicKey: string;
		sketch: string;
		color: string;
		seeds: number[];
		createdAt: number;
	}

	export let post: Post;
	let inView = false;
	let div: HTMLDivElement;

	let formattedDate: string;
	$: if (post && post.createdAt) {
		let date = new Date(post.createdAt * 1000);
		formattedDate = date.toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		});
	}

	$: username = post.author && post.author.name ? post.author.name : post.publicKey;

	let seed = post.seeds[0];

	function randomSeed() {
		seed = Math.floor(Math.random() * 100000);
	}

	function handleLikePost() {
		likePost(post.publicKey, post.id);
	}

	onMount(() => {
		const handleVisible = (event: CustomEvent) => {
			console.log('Visible event triggered!', post.title, event.detail);
			inView = event.detail.inView;
		};

		// Forgive me typescript gods
		(div as any).addEventListener('visible', handleVisible);

		return () => {
			(div as any).removeEventListener('visible', handleVisible);
		};
	});
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
		<div class="button-container">
			<Button symbol="ξ" onClick={randomSeed} />
			<Button symbol="♥" onClick={handleLikePost} />
			<Button symbol="⚡" onClick={() => {}} />
		</div>
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

	.button-container {
		padding-left: 8px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.footer {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		padding-right: 58px;
	}
</style>
