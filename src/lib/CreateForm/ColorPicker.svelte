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

<div style="--hue: {hue}">
  <input type="range" min="1" max="360" bind:value={hue} on:input={handleChange} class="slider" />
</div>

<style>
  .slider {
    background: linear-gradient(to right,      
     hsl(0, 40%, 50%),
      hsl(60, 40%, 50%),
      hsl(120, 40%, 50%),
      hsl(180, 40%, 50%),
      hsl(240, 40%, 50%),
      hsl(300, 40%, 50%),
      hsl(360, 40%, 50%));
    width: 100%;
    height: 20px;
    border-radius: 10px;
    outline: none;
    appearance: none;
    -webkit-appearance: none;
  }

  .slider::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 20%;
    cursor: pointer;
    background: hsl(var(--hue), 40%, 50%);
    border: white 2px solid;
  }

  .slider::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 20%;
    cursor: pointer;
    background: hsl(var(--hue), 40%, 50%);
    border: white 2px solid;
  }
</style>