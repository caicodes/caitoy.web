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
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDF4490c7nCn8G16n_FlaAWAiv0_1esOLE",
  authDomain: "cai-toy.firebaseapp.com",
  projectId: "cai-toy",
  storageBucket: "cai-toy.appspot.com",
  messagingSenderId: "742076604482",
  appId: "1:742076604482:web:26bc2775138c1ee6e28ddb",
  measurementId: "G-6T0GKYLR39"
};
const app = initializeApp(firebaseConfig);
onMounted(() => {
  const analytics = getAnalytics(app);
  logEvent(analytics, 'portfolio_app_view');
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
