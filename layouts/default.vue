<template>
  <div class="page__layout">
   <Navbar />
   <slot />
  </div>
</template>

<style lang="scss" scoped>
.page__layout {
  width: 100%;
  height: auto;
  // background: var(--black-400);
  color: var(--white);
}
</style>
