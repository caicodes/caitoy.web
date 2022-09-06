<template>
  <div>
    <div class="main-text flex flex-col align-middle relative uppercase">
      <div ref="hello" class="hello opacity-0 absolute">hello</div>
      <div class="flex absolute">
        <div ref="im" class="im opacity-0 mr-5 lg:mr-7">i'm</div>
        <div ref="cai" class="cai opacity-0">cai</div>
      </div>
      <div class="flex">
        <div ref="i" class="i opacity-0 mr-5 lg:mr-7">i</div>
        <div ref="create" class="create opacity-0 z-30">create</div>
      </div>
      <span @mouseleave="experiencesOff()" @mouseover="experiencesOn()" ref="experiences"
        class="experiences opacity-0">experiences</span>
    </div>
    <div class="img_group">
      <div class="img_group_inner">
        <Phone ref="phone1" imgSrc="/images/mobile/photo-1.jpg" class="phone" />
        <Phone ref="phone2" imgSrc="/images/mobile/photo-2.jpg" class="phone" />
        <Phone ref="phone3" imgSrc="/images/mobile/photo-3.jpg" class="phone" />
        <Phone ref="phone4" imgSrc="/images/mobile/photo-4.jpg" class="phone" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import gsap from "gsap"
import Phone from "../components/app/mockups/PhoneBgImg.vue"

const phone1 = ref()
const phone2 = ref()
const phone3 = ref()
const phone4 = ref()

const hello = ref()
const im = ref()
const cai = ref()
const i = ref()
const create = ref()
const experiences = ref()

function experiencesOn() {
  console.log("yo on it")
  gsap.to(".phone", {
    x: 100,
    margin: "0 10px 0",
    duration: 1,
    opacity: 1,
    rotate: 0,
    stagger: 0.14,
  })
}
function experiencesOff() {
  console.log("yo off it")
  gsap.to(".phone", {
    x: 1100,
    margin: "0 -140px 0",
    duration: 1,
    opacity: 1,
    rotate: 15,
    stagger: 0.14,
  })
}


onMounted(() => {
  const animation = gsap.timeline()

  console.log("mounted")
  animation
    .fromTo(
      hello.value,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, delay: 1, duration: 0.5, ease: "power4.easeOut" }
    )
    .to(hello.value, { delay: 0.5, opacity: 0 })
    .fromTo(
      im.value,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, delay: 0.25, duration: 0.5, ease: "power4.easeOut" }
    )
    .fromTo(
      cai.value,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, delay: 0, duration: 0.5, ease: "power4.easeOut" }
    )
    .to(im.value, {
      delay: 1.25,
      opacity: 0,
      ease: "easeIn",
    })
    .to(cai.value, {
      delay: 0,
      opacity: 0,
      ease: "easeIn",
    })
    .fromTo(
      i.value,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, delay: 0.5, duration: 0.35, ease: "power4.easeOut" }
    )
    .fromTo(
      create.value,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, delay: 0, duration: 1.25, ease: "power4.easeOut" }
    )
    .fromTo(
      experiences.value,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, delay: 0.25, duration: 2, ease: "power4.easeOut" }
    )
    .from(".phone", {
      x: 1100,
      duration: 1,
      opacity: 0,
      stagger: 0.14,
    })
    .to(
      ".phone",
      {
        x: 1100,
        margin: "0 -140px 0",
        duration: 1,
        opacity: 1,
        rotate: 15,
        stagger: 0.14,
      },
      "-=1.4"
    )
})
</script>

<style scoped>
.img_group :before {
  content: "";
  z-index: 20;
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, rgba(0 0 0/70%), transparent);
  opacity: 0;
}

.img_group :after {
  content: "";
  z-index: 20;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, rgba(0 0 0/70%), transparent);
  opacity: 0;
}

.img_group {
  position: absolute;
  top: 10%;
  left: 0;
  margin: 0 auto;
  width: 100%;
  padding: 0 5vw;
  z-index: 1;
}

.img_group_inner {
  display: flex;
}

.img_group .phone {
  opacity: 0;

  z-index: 99;
  position: relative;
}

.experiences {
  position: relative;
  display: flex;
  width: auto;
}

.experiences:after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: var(--primary-content);
  transition: all ease 0.5s;
}

.experiences:hover:after,
.experiences:hover::before {
  width: 100%;
}

.experiences:hover::before {
  height: 50vh;
}

.experiences:before {
  content: "";
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  background-image: linear-gradient(to top, rgba(0 0 0/60%), transparent);
  transition: all ease 0.5s;
  z-index: -40;
  @apply blur-2xl;
}
</style>
