<script>
	import ColorPicker from '$lib/CreateForm/ColorPicker.svelte';
	import CodeEditor from '$lib/CreateForm/CodeEditor.svelte';
	import { P5Renderer } from 'p5js-renderer-svelte';

	import { validateEvent, verifySignature, SimplePool } from 'nostr-tools';

	let width = 400;
	let height = 400;
	let sketch = `function setup() {
  createCanvas(400, 400);
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
		// @ts-ignore
		let pubkey = await window.nostr.getPublicKey();

		let event = {
			kind: 1,
			created_at: Math.floor(Date.now() / 1000),
			tags: [],
			content: post.title,
			pubkey
		};

		// @ts-ignore
		let signedEvent = await window.nostr.signEvent(event);

		let valid = validateEvent(signedEvent);
		let verified = verifySignature(signedEvent);

		if (!valid || !verified) {
			console.log('invalid event');
			return;
		}

		// @ts-ignore
		let relayObject = await window.nostr.getRelays();
		let relays = Object.keys(relayObject);

		const pool = new SimplePool();

		let pubs = pool.publish(relays, signedEvent);
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
