<script lang="ts">
	import PlusIcon from '$lib/PlusIcon.svelte';
	import { onMount } from 'svelte';

	let publicKey: string;

	onMount(async () => {
		publicKey = await window.nostr.getPublicKey();
	});
</script>

<nav>
	<div>
		<a href="/" class="brand"> matroid </a>
		{publicKey}
	</div>

	<div>
		<a href="/create">
			<PlusIcon />
		</a>
	</div>
</nav>

<div class="content">
	<slot />
</div>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background: #000;
		box-sizing: border-box;
		color: #fff;
		z-index: 1000;
		border-bottom-color: #fff;
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 64px;
	}
	.brand {
		font-size: 2em;
		font-weight: bold;
		text-decoration: none;
		color: #fff;
	}

	.content {
	}
</style>
