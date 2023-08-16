<script>
  import { onMount } from "svelte";

  import createStore  from '$lib/store/createStore.js'


  let hue = Math.floor(Math.random() * 360) + 1;

  // @ts-ignore
  function updateHue(newHue) {
    createStore.update((/** @type {any} */ current) => {
      return {
        ...current,
        hue: newHue
      }
    });
  }

  onMount(() => {
    updateHue(hue)
  });

  // @ts-ignore
  function handleChange(event) {
    updateHue(event.target.value)
  };
</script>

<div>
  <input type="range" min="1" max="360" bind:value={hue} on:input={handleChange} class="slider" />
</div>