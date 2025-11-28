<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const portraitsWrapper = ref(null)
const portraitsCard = ref([])
const titleRef = ref(null)

const portraits = [
  {
    id: 1,
    image: new URL('@/assets/images/sport/holding_bat.jpg', import.meta.url).href,
    alt: 'Model',
  },
  {
    id: 2,
    image: new URL('@/assets/images/bikini/bikini3.jpg', import.meta.url).href,
    alt: 'Model',
  },
  {
    id: 3,
    image: new URL('@/assets/images/runway/runway-img4.jpg', import.meta.url).href,
    alt: 'Model',
  },
  {
    id: 4,
    image: new URL('@/assets/images/bag/bag6.jpg', import.meta.url).href,
    alt: 'Model',
  },
  {
    id: 5,
    image: new URL('@/assets/images/jewelry/jewelry4.jpg', import.meta.url).href,
    alt: 'Model',
  },
  {
    id: 6,
    image: new URL('@/assets/images/studio/studio5.jpg', import.meta.url).href,
    alt: 'Model',
  },
  {
    id: 7,
    image: new URL('@/assets/images/general/blonde-hair.jpg', import.meta.url).href,
    alt: 'Model',
  },

  {
    id: 8,
    image: new URL('@/assets/images/general/afro.jpg', import.meta.url).href,
    alt: 'Model',
  },
  {
    id: 9,
    image: new URL('@/assets/images/general/glasses.jpg', import.meta.url).href,
    alt: 'Model',
  },
]

onMounted(() => {
  // Animate title
  gsap.from(titleRef.value, {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: portraitsWrapper.value,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  })

  // Animate cards with alternating entrance directions
  portraitsCard.value.forEach((card, index) => {
    const direction = index % 2 === 0 ? -100 : 100
    const rotation = index % 2 === 0 ? -5 : 5

    gsap.from(card, {
      opacity: 0,
      x: direction,
      y: 80,
      rotation: rotation,
      scale: 0.8,
      duration: 1.2,
      delay: index * 0.15,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    })
  })
})
</script>

<template>
  <div
    ref="portraitsWrapper"
    class="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-teal-50 py-20 px-4 sm:px-8"
  >
    <div class="max-w-7xl mx-auto">
      <!-- Title -->
      <div class="text-center mb-16">
        <h1
          ref="titleRef"
          class="text-6xl sm:text-7xl lg:text-8xl font-bold text-teal-700 mb-4 tracking-tight"
        >
          Photos
        </h1>
        <div class="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
      </div>

      <!-- Masonry-style Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
        <div
          v-for="(portrait, index) in portraits"
          :key="portrait.id"
          ref="portraitsCard"
          :class="[
            'group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer',
            index === 2 ? 'sm:col-span-2 lg:col-span-1' : '',
          ]"
        >
          <RouterLink :to="{ name: 'gallery' }" class="block w-full h-full">
            <!-- Image Container -->
            <div class="overflow-hidden bg-slate-300 relative aspect-square">
              <img
                :src="portrait.image"
                :alt="portrait.alt"
                class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
              />

              <!-- Overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <div
                  class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >
                  <p class="text-white text-lg font-semibold">View More</p>
                  <div class="w-12 h-1 bg-yellow-400 mt-2 rounded-full"></div>
                </div>
              </div>

              <!-- Corner Accent -->
              <div
                class="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom grid auto-flow for masonry effect */
@supports (grid-template-rows: masonry) {
  .grid {
    grid-template-rows: masonry;
  }
}
</style>
