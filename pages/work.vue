<template>
  <div class="flex flex-col align-middle place-content-center relative" @mousemove="mouseMove">
    <div class="main-text">
      <div class="line line6">
        <NuxtLink to="/project/dashboard-intelligence">dashboard intelligence</NuxtLink>
      </div>
      <div class="line line8">
        <NuxtLink to="/project/voya-destinations">voya destinations</NuxtLink>
      </div>
      <div class="line line-shesinherapron">
        <NuxtLink to="/project/shesinherapron">shes in her apron</NuxtLink>
      </div>
      <div class="line line2">
        <NuxtLink to="/project/coinwire">coinwire</NuxtLink>
      </div>
      <div class="line line5">
        <NuxtLink to="/project/mademoiselle">mademoiselle</NuxtLink>
      </div>
      <div class="line line7">
        <NuxtLink to="/project/mademoiselle-collections">mademoiselle collections</NuxtLink>
      </div>
      <div class="line line1">
        <NuxtLink to="/project/modolla">modolla wallet</NuxtLink>
      </div>
      <div class="line line3">
        <NuxtLink to="/project/tailwind-templates">tailwind templates</NuxtLink>
      </div>
      <div class="line line9">
        <NuxtLink to="/project/artasce-client-portal">artasce client portal</NuxtLink>
      </div>
      <div class="cursor-follow1 cursor"></div>
      <div class="cursor-follow2 cursor"></div>
      <div class="cursor-follow3 cursor"></div>
      <div class="cursor-follow5 cursor"></div>
      <div class="cursor-follow6 cursor"></div>
      <div class="cursor-follow7 cursor"></div>
      <div class="cursor-follow8 cursor"></div>
      <div class="cursor-follow9 cursor"></div>
      <div class="cursor-follow-shesinherapron cursor"></div>
    </div>
    <!-- default contents -->

    <Head>
      <Title>Cai Toy / Work</Title>
    </Head>
    <div ref="lgText" class="large-text opacity-5 absolute text-accent">
      work
    </div>
    <div ref="lgBgText" class="large-text-bg opacity-[1%] absolute bottom-0 text-base top-40 h-screen">
      work
    </div>
  </div>
</template>

<script setup>
// import { getAnalytics, logEvent } from "firebase/analytics"
import gsap from "gsap"

let posX = 0
let posY = 0

const lgText = ref()
const lgBgText = ref()

const mouseMove = (event) => {
  posX = event.x
  posY = event.y
  gsap.to(".cursor", {
    x: posX + 80,
    y: posY - 480,
  })
}

onMounted(() => {

  // const analytics = getAnalytics()
  // logEvent(analytics, "portfolio_work_view")
  console.log("work page loaded...")

  const titleTimeline = gsap.timeline()
  titleTimeline
    .fromTo(lgText.value, { xPercent: -100 }, { xPercent: 0 })
    .fromTo(
      lgBgText.value,
      {
        xPercent: 0,
        yPercent: 0,
        scale: 0.5,
        opacity: 0,
      },
      {
        xPercent: 12.5,
        yPercent: 25,
        scale: 1.5,
        opacity: 0.008,
        delay: 0,
        duration: 0.2,
      }
    )
})
</script>

<style scoped>
.main-text p {
  overflow: hidden;
}

.line {
  overflow: hidden;
}

.cursor {
  position: absolute;
  background-size: cover;
  background-position: center center;
  width: 680px;
  /* height: 383px; */
  z-index: -1;
  user-select: none;
  pointer-events: none;
  transform: translate(5px, 5px);
}

.cursor-follow1 {
  background: url("~/assets/images/projects/proj1.jpg") no-repeat 50% 50%;
  opacity: 0;
  z-index: 999;
}

.cursor-follow2 {
  background: url("~/assets/images/projects/proj2.jpg") no-repeat 50% 50%;
  opacity: 0;
  z-index: 999;
}

.cursor-follow3 {
  background: url("~/assets/images/projects/proj3.jpg") no-repeat 50% top;
  opacity: 0;
  z-index: 999;
}

.cursor-follow5 {
  background: url("~/assets/images/projects/proj5.jpg") no-repeat 50% 50%;
  opacity: 0;
  z-index: 999;
}

.cursor-follow6 {
  background: url("~/assets/images/projects/proj6.jpg") no-repeat 50% 50%;
  opacity: 0;
  z-index: 999;
}

.cursor-follow7 {
  background: url("~/assets/images/projects/proj7.jpg") no-repeat 50% 50%;
  opacity: 0;
  z-index: 999;
}

.cursor-follow8 {
  background: url("~/assets/images/projects/proj8.jpg") no-repeat;
  background-position: center top;
  opacity: 0;
  z-index: 999;
}

.cursor-follow9 {
  background: url("~/assets/images/projects/proj9.jpg") no-repeat;
  background-position: center top;
  opacity: 0;
  z-index: 999;
}

.cursor-follow-shesinherapron {
  background: url("/images/projects/thumbs/shesinherapron.jpg") no-repeat;
  background-position: center top;
  opacity: 0;
  z-index: 999;
}

.line1:hover~.cursor-follow1 {
  opacity: 1;
  z-index: 999;
}

.line2:hover~.cursor-follow2 {
  opacity: 1;
  z-index: 999;
}

.line3:hover~.cursor-follow3 {
  opacity: 1;
  z-index: 999;
}

.line-shesinherapron:hover~.cursor-follow-shesinherapron {
  opacity: 1;
  z-index: 999;
}


.line5:hover~.cursor-follow5 {
  opacity: 1;
  z-index: 999;
}

.line6:hover~.cursor-follow6 {
  opacity: 1;
  z-index: 999;
}

.line8:hover~.cursor-follow8 {
  opacity: 1;
  z-index: 999;
}

.line9:hover~.cursor-follow9 {
  opacity: 1;
  z-index: 999;
}

.line7:hover~.cursor-follow7 {
  opacity: 1;
  z-index: 999;
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

.large-text-bg {
  font-size: 25vw;
  line-height: 10vw;
  text-transform: uppercase;
  text-align: left;
  cursor: default;
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
  @apply px-8 py-4 relative;
}

.main-text a:hover {
  color: var(--accent-focus);
  /* background: var(--accent-content); */
  @apply bg-primary/60 text-primary-content rounded-lg;
  z-index: 9999;
}
</style>
