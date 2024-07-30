<template>
  <div class="tabs grid grid-cols-2">
    <button
      :class="['tab', active === 'tab1' ? 'tab__active' : 'tab']"
      @click="changeTab('tab1')"
    >
      {{ tab1 || "Dedicated projects" }}
    </button>
    <button
      :class="['tab', active === 'tab2' ? 'tab__active' : 'tab']"
      @click="changeTab('tab2')"
    >
      {{ tab2 || "Practice projects" }}
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  tab1: String,
  tab2: String,
  active: {
    type: String,
    default: "tab1",
  },
  changeTab: {
    type: Function,
    default: () => {},
  },
});
// const activeTab = ref(props.active);
</script>

<style lang="scss" scoped>
.tabs {
  border: 1px solid var(--primary-blue);
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #ffffff;
  border-radius: 0.4rem;
  // width: max-content;
  @media screen and (min-width: 768px) {
    width: 53rem;
  }
  .tab {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.3rem 1.4rem;

    &__active {
      background: var(--primary-blue);
    }
  }
}
</style>
