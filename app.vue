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

<script setup>
import firebase from './firebase/firebase';
import { getAnalytics, logEvent } from "firebase/analytics";

useHead({
  title: 'Cai Toy / Design and Development Portfolio',
  meta: [
    { name: 'description', content: 'Portfolio site of Cai Toy.' }
  ],

});

onMounted(() => {
  const analytics = getAnalytics(firebase);
  logEvent(analytics, "portfolio_app_view");

})



</script>

<style>
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
  text-align: left;
  cursor: default;
  width: 100vw;
  z-index: 2;
  @apply flex;
}

.line {
  overflow: hidden;
}

.main-text p {
  overflow: hidden;
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
</style>
