<template>
  <main class="fixed">
    <AppHeader />
    <section class="content">
      <NuxtPage />
    </section>
    <AppFooter />
    <AppAnimatedBackground />
  </main>
</template>

<style>
.content {
  height: calc(100vh - 120px);
  width: 100vw;
  align-items: center;
  display: flex;
  position: relative;
  @apply p-5;
}
</style>
