<template>
  <footer class="bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8 mt-auto">
    <div class="max-w-7xl mx-auto">
      <p class="text-center text-sm sm:text-base text-gray-600">
        © {{ year }} by {{ author }}. Powered by
        <a
          :href="wixUrl"
          class="hover:text-teal-700 transition-colors duration-300"
          target="_blank"
          rel="noopener"
        >
          {{ platform }}
        </a>
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

// Reactive data
const year = ref(new Date().getFullYear()) // dynamically use current year
const author = ref('Balogun Jejelola')
const platform = ref('IQly')
const wixUrl = ref('#')
</script>

<style scoped>
/* Optional: body styling should be done in your main app */
</style>
