<script>
  import CreateForm from "$lib/CreateForm/CreateForm.svelte";

  import createStore  from '$lib/store/createStore.js'

  let color = 0

  createStore.subscribe((value) => {
    color = value.hue
  })
</script>

<CreateForm />
Color is: {color}
