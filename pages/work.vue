<template>
  <div class="flex flex-col align-middle relative">
    <div class="large-text file:hello opacity-5 absolute">work</div>
    <div class="main-text">
      <div class="line line1">
        <p><a href="/project">project</a></p>
      </div>
      <div class="line line2">
        <p><a href="/project">project</a></p>
      </div>
      <div class="line line3">
        <p><a href="/project">project</a></p>
      </div>
      <div class="line line4">
        <p><a href="/project">project</a></p>
      </div>
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
  @apply flex;
}
</style>
