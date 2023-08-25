<script>
	// @ts-ignore
	import { P5Renderer } from 'p5js-renderer-svelte';

	import { SimplePool } from 'nostr-tools';
	import { onMount } from 'svelte';

	let width = 100;
	let height = 100;
	let sketch = `
    function setup() {
      createCanvas(window.innerWidth, window.innerHeight);

			let c = rc();
			fill(c);
    }

    function draw() {
      background(220);
      ellipse(mouseX, mouseY, 80, 80);
    }

		function rc() {
			return color(random(255), random(255), random(255));
		}
  `;

	let feed = [];

	onMount(async () => {
		let relayObject = await window.nostr.getRelays();
		let relays = Object.keys(relayObject);

		const pool = new SimplePool();

		feed = await pool.list(relays, [{ kinds: [128] }]);
	});
</script>

<P5Renderer {sketch} {width} {height} />

<style>
	/* CSS styles go here */
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
</style>
