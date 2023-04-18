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
import Hrms from '@/assets/images/hrms.png';
import Instrail from '@/assets/images/instrail.png';
import Velma from '@/assets/images/velma.png';
import { ref } from "vue";
export default {
  props: {
    all: {
      type: Boolean
    }
  },
  setup(props) {
    const mainProj = [
      {
        name: "Kwerty",
        description:
          "A public data engine, layered with artificial intelligence. The platform leverages on multiple global open datasets and uses a clean interactive view to improve decision making.",
        techs: ["Vue JS", "Vuex", "Vue Router", "Chart.js", "Sass"],
        imageUrl: Kwerty,
        path: 'https://kwerty.io',
      },
      {
        name: "HRMS",
        description:
        "A Human Resource (HR) management system. Design to help streamline the work of the HR including management of employee, leave, exit, appraisal reviews etc.",
        techs: ["React", "Graphql", "Chakra", "React Router"],
        imageUrl: Hrms,
        path: 'https://ghana-hrms.enyata.com/login',
      },
      {
        name: "Velma",
        description:
          "An Production management System. It is designed to strealine the production process from production to sales. Its Feature includes Raw materials, Traceability and Production.",
        techs: ["Vue", "Pinia", "Vuetify"],
        imageUrl: Velma,
        path: 'https://app.velmafactory.com/login',
      },
      {
        name: "Instrail",
        description:
          "An Insurance Management platform.Designed to help bring the purchase of insurance to the finger tips of the users.",
        techs: ["Vue JS", "Vuex", "Vue Router", "Sass"],
        imageUrl: Instrail,
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

    const projectList = computed(() => {
      return props.all ? mainProj : mainProj.slice(0, 2)
    })

    const activeTab = ref("tab1")

    function changeTab(tab) {
      activeTab.value = tab;
    }

    const projects = computed(() => {
      return activeTab.value === "tab1" ? projectList.value : sideProj
    })

   
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
