<script setup>
import { useRouter } from 'vue-router'

const emit = defineEmits(['openBio'])
const router = useRouter()

const navItems = [
  { name: 'Bio', href: '#bio', action: 'openBio' },
  { name: 'Video', href: '#video', action: 'navigateVideos' },
  { name: 'Photos', href: '#photos', action: 'navigateGallery' },
  { name: 'Contact', href: '#contact', action: 'scrollToContact' },
]

const handleNavClick = (item, event) => {
  event.preventDefault()

  if (item.action === 'openBio') {
    emit('openBio')
  } else if (item.action === 'navigateGallery') {
    router.push({ name: 'gallery' })
  } else if (item.action === 'navigateVideos') {
    router.push({ name: 'gallery', hash: '#videos' })
  } else if (item.action === 'scrollToContact') {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}
</script>

<template>
  <nav class="absolute top-0 left-0 w-full lg:w-1/2 text-white">
    <div class="px-6 lg:px-12 py-6 lg:py-8">
      <div class="flex flex-col gap-4">
        <!-- LOGO/NAME -->
        <div>
          <h1 class="text-xl md:text-2xl font-bold text-yellow-400">Balogun Jejelola</h1>
        </div>
        <!-- NAVIGATION LINKS -->
        <div class="flex items-center gap-6 lg:gap-8">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            @click="handleNavClick(item, $event)"
            class="text-sm md:text-base font-normal hover:text-yellow-400 transition-colors duration-300 relative group cursor-pointer"
          >
            {{ item.name }}
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"
            ></span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Navigation styles */
</style>
