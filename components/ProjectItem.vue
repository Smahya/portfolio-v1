<template>
  <div class="project__list--item">
    <div class="project__list--item-texts mb-12">
      <NuxtLink
        :to="project.path"
        target="_blank"
        class="prj__name flex items-center gap-4 hover:underline hover:text-primary-blue"
        >{{ project.name }}
        <img src="@/assets/svgs/link.svg" alt="link" />
      </NuxtLink>
      <p class="light__16 mt-6 mb-10">{{ project.description }}</p>
      <p class="light__10">Main technologies (Frontend)</p>

      <div class="tech__wrap flex flex-wrap gap-3 mt-5">
        <div class="tech" v-for="tech in project.techs" :key="tech">
          <p>{{ tech }}</p>
        </div>
      </div>
    </div>
    <div class="project__list--item-image hover01">
      <figure>
        <img :src="project.imageUrl" alt="img" />
      </figure>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: Object,
});
</script>

<style lang="scss" scoped>
.hover01 figure img {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.hover01 figure:hover img {
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
}

.project__list--item {
  padding: 2.8rem 2.4rem 0;
  width: 96%;
  margin: auto;
  background: #232226;
  box-shadow: 0px 32px 48px -16px rgba(0, 0, 0, 0.15),
    inset 1px 1px 2px rgba(255, 255, 255, 0.15);
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 4rem;
  gap: 3rem;

  &-texts {
    width: 100%;

    img {
      object-fit: contain;
    }
  }

  &-image {
    width: 100%;
    position: relative;
    display: grid;

    img {
      object-fit: contain;

      &:hover {
        opacity: 0.9;
      }
    }
  }

  .tech {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    border-radius: 50px;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    padding: 0.4rem 1.2rem;
    width: max-content;

    p {
      white-space: nowrap;
    }
  }

  @media screen and (min-width: 980px) {
    width: 100%;
    padding: 2.8rem 6.4rem 0;
    display: grid;
    grid: 1fr / repeat(2, 1fr);
    margin-bottom: 8rem;

    &-image {
      img {
        transform: translateY(25%);
        object-fit: contain;
      }
    }
  }
}
</style>
