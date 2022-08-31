<template>
  <div
    class="flex flex-col align-middle place-content-center relative"
    @mousemove="mouseMove"
  >
    <div class="large-text file:hello opacity-5 absolute">about</div>

    <div class="main-text">
      <div class="line line1">
        <p><NuxtLink to="/projects/project">voya destinations</NuxtLink></p>
      </div>
      <div class="line line2">
        <p><NuxtLink to="/projects/project">she's in her apron</NuxtLink></p>
      </div>
      <div class="line line3">
        <p><NuxtLink to="/projects/project">hbo nuxt</NuxtLink></p>
      </div>
      <div class="line line4">
        <p><NuxtLink to="/projects/project">netflix react</NuxtLink></p>
      </div>
      <div class="line line5">
        <p><NuxtLink to="/projects/project">coinwire live</NuxtLink></p>
      </div>

      <div class="cursor-follow1 cursor"></div>
      <div class="cursor-follow2 cursor"></div>
      <div class="cursor-follow3 cursor"></div>
      <div class="cursor-follow4 cursor"></div>
      <div class="cursor-follow5 cursor"></div>
    </div>
    <Head>
      <Title>Cai Toy / About </Title>
    </Head>
  </div>
</template>

<script setup>
import gsap from "gsap"

let posX = 0
let posY = 0
const mouseMove = (event) => {
  // console.log("Mouse Moved ", event.x, event.y)
  posX = event.x
  posY = event.y

  gsap.to(".cursor", {
    x: posX - 180,
    y: posY - 380,
  })
}
</script>

<style scoped>
.main-text p {
  overflow: hidden;
}
.cursor {
  position: absolute;
  background-size: cover;
  background-position: center center;
  width: 680px;
  height: 383px;
  z-index: -1;
  user-select: none;
  pointer-events: none;
  transform: translate(5px, 5px);
}

.cursor-follow1 {
  background: url("~/assets/images/projects/proj1.jpg") no-repeat 50% 50%;
  opacity: 0;
}
.cursor-follow2 {
  background: url("~/assets/images/projects/proj2.jpg") no-repeat 50% 50%;
  opacity: 0;
}
.cursor-follow3 {
  background: url("~/assets/images/projects/proj3.jpg") no-repeat 50% 50%;
  opacity: 0;
}
.cursor-follow4 {
  background: url("~/assets/images/projects/proj4.jpg") no-repeat 50% 50%;
  opacity: 0;
}
.cursor-follow5 {
  background: url("~/assets/images/projects/proj3.jpg") no-repeat 50% 50%;
  opacity: 0;
}

.line1:hover ~ .cursor-follow1 {
  opacity: 1;
}
.line2:hover ~ .cursor-follow2 {
  opacity: 1;
}
.line3:hover ~ .cursor-follow3 {
  opacity: 1;
}
.line4:hover ~ .cursor-follow4 {
  opacity: 1;
}
.line5:hover ~ .cursor-follow5 {
  opacity: 1;
}

.large-text {
  font-size: 12vw;
  font-weight: 400;
  line-height: 10vw;
  text-transform: uppercase;
  text-align: left;
  cursor: default;
  align-items: center;
}

.main-text {
  font-size: 2vw;
  line-height: 3vw;
  text-align: left;
  cursor: default;
  width: 100vw;
  z-index: 2;
  @apply flex text-center flex-col font-light;
}
.main-text a {
  @apply px-8 py-4 rounded-md;
}
.main-text a:hover {
  color: var(--accent-focus);
  /* background: var(--accent-content); */
  @apply bg-accent text-accent-content rounded rounded-lg;
}
</style>
