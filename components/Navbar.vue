<template>
  <nav class="navbar__main">
    <div class="navbar container">
      <img src="@/assets/images/mahya.svg" class="logo" alt="" @click="$router.push('/')" />
      <div class="navbar__menu">
        <div v-for="navlink in navlinks" :key="navlink">
          <NuxtLink :to="navlink.path" :target="navlink.target">{{
            navlink.link
          }}</NuxtLink>
        </div>
      </div>
      <div class="navbar__menu-mobile">
        <div v-for="navlink in navlinks" :key="navlink">
          <NuxtLink :to="navlink.path" :target="navlink.target">{{
            navlink.link
          }}</NuxtLink>
        </div>
      </div>

      <button class="mobile_menu" @click="mobileMenu">Menu</button>
    </div>
  </nav>
</template>

<script setup>
const navlinks = [
  { link: "Home", path: "/" },
  { link: "Projects", path: "/projects" },
  {
    link: "Resume",
    path: "/"
  },
];
// "https://docs.google.com/document/d/1ifCkqXpfaGeRbx8Xt0gIH70hYKUkol61wOkv--CcyNE/",

function mobileMenu() {
  let label = document.querySelector(".navbar");
  label.classList.toggle("isopen");
}
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

  .logo {
    cursor: pointer;
  }
}

.isopen {
  .navbar__menu-mobile {
    height: 20vh;
    overflow: visible;
  }
}

.navbar__menu-mobile {
  display: block;
  position: absolute;
  top: 6rem;
  right: 1rem;
  width: max-content;
  height: 0;
  overflow: hidden;
  padding: 0 1.4rem;
  background: var(--primary-blue);
  z-index: 100;
  border-radius: 8px;

  @media (min-width: 768px) {
    display: none;
  }
}

.mobile_menu {
  display: flex;
  display: flex;
  align-items: center;
  padding: 0;

  @media (min-width: 768px) {
    display: none;
  }
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
