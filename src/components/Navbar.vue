<script setup>
const emit = defineEmits(['openBio'])

const navItems = [
  { name: 'Bio', href: '#bio', action: 'openBio' },
  { name: 'Video', href: '#video' },
  { name: 'Photos', href: '#photos' },
  { name: 'Contact', href: '#contact' },
]

const handleNavClick = (item, event) => {
  if (item.action === 'openBio') {
    event.preventDefault()
    emit('openBio')
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
