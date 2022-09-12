<template>
  <div class="flex flex-col align-middle place-content-center relative" @mousemove="mouseMove">
    <div class="content-main-text">
      <div>
        <div>what do I want to say?</div>
      </div>
      <div class="flex mx-auto py-4 gap-4">
        <a class="btn btn-circle" v-for="social in socialLinks" :key="link" :href="social.linkUrl" target="_blank">
          <Github class="social-icon" v-if="social.linkTitle === 'github'" />
          <Youtube class="social-icon" v-if="social.linkTitle === 'youtube'" />
          <Twitter class="social-icon" v-if="social.linkTitle === 'twitter'" />
          <Codepen class="social-icon" v-if="social.linkTitle === 'codepen'" />
          <Linkedin class="social-icon" v-if="social.linkTitle === 'linkedin'" />
          <Pinterest class="social-icon" v-if="social.linkTitle === 'pinterest'" />
        </a>
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
import Github from "../components/app/icons/Github.vue"
import Youtube from "../components/app/icons/Youtube.vue"
import Twitter from "../components/app/icons/Twitter.vue"
import Codepen from "../components/app/icons/Codepen.vue"
import Linkedin from "../components/app/icons/Linkedin.vue"
import Pinterest from "../components/app/icons/Pinterest.vue"

const socialLinks = [

  {
    linkTitle: "github",
    linkUrl: "https://github.com/caicodes",
  },
  {
    linkTitle: "youtube",
    linkUrl: "https://www.youtube.com/channel/UCnS8ijumElXzBHIDKgoIBMg",
  },
  {
    linkTitle: "linkedin",
    linkUrl: "https://www.linkedin.com/in/cai-toy/",
  },
  {
    linkTitle: "twitter",
    linkUrl: "https://twitter.com/artascecreative",
  },
  {
    linkTitle: "pinterest",
    linkUrl: "https://www.pinterest.com/artascecreative/artasce-creative/",

  },
  {
    linkTitle: "codepen",
    linkUrl: "https://codepen.io/caicodes/pens/popular",
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
  // const analytics = getAnalytics()
  // logEvent(analytics, "portfolio_about_view")

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
.social-icon {
  @apply text-accent h-8 w-8 absolute;
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

.content-main-text {
  font-size: 2vw;
  line-height: 3vw;
  text-align: left;
  cursor: default;
  width: 100vw;
  z-index: 2;
  @apply flex text-center flex-col font-light;
}

.content-main-text a svg {
  color: var(--accent);
}

.content-main-text a:hover svg {
  color: white;
}
</style>
