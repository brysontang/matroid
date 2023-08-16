<script>
  import ColorPicker from '$lib/CreateForm/ColorPicker.svelte';
</script>

<form>
  <label>
    Title
    <input type="text" name="title" />
  </label>

  <label for="colorInput">
    Color
    <ColorPicker />
  </label>
</form>