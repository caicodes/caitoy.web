<template>
  <div class="mockup-phone border-primary">
    <div class="camera"></div>
    <div class="display">
      <div class="artboard artboard-demo phone-1">
        <img :src="imgSrc" alt="" />
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
img {
  width: 20vw;
}
</style>
