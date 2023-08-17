<script>
	import ColorPicker from '$lib/CreateForm/ColorPicker.svelte';
	import CodeEditor from '$lib/CreateForm/CodeEditor.svelte';
	import { P5Renderer } from 'p5js-renderer-svelte';

	let width = 400;
	let height = 400;
	let sketch = '';

	function updateSketch(e) {
		sketch = e.detail;
	}
</script>

<form>
	<label>
		Title
		<input class="input" type="text" name="title" />
	</label>

	<label for="colorInput">
		Color
		<div class="input">
			<ColorPicker />
		</div>
	</label>

	<CodeEditor on:update={updateSketch} />
	<P5Renderer {sketch} {width} {height} />
</form>

<style>
	.input {
		width: 300px;
		display: flex;
		align-items: center;
	}
</style>
