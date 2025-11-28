<script setup>
import { watch } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close'])

const closeSideNav = () => {
  emit('close')
}

const downloadResume = () => {
  const link = document.createElement('a')
  link.href = '/Jejelole_Balogun_CV.pdf' // or imported PDF path
  link.download = 'Jejelole_Balogun_CV.pdf'
  link.click()
}

// Lock/unlock body scroll when side nav opens/closes
watch(
  () => props.isOpen,
  (newVal) => {
    if (newVal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  },
)

const bioData = {
  personal: {
    height: '181CM',
    waist: '65CM',
    weight: '60KG',
    hips: '90CM',
    shoe: 'EU43',
    eyeColor: 'Brown',
    hairColor: 'Black (Currently faded blonde)',
    dress: 'S',
    bra: '34B',
    languages: 'English, German',
  },
  specialSkills: ['Tennis (Intermediate)', 'Singing', 'Swimming', 'Cooking'],
  theater: [
    { year: '2035', details: 'Play / Director / Theater / Role' },
    { year: '2035', details: 'Play / Director / Theater / Role' },
  ],
  film: [
    { year: '2035', details: 'Title / Director / Role' },
    { year: '2035', details: 'Title / Director / Role' },
    { year: '2035', details: 'Title / Director / Role' },
  ],
  tv: [
    { year: '2035', details: 'Title / Director / Production House / Role' },
    { year: '2035', details: 'Title / Director / Production House / Role' },
  ],
  education: [
    'Institution / Workshop Name / Instructor',
    'Institution / Workshop Name / Instructor',
    'Institution / Workshop Name / Instructor',
  ],
  awards: [
    { year: '2035', description: 'Description' },
    { year: '2035', description: 'Description' },
    { year: '2035', description: 'Description' },
  ],
}
</script>

<template>
  <div>
    <!-- Overlay -->
    <div
      v-if="isOpen"
      @click="closeSideNav"
      class="fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300"
      :class="isOpen ? 'opacity-100' : 'opacity-0'"
    ></div>

    <!-- Side Navigation -->
    <div
      class="fixed top-0 left-0 h-full w-full lg:w-1/2 bg-teal-800 text-white z-[70] overflow-y-auto transform transition-transform duration-500 ease-in-out"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="p-8 lg:p-12">
        <!-- Header with Close Button -->
        <div class="flex items-start justify-between mb-8">
          <h1 class="text-5xl lg:text-6xl font-bold text-yellow-400">Resume</h1>
          <button
            @click="closeSideNav"
            class="text-white hover:text-yellow-400 transition-colors p-2"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Personal Info-->
        <div class="mb-8">
          <p class="mb-2"><strong>Hips:</strong> {{ bioData.personal.hips }}</p>
          <p class="mb-2"><strong>Height:</strong> {{ bioData.personal.height }}</p>
          <p class="mb-2"><strong>Eye Color:</strong> {{ bioData.personal.eyeColor }}</p>
          <p class="mb-2"><strong>Hair Color:</strong> {{ bioData.personal.hairColor }}</p>
          <p class="mb-2"><strong>Weight:</strong> {{ bioData.personal.weight }}</p>
          <p class="mb-2"><strong>Waist:</strong> {{ bioData.personal.waist }}</p>
          <p class="mb-2"><strong>Dress:</strong> {{ bioData.personal.dress }}</p>
          <p class="mb-2"><strong>Bra:</strong> {{ bioData.personal.bra }}</p>
          <p class="mb-2"><strong>Languages:</strong> {{ bioData.personal.languages }}</p>
        </div>

        <!-- IMDb Button & Download -->
        <div class="flex items-center gap-4 mb-8 pb-8 border-b border-teal-600">
          <a href="#" class="flex items-center gap-2 hover:text-yellow-400 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <button @click="downloadResume">Download Resume</button>
          </a>
        </div>

        <!-- Two Column Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <!-- Left Column -->
          <div>
            <!-- Special Skills -->
            <section class="mb-10">
              <h2 class="text-2xl font-bold text-yellow-400 mb-4">Special Skills</h2>
              <ul class="space-y-2">
                <li v-for="skill in bioData.specialSkills" :key="skill">{{ skill }}</li>
              </ul>
            </section>

            <!-- Film -->
            <section class="mb-10">
              <h2 class="text-2xl font-bold text-yellow-400 mb-4">Film</h2>
              <div v-for="item in bioData.film" :key="item.details" class="mb-3">
                <p>
                  <strong>{{ item.year }}.</strong> {{ item.details }}
                </p>
              </div>
            </section>

            <!-- TV -->
            <section class="mb-10">
              <h2 class="text-2xl font-bold text-yellow-400 mb-4">TV</h2>
              <div v-for="item in bioData.tv" :key="item.details" class="mb-3">
                <p>
                  <strong>{{ item.year }}.</strong> {{ item.details }}
                </p>
              </div>
            </section>
          </div>

          <!-- Right Column -->
          <div>
            <!-- Theater -->
            <section class="mb-10">
              <h2 class="text-2xl font-bold text-yellow-400 mb-4">Theater</h2>
              <div v-for="item in bioData.theater" :key="item.details" class="mb-3">
                <p>
                  <strong>{{ item.year }}.</strong> {{ item.details }}
                </p>
              </div>
            </section>

            <!-- Education & Training -->
            <section class="mb-10">
              <h2 class="text-2xl font-bold text-yellow-400 mb-4">Education & Training</h2>
              <ul class="space-y-2">
                <li v-for="edu in bioData.education" :key="edu">{{ edu }}</li>
              </ul>
            </section>

            <!-- Awards -->
            <section class="mb-10">
              <h2 class="text-2xl font-bold text-yellow-400 mb-4">Awards</h2>
              <div v-for="award in bioData.awards" :key="award.description" class="mb-3">
                <p>
                  <strong>{{ award.year }}</strong> / {{ award.description }}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Smooth scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(251, 191, 36, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(251, 191, 36, 0.8);
}
</style>
