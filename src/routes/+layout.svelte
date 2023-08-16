<script>
  import PlusIcon from "$lib/PlusIcon.svelte";
</script>

<nav>
  <div class='brand'>
    matroid
  </div>

  <div>
    <PlusIcon />
  </div>
</nav>

<slot />

<style>
  nav {
      background: #000;
      color: #fff;
      border-bottom-color: #fff;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 64px;
  }
  .brand {
    font-size: 2em;
    font-weight: bold;
  }
</style>