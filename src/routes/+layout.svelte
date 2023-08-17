<script>
  import PlusIcon from "$lib/PlusIcon.svelte";
</script>

<nav>
  <div>
    <a href='/' class='brand'>
      matroid
    </a>
  </div>

  <div>
    <a href='/create'>
      <PlusIcon />
    </a>
  </div>
</nav>

<div class="content">
  <slot />
</div>

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
    text-decoration: none;
    color: #fff;
  }

  .content {
    height: calc(100vh - 64px);
    overflow-y: auto;
  }
</style>