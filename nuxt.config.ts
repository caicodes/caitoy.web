import { defineNuxtConfig } from "nuxt"
import gsap from "gsap"
export default defineNuxtConfig({
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `usePinia()`
          "defineStore",
          // automatically imports `usePinia()` as `usePiniaStore()`
          ["defineStore", "definePiniaStore"],
        ],
      },
    ],
  ],
  css: ["@/styles/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  meta: {
    title: "Cai Toy / Design, Develoment, Production...",
  },
  head: {
    link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg?v=3" }],
  },
  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
    },
    extraEases: {
      expoScaleEase: true,
    },
  },
})
