<script lang="ts">
	export let topColor: string | number;
	export let bottomColor: string | number;
	export let height: string | number = '10vh';

	$: topColorHex = topColor !== -1 ? `${topColor}` : '#000000';
	$: bottomColorHex = bottomColor !== -1 ? `${bottomColor}` : '#FFFFFF';
</script>

<div
	class="feed-transition"
	style="--transition-height: {height}; background: linear-gradient(to bottom, {topColorHex}, {bottomColorHex});"
/>

<style>
	.feed-transition {
		height: var(--transition-height);
	}
</style>
