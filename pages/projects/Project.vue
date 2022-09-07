<template>
  <div class="flex flex-col align-middle place-content-center relative">
    <NuxtLink to="/work" class="back-link ml-20 flex justify-center place-items-center uppercase">
      <AppIconsBackArrowSvg class="text-accent h-12" />work
    </NuxtLink>



    <!-- this is part of the default page  -->

    <Head>
      <Title>Cai Toy / Projects </Title>
    </Head>
    <div ref="lgText" class="large-text file:hello opacity-5 absolute">
      project
    </div>
    <div ref="lgBgText" class="large-text-bg opacity-[1%] absolute bottom-0 text-base top-40 h-screen">
      project
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
.back-link {
  @apply z-50 text-3xl relative;
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
</style>
