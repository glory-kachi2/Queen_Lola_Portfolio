<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import modelImg from '@/assets/images/sport/model_on_scarf.jpg'
import Navbar from './Navbar.vue'
import BioSideNav from './BioSideNav.vue'

const scrollY = ref(0)
const isBioOpen = ref(false)

const handleScroll = () => {
  scrollY.value = window.scrollY
}

const openBio = () => {
  isBioOpen.value = true
}

const closeBio = () => {
  isBioOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const parallaxOffset = () => scrollY.value * 0.2
</script>

<template>
  <div>
    <!-- Bio Side Nav -->
    <BioSideNav :isOpen="isBioOpen" @close="closeBio" />

    <main class="w-full flex relative">
      <Navbar @openBio="openBio" />

      <div class="min-h-screen w-full flex flex-col lg:flex-row">
        <!-- LEFT SIDE -->
        <div
          class="w-full lg:w-1/2 bg-teal-700 text-white flex items-center justify-center p-8 lg:p-16 pt-48 lg:pt-48"
        >
          <div class="max-w-xl">
            <p class="text-yellow-400 text-xl lg:text-2xl mb-4 font-light">Hey, I'm</p>
            <h1 class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2 leading-tight">
              Balogun
            </h1>
            <h1 class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight">
              Jejelola
            </h1>
            <p class="text-base lg:text-lg text-gray-200">Actor / Performer / Model</p>
          </div>
        </div>

        <!-- RIGHT SIDE -->
        <div class="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen relative overflow-hidden">
          <div
            class="absolute inset-0 w-full h-[120%]"
            :style="{
              backgroundImage: `url(${modelImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transform: `translateY(${parallaxOffset()}px)`,
              transition: 'transform 0.1s ease-out',
            }"
          />
        </div>
      </div>
    </main>
  </div>
</template>
