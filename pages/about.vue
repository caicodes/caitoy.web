<template>
  <div class="flex flex-col align-middle place-content-center relative" @mousemove="mouseMove">
    <div ref="lgText" class="large-text file:hello opacity-5 absolute">
      about
    </div>

    <div ref="lgBgText" class="large-text-bg opacity-[1%] absolute bottom-0 text-base top-40 h-screen">
      about
    </div>

    <div class="main-text">
      <div class="line line1">
        <p>
          <NuxtLink to="/projects/project">voya destinations</NuxtLink>
        </p>
      </div>
      <div class="line line2">
        <p>
          <NuxtLink to="/projects/project">she's in her apron</NuxtLink>
        </p>
      </div>
      <div class="line line3">
        <p>
          <NuxtLink to="/projects/project">hbo nuxt</NuxtLink>
        </p>
      </div>
      <div class="line line4">
        <p>
          <NuxtLink to="/projects/project">netflix react</NuxtLink>
        </p>
      </div>
      <div class="line line5">
        <p>
          <NuxtLink to="/projects/project">coinwire live</NuxtLink>
        </p>
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
import { getAnalytics, logEvent } from "firebase/analytics"
import gsap from "gsap"

const lgText = ref()
const lgBgText = ref()

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
onBeforeUnmount(() => {
  console.log("im too young to die")
})
onUnmounted(() => {
  console.log("gone now")
})
onMounted(() => {
  console.log("here i am to save the day...")
  const analytics = getAnalytics()
  logEvent(analytics, "portfolio_about_view")

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

.line1:hover~.cursor-follow1 {
  opacity: 1;
}

.line2:hover~.cursor-follow2 {
  opacity: 1;
}

.line3:hover~.cursor-follow3 {
  opacity: 1;
}

.line4:hover~.cursor-follow4 {
  opacity: 1;
}

.line5:hover~.cursor-follow5 {
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
  @apply px-8 py-4 rounded-md;
}

.main-text a:hover {
  color: var(--accent-focus);
  /* background: var(--accent-content); */
  @apply bg-accent text-accent-content rounded-lg;
}
</style>
