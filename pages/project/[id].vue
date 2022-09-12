<template>
  <div class="w-full h-screen flex flex-col align-middle place-content-center relative">
    <!-- main display section -->
    <div class="flex z-50 gap-4">
      <div ref="projectCard" class="shadow-2xl card bg-base-300 text-primary-content w-1/3">
        <div class="card-body">
          <h2 class="card-title">project title {{ $route.params.id }}s</h2>
          <p>the description... dynamic image ref... time to set it up, let's start with a basic rig...</p>
          <div class="card-actions justify-end">
            <button class="btn">visit site</button>
          </div>
        </div>
      </div>
      <div ref="projectWindow" class="w-2/3">
        <AppMockupsWindow class="shadow-2xl overflow-hidden project-window">
          <img :src="imgSrc" alt="" ref="projectPic" class="project-landing-photo" />
          {{imgSrc}}
        </AppMockupsWindow>
      </div>
    </div>
    <!-- this is part of the default page  -->
    <div ref="backLink" class="absolute z-50 bottom-40">
      <NuxtLink to="/work" class="back-link ml-20 flex justify-start place-items-center uppercase">
        <AppIconsBackArrowSvg class="text-accent h-12" />work
      </NuxtLink>
    </div>

    <Head>
      <Title>Cai Toy / Projects </Title>
    </Head>
    <div ref="lgText" class="large-text opacity-5 absolute">
      project
    </div>
    <div ref="lgBgText" class="large-text-bg opacity-5 w-full absolute">
      project
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import gsap from "gsap"

const lgText = ref()
const lgBgText = ref()
const backLink = ref()
const projectPic = ref()
const projectCard = ref()
const projectWindow = ref()

const route = useRoute();
const imgSrc = route.params.id

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
    .fromTo(projectCard.value, { xPercent: -50, opacity: 0 }, { xPercent: 0, opacity: 1, ease: 'power.inOut' })
    .fromTo(projectWindow.value, { xPercent: 50, opacity: 0 }, { xPercent: 0, opacity: 1, ease: 'power.inOut' })

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

.project-landing-photo {
  width: 960px;
  /* transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1); */
}

/* 
.project-landing-photo:hover {
  width: 960px;
} 
*/
</style>
