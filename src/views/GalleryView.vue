<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Footer from '@/components/Footer.vue'
import MainNavbar from '@/components/MainNavbar.vue'

const route = useRoute()
const activeCategory = ref('All')

const categories = ['All', 'Bikini', 'Jewelry', 'Bag', 'Runway', 'Sport', 'Studio Shoot', 'Videos']

// Import all images from each folder
const bikiniImages = import.meta.glob('@/assets/images/bikini/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})
const jewelryImages = import.meta.glob('@/assets/images/jewelry/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})
const bagImages = import.meta.glob('@/assets/images/bag/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})
const runwayImages = import.meta.glob('@/assets/images/runway/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})
const sportImages = import.meta.glob('@/assets/images/sport/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})
const studioImages = import.meta.glob('@/assets/images/studio/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})
const generalImages = import.meta.glob('@/assets/images/general/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

// Import all videos
const videos = import.meta.glob('@/assets/videos/*.{mp4,webm}', { eager: true, import: 'default' })

// Helper function to create gallery items from imported files
const createGalleryItems = (files, category, isVideo = false) => {
  return Object.entries(files).map(([path, url], index) => {
    const fileName = path.split('/').pop().split('.')[0]
    return {
      id: `${category.toLowerCase()}-${index}`,
      [isVideo ? 'video' : 'image']: url,
      category,
      title: fileName.replace(/-|_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    }
  })
}

// Generate all gallery items automatically
const galleryItems = [
  ...createGalleryItems(runwayImages, 'Runway'),
  ...createGalleryItems(bikiniImages, 'Bikini'),
  ...createGalleryItems(jewelryImages, 'Jewelry'),
  ...createGalleryItems(bagImages, 'Bag'),
  ...createGalleryItems(sportImages, 'Sport'),
  ...createGalleryItems(studioImages, 'Studio Shoot'),
  ...createGalleryItems(videos, 'Videos', true),
  // General images are included in All but don't have their own category
  ...createGalleryItems(generalImages, 'All'),
]

const filteredItems = computed(() => {
  if (activeCategory.value === 'All') {
    return galleryItems
  }
  return galleryItems.filter((item) => item.category === activeCategory.value)
})

const setCategory = (category) => {
  activeCategory.value = category
}

// Check if current category should use masonry layout
const useMasonryLayout = computed(() => {
  return activeCategory.value === 'Jewelry'
})

// Handle navigation from home page
onMounted(() => {
  // Check if there's a hash in the route (e.g., #videos)
  if (route.hash) {
    const categoryFromHash = route.hash.replace('#', '')
    const categoryName = categoryFromHash.charAt(0).toUpperCase() + categoryFromHash.slice(1)

    // Check if it's a valid category
    if (categories.includes(categoryName)) {
      activeCategory.value = categoryName
    }
  }
})
</script>

<template>
  <div class="min-h-screen bg-white py-6 px-4 sm:px-8">
    <MainNavbar />
    <div class="max-w-7xl mx-auto mt-10">
      <!-- Navigation Links -->
      <nav class="mb-8">
        <ul class="flex flex-wrap justify-center gap-6 sm:gap-8">
          <li v-for="category in categories" :key="category">
            <button
              @click="setCategory(category)"
              :class="[
                'text-sm sm:text-base font-medium uppercase tracking-wider transition-colors duration-300',
                activeCategory === category
                  ? 'text-teal-600 border-b-2 border-teal-600'
                  : 'text-gray-600 hover:text-teal-600',
              ]"
            >
              {{ category }}
            </button>
          </li>
        </ul>
      </nav>

      <!-- Masonry Layout for Jewelry -->
      <div
        v-if="useMasonryLayout"
        class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-0 space-y-0"
      >
        <div
          v-for="item in filteredItems"
          :key="item.id"
          class="break-inside-avoid mb-0 relative group cursor-pointer overflow-hidden"
        >
          <!-- Image -->
          <img
            v-if="item.image"
            :src="item.image"
            :alt="item.title"
            class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end"
          >
            <div class="p-4 text-white w-full">
              <p class="text-xs uppercase tracking-wider text-teal-400 mb-1">{{ item.category }}</p>
              <h3 class="text-base font-semibold">{{ item.title }}</h3>
            </div>
          </div>
        </div>
      </div>

      <!-- Uniform Grid for Other Categories -->
      <div
        v-else
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-stretch"
      >
        <div
          v-for="(item, index) in filteredItems"
          :key="item.id"
          :class="[
            'relative group cursor-pointer overflow-hidden stretch-last-row',
            index === 0 ? 'col-span-2 md:col-span-3 lg:col-span-4 aspect-[21/9]' : 'aspect-square',
          ]"
        >
          <!-- Image -->
          <img
            v-if="item.image"
            :src="item.image"
            :alt="item.title"
            :class="[
              'w-full h-full transition-transform duration-700 group-hover:scale-110',
              index === 0 ? 'object-cover' : 'object-cover',
            ]"
          />

          <!-- Video -->
          <video
            v-if="item.video"
            :src="item.video"
            autoplay
            loop
            muted
            playsinline
            class="w-full h-full object-cover"
          ></video>

          <!-- Overlay with Title -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end"
          ></div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredItems.length === 0" class="text-center py-20">
        <p class="text-gray-500 text-lg">No items found in this category</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
/* Masonry layout using CSS columns for Jewelry */
.columns-1 {
  column-count: 1;
}

@media (min-width: 640px) {
  .columns-2 {
    column-count: 2;
  }
}

@media (min-width: 1024px) {
  .columns-3 {
    column-count: 3;
  }
}

@media (min-width: 1280px) {
  .columns-4 {
    column-count: 4;
  }
}

.columns-1,
.columns-2,
.columns-3,
.columns-4 {
  column-gap: 0;
}

/* Grid that stretches last row items */
.grid {
  grid-auto-flow: dense;
}

/* Stretch last row items to fill available space */
@media (min-width: 1024px) {
  .grid > .stretch-last-row:nth-last-child(-n + 3):nth-child(4n + 2),
  .grid > .stretch-last-row:nth-last-child(-n + 2):nth-child(4n + 3),
  .grid > .stretch-last-row:nth-last-child(1):nth-child(4n + 4) {
    grid-column: span 2;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .grid > .stretch-last-row:nth-last-child(-n + 2):nth-child(3n + 2),
  .grid > .stretch-last-row:nth-last-child(1):nth-child(3n + 3) {
    grid-column: span 2;
  }
}

/* Smooth transitions */
button {
  padding-bottom: 4px;
}
</style>
