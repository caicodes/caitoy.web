<template>
    <div class="line">
        <div class="cursor follow" :style="{ backgroundImage: `url(${link.imgSrc})`}"></div>
        <NuxtLink to="/projects/project">{{link.title}} </NuxtLink>

    </div>

</template>

<script setup>
const props = defineProps({
    link: {
        title: String,
        imgSrc: String
    },
})
</script>

<style scoped>
.follow {
    opacity: 0;
}

.line:hover .follow {
    opacity: 1;
}
</style>
