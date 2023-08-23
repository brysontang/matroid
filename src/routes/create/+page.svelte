<script>
	import CreateForm from '$lib/CreateForm/CreateForm.svelte';

	import createStore from '$lib/store/createStore.js';

	let hue = 0;

	createStore.subscribe((value) => {
		hue = value.hue;
	});

	$: backgroundColor = `hsl(${hue}, 40%, 50%)`;
</script>

<div id="create-page-content" style="--bg-color: {backgroundColor}">
	<CreateForm />
</div>

<style>
	#create-page-content {
		background-color: var(--bg-color);
		height: calc(100vh - 64px);
		transition: background-color 0.3s;
		margin-top: 64px;
	}
</style>
