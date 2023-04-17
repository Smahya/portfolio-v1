<template>
  <div class="section__two">
    <div class="content container__sm">
      <div class="header grid place-content-center">
        <p class="lg__text relative text-center mb-12">
          <img class="absolute" src="@/assets/images/boxes.svg" alt="" />
          Projects
        </p>
        <p class="ms__text text-center mb-6">
          Here are some of the projects I’ve worked on.
        </p>
        <Tabs :active="activeTab" :changeTab="changeTab" />
      </div>

      <div
        v-for="project in projects"
        :key="project.name"
        class="project__list"
      >
        <project-item :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import Kwerty from '@/assets/images/kwerty.png';
import { ref } from "vue";
export default {
  setup() {
    const mainProj = [
      {
        name: "Kwerty",
        description:
          "A public data engine, layered with artificial intelligence. The platform leverages on multiple global open datasets and uses a clean interactive view to improve decision making.",
        techs: ["Vue JS", "Vuex", "Vue Router", "Chart.js"],
        imageUrl: Kwerty,
      },
      {
        name: "Instrail",
        description:
          "A public data engine, layered with artificial intelligence. The platform leverages on multiple global open datasets and uses a clean interactive view to improve decision making.",
        techs: ["Vue JS", "Vuex", "Vue Router", "Chart.js"],
        imageUrl: Kwerty,
      },
      {
        name: "HRMS",
        description:
          "A public data engine, layered with artificial intelligence. The platform leverages on multiple global open datasets and uses a clean interactive view to improve decision making.",
        techs: ["Vue JS", "Vuex", "Vue Router", "Chart.js"],
        imageUrl: Kwerty,
      },
    ];

    const sideProj = [
      {
        name: "Something",
        description:
          "A public data engine, layered with artificial intelligence. The platform leverages on multiple global open datasets and uses a clean interactive view to improve decision making.",
        techs: ["Vue JS", "Vuex", "Vue Router", "Chart.js"],
        imageUrl: Kwerty,
      },
    ];

    const activeTab = ref("tab1")

    function changeTab(tab) {
      console.log(tab);
      activeTab.value = tab;
    }

    const projects = computed(() => {
      return activeTab.value === "tab1" ? mainProj : sideProj
    })

    console.log('projects', projects)
   
    return {
      activeTab,
      changeTab,
      projects,
    };
  },
};
</script>

<style lang="scss" scoped>
.section__two {
  padding: 11.5rem 0;
  width: 100%;
  background: var(--black-500);

  .header {
    margin-bottom: 9rem;
    .lg__text {
      z-index: 10;
    }
    img {
      left: 10rem;
      top: -3rem;
      z-index: -5;
    }
  }

  .project__list {
    display: grid;
    &:nth-child(odd) {
      .project__list--item {
        display: flex;
        flex-direction: column-reverse;
        @media screen and (min-width: 980px){
          flex-direction: row-reverse;
        }
      }
    }
  }
}
</style>
