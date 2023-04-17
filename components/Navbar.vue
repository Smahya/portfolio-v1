<template>
  <nav class="navbar__main">
    <div class="navbar container">
      <img src="@/assets/images/mahya.svg" alt="" />
      <div class="navbar__menu">
        <div v-for="navlink in navlinks" :key="navlink">
          <NuxtLink :to="navlink.path">{{ navlink.link }}</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const navlinks = [
  { link: "Home", path: "/" },
  { link: "Projects", path: "/projects" },
  // { link: "About", path: "/about" },
  { link: "Resume", path: "/resume" },
];
</script>

<style lang="scss" scoped>
a {
  color: var(--white);
  opacity: 0.5;
  text-decoration: none;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 4.7rem;
  letter-spacing: -0.01em;
}
.router-link-active {
  opacity: 0.5;
}
.router-link-exact-active {
  opacity: 1;
}

.navbar__main {
  position: sticky;
  top: 0;
  background: var(--black-400);
  color: var(--white);
  padding: 1.6rem 0rem;
  z-index: 500;
}
.navbar {
  display: flex;
  justify-content: space-between;
}
.navbar__menu {
  display: none;
  align-items: center;
  gap: 5.4rem;

  @media screen and (min-width: 768px) {
    display: flex;
  }
}
</style>
