<script>
	import ColorPicker from '$lib/CreateForm/ColorPicker.svelte';
	import CodeEditor from '$lib/CreateForm/CodeEditor.svelte';
	import { P5Renderer } from 'p5js-renderer-svelte';

	import * as chroma from 'chroma-js';

	import { createP5Post } from '$lib/api/nostr';

	let width = 400;
	let height = 400;
	let sketch = `function setup() {
	createCanvas(window.innerWidth, window.innerHeight);

	randomSeed(seed);
	noiseSeed(seed);
}

function draw() {
	background(220);
}`;

	let post = {
		title: '',
		hue: Math.floor(Math.random() * 360) + 1,
		sketch,
		seed: Math.floor(Math.random() * 100000)
	};

	function updateSketch(e) {
		post.sketch = e.detail;
	}

	function randomSeed() {
		post.seed = Math.floor(Math.random() * 100000);
	}

	async function createPost() {
		// Turn hue into hex
		const color = chroma.hsl(post.hue, 0.4, 0.5).hex();
		const body = {
			title: post.title,
			sketch: post.sketch,
			seeds: [post.seed]
		};

		await createP5Post(body, color);
	}
</script>

<div class="content">
	<form>
		<label>
			Title
			<input class="input" type="text" name="title" bind:value={post.title} />
		</label>

		<label>
			Seed
			<input class="input" type="number" name="seed" bind:value={post.seed} />
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

	<P5Renderer title={post.title} sketch={post.sketch} {width} {height} seed={post.seed} />

	<button class="random-button" on:click={randomSeed}> ξ </button>
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

	.random-button {
		position: fixed;
		bottom: 16px;
		right: 16px;
		width: 64px;
		height: 64px;
		border-radius: 50%;
		border: none;
		background-color: #000;
		color: #fff;
		font-size: 32px;
		cursor: pointer;
	}
</style>
