<template>
  <div class="flex flex-col align-middle place-content-center relative">
    <div class="large-text file:hello opacity-5 absolute">work</div>
    <div class="main-text">
      <div class="line line1">
        <p><NuxtLink to="/projects/project">project</NuxtLink></p>
      </div>
      <div class="line line2">
        <p><NuxtLink to="/projects/project">project</NuxtLink></p>
      </div>
      <div class="line line3">
        <p><NuxtLink to="/projects/project">project</NuxtLink></p>
      </div>
      <div class="line line4">
        <p><NuxtLink to="/projects/project">project</NuxtLink></p>
      </div>

      <div class="cursor-follow1 cursor"></div>
      <div class="cursor-follow2 cursor"></div>
      <div class="cursor-follow3 cursor"></div>
      <div class="cursor-follow4 cursor"></div>
    </div>
  </div>
</template>

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

.main-text {
  font-size: 3vw;
  font-weight: 400;
  line-height: 10vw;
  text-transform: uppercase;
  text-align: left;
  cursor: default;
  width: 100vw;
  z-index: 2;
  @apply flex text-center flex-col;
}
</style>
