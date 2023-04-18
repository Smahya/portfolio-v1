<template>
  <div class="relative">
    <div class="rect"></div>
    <div class="card">
      <div class="card__left--pilar">
        <div @click="() => handleclick('sass')" :class="['sass', `logo-sass-${active}`]">
          <sass />
        </div>
        <div :class="['react', `logo-react-${active}`]">
          <reacticon />
        </div>
        <div :class="['vue', `logo-vue-${active}`]">
          <VueIcon />
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    active: String,
    handleclick: Function
  });
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  background: var(--black-300);
  box-shadow: 0px 16px 32px -16px rgba(0, 0, 0, 0.25),
    inset 1px 1px 2px rgba(255, 255, 255, 0.12);
  border-radius: 0.8rem;
  padding: 0.8rem;
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  z-index: 10;
  @media screen and (min-width: 768px) {
    display: grid;
    grid: 1fr /  8.7rem auto;
  }

  &__left {
    width: 100%;
    height: inherit;
    &--pilar {
      height: inherit;
      background: var(--black-200);
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1),
        inset 2px 1px 2px rgba(255, 255, 255, 0.06);
      border-radius: 4px;
      display: flex;
      place-content: center;
      gap: 3.2rem;
      padding: 2.4rem 0;
      @media screen and (min-width: 768px) {
        display: grid;
      }
    }
  }
  &__right {
    width: 100%;
  }
}

.sass,
.react,
.vue {
  cursor: pointer;
  svg {
    fill: #888596;
  }
}

.logo-sass-sass {
  svg {
    fill: #cd6799;
  }
}
.logo-react-react {
  svg {
    fill: #61dafb;
  }
}
.logo-vue-vue {
  --fill-two: #34495E;
  --fill: #41B883;
}

.rect {
  position: absolute;
  width: 162px;
  height: 144px;
  right: -36px;
  bottom: -36px;
  background: var(--primary-blue);
  border-radius: 8px;
  transform: rotate(-7.41deg);
  z-index: 5;
  animation: roll 3s ease-in;
  display: none;
  @media screen and (min-width: 768px) {
   display: flex;
  }
}

@keyframes roll {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
