<script lang="ts">
	import { onMount } from 'svelte';

	import PlusIcon from '$lib/PlusIcon.svelte';
	import createStore from '$lib/store/createStore.js';

	let pubKey: string;

	createStore.subscribe((value) => {
		pubKey = value.pubKey;
	});
</script>

<nav>
	<div>
		<a href="/" class="brand"> matroid </a>
		<a href="/profile" class="profile">
			{pubKey}
		</a>
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
		border-bottom: solid #fff;
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 64px;
	}

	.content {
		padding-top: 64px;
	}

	.profile {
		text-decoration: none;
		color: #fff;
	}

	.brand {
		font-size: 2em;
		font-weight: bold;
		text-decoration: none;
		color: #fff;
	}
</style>
