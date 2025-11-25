<script setup>
import { ref } from 'vue'

// Use your uploaded image
import Thumb from '@/assets/images/lying_holding_ball.jpg'
import Reel from '@/assets/videos/ai-generated-video-2.mp4'

const showVideo = ref(false)

console.log('VIDEO URL:', Reel)
</script>

<template>
  <section class="w-full">
    <h1
      class="text-center text-5xl sm:text-6xl lg:text-7xl font-bold text-teal-800 mb-12 sm:mb-16 lg:mb-28 px-4"
    >
      Showreel
    </h1>

    <!-- Thumbnail Section - Full Width -->
    <div
      class="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] cursor-pointer overflow-hidden group"
      @click="showVideo = true"
    >
      <!-- Image with proper cover -->
      <img
        :src="Thumb"
        alt="Thumbnail"
        class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />

      <!-- Overlay -->
      <div
        class="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30 group-hover:bg-black/40 transition-all duration-300"
      >
        <button
          class="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 hover:scale-110 transition-all duration-300 font-semibold"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"
            />
          </svg>
          Play Video
        </button>
      </div>
    </div>

    <!-- Video Modal -->
    <transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="showVideo" class="fixed inset-0 bg-black z-50 flex items-center justify-center">
        <!-- Video Container -->
        <div class="relative w-full h-full flex items-center justify-center px-4 sm:px-8 md:px-16">
          <video
            :src="Reel"
            controls
            autoplay
            class="w-full max-w-6xl max-h-[80vh] rounded-lg shadow-2xl"
          ></video>

          <!-- Close Button - Top Right Corner -->
          <button
            class="absolute top-4 right-4 w-12 h-12 text-white text-4xl font-light hover:text-gray-300 transition-colors duration-200 z-10"
            @click="showVideo = false"
            aria-label="Close video"
          >
            ×
          </button>

          <!-- Title - Top Left -->
          <div class="absolute top-4 left-4 text-white text-xl font-semibold z-10">Showreel</div>
        </div>
      </div>
    </transition>
  </section>
</template>

<style scoped>
/* Smooth transitions */
</style>
