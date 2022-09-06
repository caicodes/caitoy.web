<template>
  <div class="flex flex-col align-middle place-content-center relative" @mousemove="mouseMove">
    <div class="main-text">
      <div v-for="link in portfolioLinks">
        <PortfolioLink :link="link" />
      </div>
    </div>
    <!-- default -->

    <Head>
      <Title>Cai Toy / About </Title>
    </Head>
    <div ref="lgText" class="large-text file:hello opacity-5 absolute">
      about
    </div>
    <div ref="lgBgText" class="large-text-bg opacity-[1%] absolute bottom-0 text-base top-40 h-screen">
      about
    </div>
  </div>
</template>

<script setup>
import { getAnalytics, logEvent } from "firebase/analytics"
import gsap from "gsap"
import PortfolioLink from "~~/components/app/PortfolioLink.vue"

const portfolioLinks = [

  {
    title: "dashboard intelligence",
    imgSrc: "../assets/images/projects/proj5.jpg",
  },
  {
    title: "mademoiselle collections",
    imgSrc: "../assets/images/projects/proj5.jpg",
  },
  {
    title: "she's in her apron",
    imgSrc: "../assets/images/projects/proj5.jpg",
  },
  {
    title: "hbo vue",
    imgSrc: "../assets/images/projects/proj5.jpg",
  },
  {
    title: "netflix nuxt",
    imgSrc: "../assets/images/projects/proj5.jpg",
  },
]

const lgText = ref()
const lgBgText = ref()

let posX = 0
let posY = 0
const mouseMove = (event) => {
  // console.log("Mouse Moved ", event.x, event.y)
  posX = event.x
  posY = event.y

  gsap.to(".follow", {
    x: posX - 0,
    y: posY - 400,
  })
}

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

<style>
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
