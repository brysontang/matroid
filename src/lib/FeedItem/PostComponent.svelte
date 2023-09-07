<script lang="ts">
	import { P5Renderer } from 'p5js-renderer-svelte';

	interface Post {
		title: string;
		author: Record<string, string>;
		sketch: string;
		color: string;
	}

	export let post: Post;
</script>

<div class="post">
	<div class="header">
		<img src={post.author.picture} />
		<div class="header-text">
			<span class="title">{post.title}</span>
			<span>{post.author.name}</span>
		</div>
	</div>
	<P5Renderer sketch={post.sketch} width={300} height={300} />
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
