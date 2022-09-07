<template>
  <div class="bottom-bar">
    <div class="flex justify-between p-5 gap-4">
      <div>ui developer / frontend engineer / web producer</div>
      <div class="hidden md:flex gap-4">
        <a href="https://cai-resume.web.app/" target="_blank">resume</a> /
        <a href="https://www.linkedin.com/in/cai-toy" target="_blank">linkedin</a> /
        <a href="https://github.com/caicodes" target="_blank">github</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bottom-bar {
  @apply fixed bottom-0 left-0 right-0 uppercase text-xs text-base-content/20 justify-between w-full z-50;
}

.bottom-bar a:hover {
  @apply text-base-content;
}
</style>
