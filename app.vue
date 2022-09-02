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
import firebase from './firebase/firebase'
import { getAnalytics, logEvent } from "firebase/analytics";
onMounted(() => {
  const analytics = getAnalytics(firebase)
  logEvent(analytics, "portfolio_app_view")
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
</style>
