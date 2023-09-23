<script lang="ts">
	import { P5Renderer } from 'p5js-renderer-svelte';

	interface Post {
		title: string;
		author: Record<string, string>;
		publicKey: string;
		sketch: string;
		color: string;
		seeds: number[];
		createdAt: number;
	}

	export let post: Post;

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
</script>

<div class="post">
	<div class="header">
		<div class="header-text">
			<span class="title">{post.title}</span>
			<span>{username}</span>
		</div>
	</div>

	<div class="post-section">
		<P5Renderer title={post.title} sketch={post.sketch} width={400} height={400} {seed} />
		<div class="random-button-container">
			<button class="random-button" on:click={randomSeed}> ξ </button>
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

	.random-button {
		border-radius: 50%;
		width: 50px;
		height: 50px;
		font-size: 30px;
		background-color: #f0f0f0;
		border: none;
		cursor: pointer;
		transition: 0.2s;
		box-shadow: 5px 5px rgba(0, 0, 0);
	}

	.random-button:hover {
		background-color: #e0e0e0;
		box-shadow: 3px 3px rgba(0, 0, 0);
	}

	.random-button:active {
		background-color: #d0d0d0;
		box-shadow: 1px 1px rgba(0, 0, 0);
	}

	.random-button-container {
		padding-left: 8px;
	}

	.footer {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		padding-right: 58px;
	}
</style>
