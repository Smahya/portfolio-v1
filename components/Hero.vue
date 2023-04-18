<template>
  <div class="hero">
    <div
      class="hero__section container grid items-center md:grid-cols-1 lg:grid-cols-2"
    >
      <div class="hero__section--left">
        <p class="sm__text hi">Hi, I'm Salma</p>
        <p class="lg__text">I Build <span>Frontends</span></p>
        <p class="ms__text">
          I convert UI designs to usable applications <br />
          that solve problems for users
        </p>

        <div class="btn-wrap flex gap-x-6">
          <Button variant="blue" @click="$router.push('/projects')">View my work</Button>
          <Button variant="outline">
            <a href="mailto:salnaj14@gmail.com"> Contact me</a>
          </Button>
        </div>
      </div>
      <div class="hero__section--right">
        <project-card :active="active" :handleclick="onClick">
          <div class="hero__section--right-slot">
            <div class="inner">
              <div
                :class="['image', { active: key === active }]"
                v-for="[key, val] in iconList"
                :key="key"
              >
                <img :src="val" alt="" />
                <!-- <div class="shadow"></div> -->
              </div>
            </div>
          </div>
        </project-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import sass from "@/assets/images/Sass.svg";
import react from "@/assets/images/React.svg";
import vue from "@/assets/images/vue.svg";

export default {
  setup() {
    const iconsObj = { sass: sass, react: react, vue: vue };
   
    const intervalId = ref(null);
    const active = ref("sass");

    const iconList = computed(() => {
      return Object.entries(iconsObj);
    });

    onMounted(() => {
      clearInterval(intervalId);
    });

    function onClick(e) {
      this.active = "sass";
    }


    return {
      intervalId,
      active,
      iconList,
      onClick,
    };
  },

  mounted() {
    this.intervalId = setInterval(() => {
      const index = this.iconList.findIndex((item) => item[0] === this.active);
      const indexToUse = (index + 1) % this.iconList.length;
      this.active = this.iconList[indexToUse][0];
    }, 2000);
  },
};
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  background: var(--black-400);
  height: auto;
  max-height: max-content;
  padding-bottom: 12rem;
  @media screen and (min-width: 1020px) {
    padding-bottom: 25rem;
  }
}
.hero__section {
  height: auto;
  color: var(--white);
  grid-row-gap: 5rem;
  margin-top: 4rem;
  @media screen and (min-width: 768px) {
    margin-top: 10rem;
  }

  &--left {
    .hi {
      position: relative;
      margin-left: 60px;
    }

    .lg__text {
      margin: 0.8rem 0 2.4rem 0;
    }
    .hi::before {
      content: "";
      border: 1px solid #3a3845;
      position: absolute;
      left: -60px;
      top: 7.5px;
      width: 52px;
    }

    .btn-wrap {
      margin-top: 3.2rem;
    }
  }

  &--right {
    width: 100%;
    height: inherit;

    &-slot {
      width: 100%;
      height: 41rem;
      background: #27262a;
      box-shadow: 0px 16px 32px -16px rgba(0, 0, 0, 0.25),
        inset 1px 1px 2px rgba(255, 255, 255, 0.12);
      border-radius: 8px;
      display: grid;
      place-content: center;

      .inner {
        height: 100%;
        display: grid;
        grid: 1fr / 1fr;

        > * {
          grid-area: 1/1/2/2;
        }
      }
    }
    @media screen and (min-width: 768px) {
    }

    .image {
      display: flex;
      transform: translateY(-120%) scale(0.1);
      opacity: 0;
      transition: all 0.5s ease-in-out;
      position: relative;
      &.active {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
    }
  }
}
</style>
