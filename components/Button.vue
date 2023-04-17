<template>
  <button @click="click" :class="['btn', `btn__${variant}`]">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: String,
  click: Function,
});
</script>

<style lang="scss" scoped>
.btn {
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: var(--white);
  border-radius: 0.8rem;
  padding: 1.6rem 3.2rem;

  &__outline {
    border: 1px solid #ffffff;
    background: transparent;
  }

  &__blue {
    background: var(--primary-blue);
  }
}
</style>
