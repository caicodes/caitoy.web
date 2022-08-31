<template>
  <div class="plane-wrapper absolute bottom-2 right-2 w-6 h-6 rotate-45">
    <svg>
      <path
        class="plane"
        fill="currentColor"
        d="M20,13.7v-1.4l-8.6-5.1V3.5c0-1-0.6-3.5-1.4-3.5S8.6,2.4,8.6,3.5v3.7L0,12.2v1.4l8.6-1.8l0.5,5l-2.5,1.9V20
    l3.5-0.8l3.5,0.8v-1.2L11,16.9l0.5-5L20,13.7z"
      />
    </svg>
  </div>
</template>

<style>
:root {
  --bg-grad-color-1: #28062f;
  --bg-grad-color-2: #27042a;
  --bg-grad-color-3: #130426;
  --bg-grad-color-4: #060107;
}
body {
  background: linear-gradient(
    -65deg,
    var(--bg-grad-color-1),
    var(--bg-grad-color-2),
    var(--bg-grad-color-3),
    var(--bg-grad-color-4)
  );
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.plane-wrapper {
  @apply text-white/10 bottom-4 right-[21.5rem] opacity-0 -z-50;
}
</style>
