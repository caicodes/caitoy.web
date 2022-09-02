<template>
  <div class="mockup-phone border-primary">
    <div class="camera"></div>
    <div class="display">
      <div class="artboard artboard-demo phone-1" :style="{ backgroundImage: `url(${imgSrc})` }">

      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imgSrc: String,
})
</script>

<style scoped>
/* .mockup-phone {
  width: 20vw;
  @apply aspect-[479/664];
} */

.phone-1 {
  @apply bg-pink-500;
  background-size: cover;
}
</style>
