<template>
  <div>
    <div class="main-text flex flex-col align-middle relative">
      <div ref="hello" class="hello opacity-0 absolute">hello</div>
      <div class="flex absolute">
        <div ref="im" class="im opacity-0">i'm</div>
        <div ref="cai" class="cai opacity-0">cai</div>
      </div>

      <div class="flex">
        <div ref="itext" class="i opacity-0">i</div>
        <div ref="createtext" class="create opacity-0">create</div>
      </div>

      <span
        @mouseleave="experiencesOff()"
        @mouseover="experiencesOn()"
        ref="experiencestext"
        class="experiences opacity-0"
        >experiences</span
      >
    </div>
    <div class="img_group">
      <div class="img_group_inner">
        <img ref="img1" src="~/assets/images/mobile/photo-4.jpg" alt="" />
        <img ref="img2" src="~/assets/images/mobile/photo-3.jpg" alt="" />
        <img ref="img3" src="~/assets/images/mobile/photo-2.jpg" alt="" />
        <img ref="img4" src="~/assets/images/mobile/photo-1.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import gsap from "gsap"

const img1 = ref()
const img2 = ref()
const img3 = ref()
const img4 = ref()
const hello = ref()
const im = ref()
const cai = ref()
const itext = ref()
const createtext = ref()
const experiencestext = ref()

function experiencesOn() {
  console.log("yo on it")
  gsap.to(".img_group img", {
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
  gsap.to(".img_group img", {
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

  console.log("yo gsap")

  animation
    .fromTo(
      hello.value,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, delay: 1, duration: 0.5, ease: "power4.easeOut" }
    )
    .to(hello.value, { delay: 1, opacity: 0 })
    .fromTo(
      im.value,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, delay: 0.5, duration: 0.5, ease: "power4.easeOut" }
    )
    .fromTo(
      cai.value,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, delay: 0, duration: 0.5, ease: "power4.easeOut" }
    )
    .to(im.value, {
      delay: 2,
      opacity: 0,
      ease: "easeIn",
    })
    .to(cai.value, {
      delay: 0,
      opacity: 0,
      ease: "easeIn",
    })
    .fromTo(
      itext.value,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, delay: 0.5, duration: 0.35, ease: "power4.easeOut" }
    )
    .fromTo(
      createtext.value,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, delay: 0, duration: 1.25, ease: "power4.easeOut" }
    )
    .fromTo(
      experiencestext.value,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, delay: 0.25, duration: 3, ease: "power4.easeOut" }
    )
    .from([img1.value, img2.value, img3.value, img4.value], {
      x: 1100,
      duration: 1,
      opacity: 0,
      stagger: 0.14,
    })
    .to(
      [img1.value, img2.value, img3.value, img4.value],
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
.content {
  height: calc(100vh - 120px);
  width: 100vw;
  align-items: center;
  display: flex;
  position: relative;

  @apply p-5;
}
.main-text {
  font-size: 12vw;
  font-weight: 400;
  line-height: 10vw;
  text-transform: uppercase;
  text-align: left;
  cursor: default;
  width: 100vw;
  z-index: 2;
  @apply flex;
}
.img_group_inner {
  display: flex;
}
.content .img_group {
  position: absolute;
  top: 10%;
  left: 0;
  margin: 0 auto;
  width: 100%;
  padding: 0 5vw;
  z-index: 1;
}

.content .img_group img {
  opacity: 0;
  width: 20vw;
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
  background-color: white;
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

.content .img_group :before {
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
.content .img_group :after {
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
</style>
