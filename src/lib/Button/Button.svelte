<script lang="ts">
	export let onClick: () => void;
	export let symbol: string;
	export let pillLabel: string;
	export let pillValue: string;
	export let selectColor: string = '#d0d0d0';
	export let active: boolean = false;
</script>

<div class="container" style="--selectColor: {selectColor};">
	{#if !active}
		<button class="button" on:click={onClick}> {symbol} </button>
	{:else}
		<button class="button active-button"> {symbol} </button>
	{/if}
	<div class="pill">{pillLabel}: {pillValue}</div>
</div>

<style>
	.container {
		display: flex;
		align-items: center;
	}
	.button {
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

	.button:hover {
		background-color: #e0e0e0;
		box-shadow: 3px 3px rgba(0, 0, 0);
	}

	.button:active {
		background-color: var(--selectColor);
		box-shadow: 0px 0px rgba(0, 0, 0);
	}

	.active-button {
		background-color: var(--selectColor);
		box-shadow: 0px 0px rgba(0, 0, 0);
	}

	.active-button:hover {
		background-color: var(--selectColor) !important;
		box-shadow: 3px 3px rgba(0, 0, 0);
	}

	.pill {
		margin-left: 10px; /* or however much space you want between the button and the pill */
		padding: 10px 20px;
		border-radius: 15px;
		background-color: white;
		color: black;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.5s, transform 0.5s, visibility 0.5s;
		transform: translateX(-20px);
		box-shadow: 5px 5px rgba(0, 0, 0);
		z-index: 10;
		max-width: 100px;
		min-width: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.button:hover + .pill {
		opacity: 1;
		visibility: visible;
		transform: translateX(0);
	}
</style>
