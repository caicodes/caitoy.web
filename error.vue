<template>
  <div class="flex flex-col align-middle place-content-center relative ">
    <div class="main-text h-screen">
      <div>404 Error - Sorry, page not found...</div>
      <div class="links"><a href="/">← Back to the home page</a></div>
    </div>
    <!-- this is part of the default page  -->

    <Head>
      <Title>Cai Toy / 404 </Title>
    </Head>
    <div ref="lgText" class="large-text file:hello opacity-5 absolute">
      error
    </div>
    <div ref="lgBgText" class="large-text-bg opacity-[1%] absolute bottom-0 text-base top-40 h-screen">
      error
    </div>
    <!-- end of innter element / vue3 doesn't require, nuxt does for animations -->
  </div>
</template>

<script setup>

import { ref, onMounted } from "vue"
import gsap from "gsap"

const lgText = ref()
const lgBgText = ref()

onMounted(() => {

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
        xPercent: 2.5,
        y: 300,
        scale: 1.1,
        opacity: 0.008,
        delay: 0,
        duration: 0.2,
      }
    )
})
</script>

<style scoped>
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
  text-align: center;
  cursor: default;
  width: 100vw;
  z-index: 2;
  @apply flex text-center flex-col font-light p-40;
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
console.log('error page')

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