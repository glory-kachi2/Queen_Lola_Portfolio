<script setup>
import { ref } from 'vue'
import ModelImage from '@/assets/images/model-leaning-on-court.jpg'
import Twitter from '@/assets/icons/twitter.png'
import Instagram from '@/assets/icons/instagram.png'
import Facebook from '@/assets/icons/facebook.png'
import Youtube from '@/assets/icons/youtube.png'

const title = ref('Contact')
const subtitle = ref('Representation')

const contacts = ref([
  {
    role: 'Manager',
    name: 'Balogun Jejelola',
    email: 'Omotoyosi0809@gmail.com',
    tel: '+85362830308',
    whatsapp: '+35796098392',
  },
  {
    role: 'Commercial Agent',
    name: 'Balogun Jejelola',
    email: 'Omotoyosi0809@gmail.com',
    tel: '+85362830308',
    whatsapp: '+35796098392',
  },
  {
    role: 'PR Agent',
    name: 'Balogun Jejelola',
    email: 'Omotoyosi0809@gmail.com',
    tel: '+85362830308',
    whatsapp: '+35796098392',
  },
])

const socials = ref([
  { name: 'Facebook', icon: Facebook, url: '#' },
  { name: 'Twitter', icon: Twitter, url: '#' },
  { name: 'Instagram', icon: Instagram, url: '#' },
  { name: 'YouTube', icon: Youtube, url: '#' },
])
</script>

<template>
  <div class="min-h-screen grid grid-cols-1 md:grid-cols-2 mt-40">
    <!-- LEFT -->
    <div class="w-full h-full">
      <img :src="ModelImage" class="w-full h-full object-cover" />
    </div>

    <!-- RIGHT -->
    <div class="bg-[#0d4854] text-white flex items-start p-8 md:p-16">
      <div class="max-w-md ml-12">
        <h1 class="text-6xl md:text-[80px] font-bold text-yellow-400 mb-6 leading-tight">
          {{ title }}
        </h1>

        <h2 class="text-[30px] mb-8 opacity-90">{{ subtitle }}</h2>

        <!-- CONTACTS -->
        <div v-for="contact in contacts" :key="contact.role" class="mb-10">
          <h3 class="uppercase tracking-wide text-sm font-semibold mb-2">
            {{ contact.role }}
          </h3>

          <p class="opacity-95">{{ contact.name }}</p>
          <p class="opacity-95">Email: {{ contact.email }}</p>
          <p class="opacity-95">Tel: {{ contact.tel }}</p>
          <p class="opacity-95">Whatsapp: {{ contact.whatsapp }}</p>
        </div>

        <!-- SOCIALS -->
        <div class="flex gap-4 mt-6">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            class="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-yellow-400/40 transition"
          >
            <img :src="social.icon" :alt="social.name" class="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
