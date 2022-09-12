<template>
  <div class="flex flex-col align-middle place-content-center relative w-full h-screen">
    <div class="main-text">
      <div class="links">email/cai@artasce.com</div>
      <div class="links">github/@caicodes</div>
      <div class="links">wp/cai.artasce.com</div>
      <div class="links">resume/cai-resume.web.app</div>
      <div class="links">cv/cai-toy.web.app</div>
      <div class="flex mx-auto py-4 gap-4">
        <a class="btn btn-circle" v-for="social in socialLinks" :key="social" :href="social.linkUrl" target="_blank">
          <Github class="social-icon" v-if="social.linkTitle === 'github'" />
          <Youtube class="social-icon" v-if="social.linkTitle === 'youtube'" />
          <Twitter class="social-icon" v-if="social.linkTitle === 'twitter'" />
          <Codepen class="social-icon" v-if="social.linkTitle === 'codepen'" />
          <Linkedin class="social-icon" v-if="social.linkTitle === 'linkedin'" />
          <Pinterest class="social-icon" v-if="social.linkTitle === 'pinterest'" />
        </a>
      </div>
    </div>

    <!-- this is part of the default page  -->

    <Head>
      <Title>Cai Toy / Contact </Title>
    </Head>
    <div ref="lgText" class="large-text file:hello opacity-5 absolute">
      contact
    </div>
    <div ref="lgBgText" class="large-text-bg opacity-[1%] absolute bottom-0 text-base top-40 h-screen">
      contact
    </div>
    <!-- end of innter element / vue3 doesn't require, nuxt does for animations -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import gsap from "gsap"
import Github from "../components/app/icons/Github.vue"
import Youtube from "../components/app/icons/Youtube.vue"
import Twitter from "../components/app/icons/Twitter.vue"
import Codepen from "../components/app/icons/Codepen.vue"
import Linkedin from "../components/app/icons/Linkedin.vue"
import Pinterest from "../components/app/icons/Pinterest.vue"
import { socialLinks } from '~/constants'

const lgText = ref()
const lgBgText = ref()

onMounted(() => {

  const titleTimeline = gsap.timeline()
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
        y: 800,
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
  font-size: 2rem;
  font-size: clamp(32px, 4vw, 48px);
  text-align: center;
  line-height: normal;
  cursor: default;
  z-index: 2;
  @apply flex text-center flex-col font-light w-full;
}

.links {
  cursor: pointer;
  position: relative;
  width: fit-content;
  margin: auto;
}


.links:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0px;
  height: 1px;
  background-color: var(--accent);
  transition: all ease 0.5s;
}

.links:hover:before {
  width: 100%;
}
</style>


<script>
console.log('contact page')

// import { getAnalytics, logEvent } from "firebase/analytics"
// const analytics = getAnalytics()
// logEvent(analytics, "portfolio_contact_view")



// let posX = 0
// let posY = 0

// const mouseMove = (event) => {
//   // console.log("Mouse Moved ", event.x, event.y)
//   posX = event.x
//   posY = event.y

//   gsap.to(".cursor", {
//     x: posX - 180,
//     y: posY - 380,
//   })
// }

</script>