<script>
	// @ts-ignore
	import { P5Renderer } from 'p5js-renderer-svelte';

	let sketch = `
    function setup() {
      createCanvas(400, 400);
    }

    function draw() {
      background(220);
      ellipse(mouseX, mouseY, 80, 80);
    }
  `;

</script>

Boi
<P5Renderer {sketch} />

<style>
	/* CSS styles go here */
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
</style>
