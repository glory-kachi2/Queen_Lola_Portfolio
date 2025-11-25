<script>
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Gallery from '@/components/Gallery.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Hero,
    About,
    Gallery,
    Contact,
    Footer,
  },
}
</script>

<template>
  <div>
    <Hero />
    <About />
    <Gallery />
    <Contact />
    <Footer />
  </div>
</template>

<style scoped></style>
