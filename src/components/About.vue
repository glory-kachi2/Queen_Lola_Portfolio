<template>
  <div
    class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 bg-gray-200 relative"
  >
    <!-- About Section -->
    <div class="max-w-4xl w-full text-center">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-700 mb-6 sm:mb-8">
        {{ title }}
      </h1>

      <p
        class="text-base sm:text-lg leading-relaxed text-gray-800 mb-4 sm:mb-6 max-w-3xl mx-auto px-4"
      >
        {{ paragraph1 }}
      </p>

      <p
        class="text-base sm:text-lg leading-relaxed text-gray-800 mb-6 sm:mb-8 max-w-3xl mx-auto px-4"
      >
        {{ paragraph2 }}
      </p>

      <button
        @click="viewResume"
        class="bg-yellow-400 text-gray-800 font-semibold px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg hover:bg-yellow-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 mt-4"
      >
        {{ buttonText }}
      </button>
    </div>

    <!-- Social Bar - Desktop -->
    <div
      class="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 bg-yellow-400 flex-col shadow-lg z-50"
    >
      <a
        v-for="social in socialLinks"
        :key="social.name"
        :href="social.url"
        class="w-16 h-16 flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300 border-b border-black/10 last:border-b-0"
        :aria-label="social.name"
        target="_blank"
      >
        <img :src="social.icon" :alt="social.name" class="w-5 h-5" />
      </a>
    </div>

    <!-- Social Bar - Mobile -->
    <div
      class="lg:hidden flex fixed bottom-0 left-0 right-0 bg-yellow-400 flex-row justify-center shadow-lg z-50"
    >
      <a
        v-for="social in socialLinks"
        :key="social.name"
        :href="social.url"
        class="w-16 h-16 flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300 border-r border-black/10 last:border-r-0"
        :aria-label="social.name"
        target="_blank"
      >
        <img :src="social.icon" :alt="social.name" class="w-5 h-5" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import igLogo from '@/assets/icons/instagram-logo.png'
import faceBookLogo from '@/assets/icons/facebook.png'
import twitterLogo from '@/assets/icons/twitter.png'
import youTubeLogo from '@/assets/icons/youtube.png'

const title = ref('About Me')
const buttonText = ref('View Full Resume')

const paragraph1 = ref(
  `I am a friendly, hardworking, and dedicated model with excellent communication skills that help me connect effortlessly with clients, colleagues, and creative teams. With a naturally warm personality and a professional approach, I am able to adapt quickly to different environments, making collaboration smooth and enjoyable for everyone involved.`,
)

const paragraph2 = ref(
  `Over the years, I have built a strong reputation for being reliable, detail-oriented, and a fast learner. Whether on set, backstage, or during brand engagements, I consistently maintain positive working relationships and uphold the highest level of professionalism. My interpersonal skills and strong sense of responsibility allow me to excel in every role I take on, and I am always committed to delivering exceptional results for every project.`,
)

const socialLinks = ref([
  { name: 'Instagram', icon: igLogo, url: 'https://instagram.com' },
  { name: 'Facebook', icon: faceBookLogo, url: 'https://facebook.com' },
  { name: 'Twitter', icon: twitterLogo, url: 'https://twitter.com' },
  { name: 'YouTube', icon: youTubeLogo, url: 'https://youtube.com' },
])

const viewResume = () => {
  window.open('Jejelole_Balogun_CV.pdf', '_blank')
}
</script>

<style scoped>
/* Any additional custom styles if needed */
</style>
