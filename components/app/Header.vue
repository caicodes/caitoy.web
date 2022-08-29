<template>
  <header>
    <nav class="flex justify-between place-items-center p-5 uppercase">
      <div class="text-xl">
        <nuxt-link to="/" class="flex items-center"
          ><span class="logo-brand"
            >CAI<span class="logo-brand-light opacity-50 ml-0.5"
              >TOY</span
            ></span
          >
        </nuxt-link>
      </div>
      <div class="flex gap-5 md:gap-10 text-lg">
        <NuxtLink to="/">work</NuxtLink>
        <NuxtLink to="/">about</NuxtLink>
        <NuxtLink to="/">contact</NuxtLink>
      </div>
    </nav>
  </header>
</template>
