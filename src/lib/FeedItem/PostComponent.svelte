<script lang="ts">
	import { P5Renderer } from 'p5js-renderer-svelte';

	import type { Post } from '$lib/interfaces/Post';
	import ButtonGroup from '$lib/FeedItem/ButtonGroup.svelte';

	export let post: Post;

	let formattedDate: string;

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

	function changeSeed(newSeed: number) {
		seed = newSeed;
	}
</script>

<div class="post">
	<div class="header">
		<div class="header-text">
			<span class="title">{post.title}</span>
			<a href={`/profile/${post.publicKey}`} class="username">
				<span>{username}</span>
			</a>
		</div>
	</div>

	<div class="post-section">
		<P5Renderer title={post.title} sketch={post.sketch} width={400} height={400} {seed} />

		<ButtonGroup {changeSeed} {post} {seed} />
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
	.username {
		text-decoration: none;
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
		padding-right: 208px;
	}
</style>
