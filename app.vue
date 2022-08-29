<template>
  <main class="fixed">
    <AppHeader />

    <section class="content">
      <div class="main-text">
        <!-- <span class="whitespace-nowrap">Hi,</span><br />
          <span class="whitespace-nowrap">I'm Cai</span><br /> -->
        <div class="create whitespace-nowrap">
          I create<br />
          <span class="experiences">experiences</span>
        </div>
      </div>
      <div class="img_group">
        <div class="img_group_inner">
          <img src="./images/mobile/photo-1.jpg" alt="" />
          <img src="./images/mobile/photo-2.jpg" alt="" />
          <img src="./images/mobile/photo-3.jpg" alt="" />
          <img src="./images/mobile/photo-4.jpg" alt="" />
        </div>
      </div>

      <div
        class="bottom-bar fixed bottom-0 left-0 right-0 uppercase text-xs opacity-30 justify-between w-full"
      >
        <div class="flex justify-between p-5 gap-4">
          <div>web developer / ui engineer / web producer</div>
          <div class="hidden md:block">
            instagram / twitter / youtube / github
          </div>
        </div>
      </div>
    </section>

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
.content .main-text {
  width: 100vw;
  z-index: 2;
  @apply flex;
}
.img_group_inner {
  display: flex;
  @apply gap-8 md:gap-16;
}
.content .img_group {
  position: absolute;
  top: 10%;
  left: 0;
  margin: 0 auto;
  width: 100%;
  padding: 0 5vw;
  z-index: 1;
}

.content .img_group img {
  opacity: 0;
  width: 20vw;
}

.main-text {
  font-size: 8vw;
  font-weight: 400;
  line-height: 8vw;
  text-transform: uppercase;
  text-align: left;
  cursor: default;
}

.experiences {
  position: relative;
  display: flex;
  width: auto;
}
.experiences:before {
  content: "";
  position: absolute;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: white;
  transition: all ease 0.5s;
}
.experiences:hover:before {
  width: 100%;
}
</style>
