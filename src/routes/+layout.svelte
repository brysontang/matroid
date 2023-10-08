<script lang="ts">
	import { base } from '$app/paths';
	import PlusIcon from '$lib/PlusIcon.svelte';
	import { onMount } from 'svelte';

	let publicKey: string;
	let grantedPublicKey: boolean = false;

	onMount(async () => {
		try {
			publicKey = await window.nostr.getPublicKey();
			grantedPublicKey = true;
		} catch (error) {
			// TODO: Need to handle this error by maybe showing a message to the user
			console.log('No nostr plugin found');
		}
	});
</script>

<nav>
	<div>
		<a href="/" class="brand"> matroid </a>
		{#if grantedPublicKey}
			<a href="/profile" class="profile">
				{publicKey}
			</a>
		{/if}
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
