<template>
  <div class="w-full h-screen flex flex-col align-middle place-content-center relative">
    <div ref="backLink" class="absolute z-50 bottom-40">
      <NuxtLink to="/work" class="back-link ml-20 flex justify-start place-items-center uppercase">
        <AppIconsBackArrowSvg class="text-accent h-12" />work
      </NuxtLink>
    </div>

    <div class="card bg-base-300 text-primary-content mx-auto w-1/2 z-50">
      <div class="card-body">
        <h2 class="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn">visit site</button>
        </div>
      </div>
    </div>
    <div ref="projectWindow" class="absolute z-50 right-0 ">
      <AppMockupsWindow class="shadow-2xl overflow-hidden project-window">
        <img src="~/assets/images/projects/coinwire-landing.jpg" alt="" ref="projectPic" class="project-view" />
      </AppMockupsWindow>
    </div>

    <!-- this is part of the default page  -->

    <Head>
      <Title>Cai Toy / Projects </Title>
    </Head>
    <div ref="lgText" class="large-text opacity-5 absolute">
      project
    </div>
    <div ref="lgBgText" class="large-text-bg opacity-5 w-full absolute">
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
const backLink = ref()
const projectPic = ref()
const projectWindow = ref()

onMounted(() => {
  gsap.fromTo(projectWindow.value, { y: 0, opacity: 0 }, { opacity: 1, y: -50, delay: .618 })
  const picTimeline = gsap.timeline()
  picTimeline.fromTo(projectPic.value, { opacity: 0, x: -960 }, { x: 0, opacity: 1, delay: 1 })
})

onMounted(() => {

  const backLinkTimeline = gsap.timeline()

  backLinkTimeline.fromTo(backLink.value,
    {
      x: 50,
      opacity: 0,
    },
    {
      ease: 'power2.out',
      delay: .3,
      x: -50,

      opacity: 1,
      duration: 1
    })

  const titleTimeline = gsap.timeline()
  titleTimeline
    .fromTo(lgText.value, { xPercent: -100 }, { xPercent: 0 })
    .fromTo(
      lgBgText.value,
      {
        x: 0,
        yPercent: 0,
        scale: 0.5,
        opacity: 0,
      },
      {
        x: 12.5,
        yPercent: 90,
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

.large-text-bg {
  font-size: 25vw;
  line-height: 10vw;
  text-transform: uppercase;
  text-align: left;
  cursor: default;
}

.project-view {
  width: 960px;
  /* transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1); */
}

/* 
.project-view:hover {
  width: 960px;
} */
</style>
