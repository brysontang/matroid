<script>
	import ColorPicker from '$lib/CreateForm/ColorPicker.svelte';
	import CodeEditor from '$lib/CreateForm/CodeEditor.svelte';
	import { P5Renderer } from 'p5js-renderer-svelte';

	let width = 400;
	let height = 400;
	let sketch = `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}`;

	function updateSketch(e) {
		sketch = e.detail;
	}
</script>

<div class="content">
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

		<CodeEditor {sketch} on:update={updateSketch} />
	</form>

	<P5Renderer {sketch} {width} {height} />
</div>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.input {
		width: 300px;
		display: flex;
		align-items: center;
	}

	.content {
		display: flex;
		flex-grow: 1;
		align-items: center;
		justify-content: space-around;
		height: calc(100vh - 128px);
	}
</style>
