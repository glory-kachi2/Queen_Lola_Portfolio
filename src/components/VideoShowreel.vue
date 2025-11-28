<script setup>
import { ref, onMounted } from 'vue'

import Reel from '@/assets/videos/runway2.mp4'

const videoRef = ref(null)
const isPlaying = ref(true)
const isMuted = ref(false)

const togglePlay = () => {
  if (videoRef.value) {
    if (isPlaying.value) {
      videoRef.value.pause()
    } else {
      videoRef.value.play().catch((err) => console.log('Play error:', err))
    }
    isPlaying.value = !isPlaying.value
  }
}

const toggleMute = () => {
  if (videoRef.value) {
    videoRef.value.muted = !videoRef.value.muted
    isMuted.value = !isMuted.value
  }
}

onMounted(() => {
  if (videoRef.value) {
    // Ensure video plays on mount
    videoRef.value.muted = isMuted.value
    const playPromise = videoRef.value.play()
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.log('Autoplay prevented:', err)
        isPlaying.value = false
      })
    }
  }
})
</script>

<template>
  <section class="w-full">
    <h1
      class="text-center text-5xl sm:text-6xl lg:text-7xl font-bold text-teal-800 mb-12 sm:mb-16 lg:my-20 px-4"
    >
      Showreel
    </h1>

    <!-- Video Section - Full Width -->
    <div class="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden group">
      <!-- Video -->
      <video
        ref="videoRef"
        :src="Reel"
        autoplay
        loop
        playsinline
        :muted="isMuted"
        class="w-full h-full object-cover object-center"
        style="filter: contrast(1.05) saturate(1.1)"
      ></video>

      <!-- Overlay Controls - Bottom Left -->
      <div
        class="absolute bottom-6 left-6 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <!-- Pause/Play Button -->
        <button
          @click="togglePlay"
          class="w-10 h-10 flex items-center justify-center text-white hover:text-gray-300 transition-colors duration-200"
          :aria-label="isPlaying ? 'Pause video' : 'Play video'"
        >
          <!-- Pause Icon -->
          <svg v-if="isPlaying" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
          <!-- Play Icon -->
          <svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        <!-- Mute/Unmute Button -->
        <button
          @click="toggleMute"
          class="w-10 h-10 flex items-center justify-center text-white hover:text-gray-300 transition-colors duration-200"
          :aria-label="isMuted ? 'Unmute video' : 'Mute video'"
        >
          <!-- Volume On Icon -->
          <svg v-if="!isMuted" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
            />
          </svg>
          <!-- Volume Off Icon -->
          <svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Smooth transitions */
video {
  display: block;
}
</style>
