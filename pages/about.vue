<template>
  <div class="flex flex-col align-middle place-content-center relative w-full h-screen overflow-hidden">
    <div class="content-main-text">
      <div class="flex flex-col md:flex-row">
        <div class="lg:w-2/3 text-right pt-24">
          <div class="px-8 lg:px-20 md:text-4xl text-3xl">UX/UI DESIGNER & SENIOR SOFTWARE ENGINEER</div>
          <div class="h-12"></div>
          <div class="leading-loose px-8 lg:px-20 flex justify-end">
            <div class="lg:w-2/3 text-2xl">I am a solid website producer with end to end experience and the
              ability
              to work on teams
              as well as
              individually. I enjoy coding and design equally and aside from websites, I create brands, logos, marketing
              and promotional designs, motion graphics, videos, and even product photography.
              <div class="h-8"></div>
              <a href="https://cai-resume.web.app" target="_blank" class="btn btn-primary">visit resume site</a>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 hidden lg:block">
          <img src="/images/projects/mockups/mademoiselle_mockup.png" alt="" />
        </div>
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
// import { getAnalytics, logEvent } from "firebase/analytics"
import { socialLinks } from "~~/constants";
import gsap from "gsap"

const lgText = ref()
const lgBgText = ref()

onMounted(() => {
  console.log("about page...")
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
  font-size: 1.2rem;
  text-align: center;
  cursor: default;
  z-index: 2;
  @apply flex text-center flex-col font-light w-full;
}

.content-main-text a svg {
  color: var(--accent);
}

.content-main-text a:hover svg {
  color: white;
}
</style>
