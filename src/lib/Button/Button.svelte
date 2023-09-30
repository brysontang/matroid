<script lang="ts">
	export let onClick: () => void;
	export let symbol: string;
</script>

<button class="button" on:click={onClick}> {symbol} </button>

<style>
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
		background-color: #d0d0d0;
		box-shadow: 1px 1px rgba(0, 0, 0);
	}
</style>
