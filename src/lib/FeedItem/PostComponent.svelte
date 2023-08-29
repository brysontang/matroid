<script lang="ts">
	import { P5Renderer } from 'p5js-renderer-svelte';

	interface Post {
		title: string;
		author: string;
		sketch: string;
		color: string;
	}

	export let post: Post;
</script>

<div>
	<p class="title">{post.title}</p>
	<p>by {post.author}</p>
	<P5Renderer sketch={post.sketch} width={300} height={300} />
</div>

<style>
	.title {
		margin-top: 0px;
	}
</style>
