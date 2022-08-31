<template>
  <header>
    <nav class="flex justify-between place-items-center p-5 uppercase">
      <div class="text-xl">
        <nuxt-link to="/" class="flex items-center"
          ><span class="logo-brand"
            >CAI<span class="logo-brand-light opacity-50 ml-0.5"
              >TOY</span
            ></span
          >
        </nuxt-link>
      </div>
      <div class="top-nav flex gap-8 md:gap-10 text-lg">
        <NuxtLink to="/work">work</NuxtLink>
        <NuxtLink to="/about">about</NuxtLink>
        <NuxtLink to="/contact">contact</NuxtLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header nav {
  position: relative;
  z-index: 999;
}
a {
  position: relative;
  padding: 0.5rem 0;
}
a:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0px;
  height: 1px;
  background-color: white;
  transition: all ease 0.5s;
}
a:hover:before {
  width: 100%;
}
</style>
