<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <nav class="bg-white border-b border-gray-200 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Left: Menu Button (Mobile) -->
        <div class="flex items-center gap-6">
          <button
            @click="toggleMenu"
            class="md:hidden text-gray-700 hover:text-teal-600 transition-colors text-sm uppercase tracking-wider"
          >
            Menu
          </button>
        </div>

        <!-- Center: Logo/Brand -->
        <div class="absolute left-1/2 transform -translate-x-1/2">
          <RouterLink
            to="/"
            class="text-xl sm:text-2xl font-bold text-gray-900 hover:text-teal-600 transition-colors tracking-wide uppercase"
          >
            Balogun Jejelola
          </RouterLink>
        </div>

        <!-- Right: Navigation Links (Desktop) -->
        <div class="hidden md:flex items-center gap-8">
          <RouterLink
            to="/"
            class="text-sm text-gray-700 hover:text-teal-600 transition-colors uppercase tracking-wider"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/gallery"
            class="text-sm text-gray-700 hover:text-teal-600 transition-colors uppercase tracking-wider"
          >
            Gallery
          </RouterLink>
          <a
            href="#contact"
            class="text-sm text-gray-700 hover:text-teal-600 transition-colors uppercase tracking-wider"
          >
            Contact
          </a>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-200">
          <div class="flex flex-col gap-4">
            <RouterLink
              to="/"
              @click="toggleMenu"
              class="text-sm text-gray-700 hover:text-teal-600 transition-colors uppercase tracking-wider"
            >
              Home
            </RouterLink>
            <RouterLink
              to="/gallery"
              @click="toggleMenu"
              class="text-sm text-gray-700 hover:text-teal-600 transition-colors uppercase tracking-wider"
            >
              Gallery
            </RouterLink>
            <a
              href="#contact"
              @click="toggleMenu"
              class="text-sm text-gray-700 hover:text-teal-600 transition-colors uppercase tracking-wider"
            >
              Contact
            </a>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<style scoped>
/* Active link styling */
a.router-link-active {
  color: #0d9488; /* teal-600 */
}
</style>
