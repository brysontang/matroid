<script lang="ts">
	import { P5Renderer } from 'p5js-renderer-svelte';

	interface Post {
		title: string;
		author: Record<string, string>;
		publicKey: string;
		sketch: string;
		color: string;
		seeds: number[];
	}

	export let post: Post;

	$: username = post.author && post.author.name ? post.author.name : post.publicKey;
</script>

<div class="post">
	<div class="header">
		<!-- {#if post.author && post.author.picture}
			<img src={post.author.picture} alt={'profile picture for ' + username} />
		{:else}
			<img src="https://picsum.photos/300/300" alt="default image" />
		{/if} -->

		<div class="header-text">
			<span class="title">{post.title}</span>
			<span>{username}</span>
		</div>
	</div>
	<P5Renderer
		title={post.title}
		sketch={post.sketch}
		width={400}
		height={400}
		seed={post.seeds[0]}
	/>
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
</style>
