<template>
  <div class="flex flex-col align-middle place-content-center relative">
    <NuxtLink to="/work" class="back-link ml-20 flex justify-center place-items-center uppercase">
      <AppIconsBackArrowSvg class="text-accent h-12" />work
    </NuxtLink>
    <div class="large-text file:hello opacity-5 absolute">project</div>
  </div>
</template>

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
</style>
