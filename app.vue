<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style lang="scss">
 /* during entering and leaving : */
  .page-enter-active, .page-leave-active {
    position:absolute;
    max-width:100%; /*make sur our content keep it's original width*/
    transition: all .2s ease;
  }

  /* entering start */  
  .page-enter {
    left: -100%;
  }

  /* entering end */
  .page-enter-to {
    left: 0;
  }

  /* leaving start */
  .page-leave {
    opacity: 1;
  }

  /* leaving end */
  .page-leave-to {
    opacity: 0;
  }
</style>