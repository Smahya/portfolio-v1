<template>
  <div class="section__two">
    <div class="content container__sm">
      <div class="header grid place-content-center">
        <p class="lg__text relative text-center mb-12">
          <img class="absolute" src="@/assets/svgs/boxes.svg" alt="" />
          Projects
        </p>
        <p class="ms__text text-center mb-6">
          Here are some of the projects I’ve worked on.
        </p>
        <Tabs :active="activeTab" :changeTab="changeTab" v-if="isProjectPage" />
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

<script setup>
import SeedFi from "@/assets/images/seedFi.png";
import Kwerty from "@/assets/images/kwerty.png";
import Hrms from "@/assets/images/hrms.png";
import Rigour from "@/assets/images/rigour.png";
import Creatr from "@/assets/images/creatr.png";
import Pokebook from "@/assets/images/pokemon.png";
import Hangman from "@/assets/images/hangman.png";
import TTT from "@/assets/images/tic-tac-toe.png";
import Notes from "@/assets/images/notes.png";
import Stitch from "@/assets/images/stitch.png";
import { ref } from "vue";

const props = defineProps({
  all: {
    type: Boolean,
  },
});

const mainProj = [
  {
    name: "SeedFi",
    description:
      "SeedFi is a Finance management System. It is designed to allow seamless access to smart lending opportunities. Its Feature includes Loans(Personal, Business, Groups), Payments etc.",
    techs: ["React", "Scss", "Typescript", "Tailwind"],
    imageUrl: SeedFi,
    path: "https://theseedfi.com",
  },
  {
    name: "Kwerty",
    description:
      "A public data engine, layered with artificial intelligence. The platform leverages on multiple global open datasets and uses a clean interactive view to improve decision making.",
    techs: ["Vue JS", "Vuex", "Vue Router", "Chart.js", "Sass"],
    imageUrl: Kwerty,
    path: "https://kwerty.io",
  },
  {
    name: "Creatr",
    description:
      "A content management app, a one-stop-tool for creators, talent managers, and businesses.",
    techs: ["React", "Typescript", "Tailwind"],
    imageUrl: Creatr,
    path: "https://creatr.aeone.co/",
  },
  {
    name: "Rigour-OS",
    description:
      "A comprehensive healthcare management system with platforms for customers and providers.",
    techs: ["Next", "Scss", "Typescript"],
    imageUrl: Rigour,
    path: "https://rigourplus.com",
  },
  {
    name: "Stitchhouse",
    description:
      "A fashion store. It is designed to help users buy and sell clothes including features for production requests.",
    techs: ["React", "Typescript", "Tailwind"],
    imageUrl: Stitch,
    path: "https://stitch.enyata.com/",
  },
  {
    name: "HRMS",
    description:
      "A Human Resource (HR) management system. Design to help streamline the work of the HR including management of employee, leave, exit, appraisal reviews etc.",
    techs: ["React", "Graphql", "Chakra", "React Router"],
    imageUrl: Hrms,
    path: "https://ghana-hrms.enyata.com/login",
  },
  // {
  //   name: "Velma",
  //   description:
  //     "An Production management System. It is designed to strealine the production process from production to sales. Its Feature includes Raw materials, Traceability and Production.",
  //   techs: ["Vue", "Pinia", "Vuetify"],
  //   imageUrl: Velma,
  //   path: "https://app.velmafactory.com/login",
  // },
  // {
  //   name: "Instrail",
  //   description:
  //     "An Insurance Management platform.Designed to help bring the purchase of insurance to the finger tips of the users.",
  //   techs: ["Vue JS", "Vuex", "Vue Router", "Sass"],
  //   imageUrl: Instrail,
  // },
];

const sideProj = [
  {
    name: "Notes App",
    description:
      "A notes app. It is designed to help users to take notes and save them. Users can add, edit, delete, archive and search for notes.",
    techs: ["Next.js", "Typescript", "Tailwind", "Supabase"],
    imageUrl: Notes,
    path: "https://note.salmasali.com/",
  },
  {
    name: "Hangman",
    description:
      "A hangman game. It is designed to help users to improve their worldly knowledge. Prove you are the best in the world by guessing the right movie, tv show, country, and more.",
    techs: ["Next.js", "Typescript", "Tailwind"],
    imageUrl: Hangman,
    path: "https://hangman.salmasali.com/",
  },
  {
    name: "Tic Tac Toe",
    description:
      "Can you form a continuous line of three?. Try beating yourself / CPU in this classic game.",
    techs: ["React", "Typescript", "Tailwind"],
    imageUrl: TTT,
    path: "https://tic-tac-toe.salmasali.com/",
  },
  {
    name: "Pokemon",
    description:
      "A pokemon application. It is designed to help users to improve their knowledge of pokemons. Learn about pokemons characteristics and similarities with other pokemons.",
    techs: ["Vue JS", "Pinia"],
    imageUrl: Pokebook,
    path: "https://pokebook.salmasali.com/",
  },
];

const route = useRoute();

const projectList = computed(() => {
  return props.all ? mainProj : mainProj.slice(0, 2);
});

const activeTab = ref("tab1");

function changeTab(tab) {
  activeTab.value = tab;
}

const projects = computed(() => {
  return activeTab.value === "tab1" ? projectList.value : sideProj;
});

const isProjectPage = computed(() => {
  return route.path === "/projects";
});
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
        @media screen and (min-width: 980px) {
          flex-direction: row-reverse;
        }
      }
    }
  }
}
</style>
