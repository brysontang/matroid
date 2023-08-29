<script>
	import ColorPicker from '$lib/CreateForm/ColorPicker.svelte';
	import CodeEditor from '$lib/CreateForm/CodeEditor.svelte';
	import { P5Renderer } from 'p5js-renderer-svelte';

	import * as chroma from 'chroma-js';

	import { nostrCreate } from '$lib/api/nostr';

	let width = 400;
	let height = 400;
	let sketch = `function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(220);
}`;

	let post = {
		title: '',
		hue: Math.floor(Math.random() * 360) + 1,
		sketch
	};

	function updateSketch(e) {
		post.sketch = e.detail;
	}

	async function createPost() {
		// Turn hue into hex
		let color = chroma.hsl(post.hue, 0.4, 0.5).hex();

		await nostrCreate(
			128,
			JSON.stringify({
				title: post.title,
				sketch: post.sketch
			}),
			[['c', color]]
		);
	}
</script>

<div class="content">
	<form>
		<label>
			Title
			<input class="input" type="text" name="title" bind:value={post.title} />
		</label>

		<label for="colorInput">
			Color
			<div class="input">
				<ColorPicker bind:hue={post.hue} />
			</div>
		</label>

		<CodeEditor sketch={post.sketch} on:update={updateSketch} />

		<button type="submit" on:click={createPost}>Create</button>
	</form>

	<P5Renderer sketch={post.sketch} {width} {height} />
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
