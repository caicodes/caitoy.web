<template>
  <nav
    class="font-sans dark-highlight flex justify-between items-center py-2 fixed z-50 top-0 right-0 left-0"
  >
    <nuxt-link to="/" class="flex items-center"
      ><span class="logo-brand"
        >CAI<span class="logo-brand-light text-primary opacity-50 ml-0.5"
          >TOY</span
        ></span
      >
    </nuxt-link>

    <button class="mobile-menu-btn mr-4 mt-2 btn btn-ghost md:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <div class="gap-2 mr-2 hidden md:flex">
      <button
        class="signup-button btn btn-secondary btn-ghost hover:bg-inherit btn-sm px-8 rounded-full"
      >
        SIGN IN
      </button>
      <button class="signup-button btn btn-secondary btn-sm px-8 rounded-full">
        SIGNU UP NOW
      </button>
    </div>
  </nav>
</template>

<style>
.signup-button {
  font-size: 4rem !important;
  color: white;
  font-weight: 100 !important;
  font-family: "Bismark-Light" !important;
}

.dark-highlight {
  background: rgba(0, 0, 0, 0.3);
}

.logo-brand {
  font-family: "Bismark-Bold";
  letter-spacing: -0.2rem;
  font-size: 5.78rem;
  font-weight: 100 !important;
  line-height: 0%;
  margin-left: 0.8rem;
  color: white;
}

.logo-brand-light {
  font-family: "Bismark-Light";
  font-weight: 100 !important;
  letter-spacing: -0.2rem;
  font-size: 6rem;
  line-height: 0%;
}

.mobile-menu-btn:hover,
.mobile-menu-btn:active {
  background: var(--secondary);
  outline: none;
}
</style>
