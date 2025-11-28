<script>
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Gallery from '@/components/Photo.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'
import VideoShowreel from '@/components/VideoShowreel.vue'

export default {
  components: {
    Hero,
    About,
    Gallery,
    VideoShowreel,
    Contact,
    Footer,
  },
}
</script>

<template>
  <div>
    <Hero />
    <About />
    <VideoShowreel />
    <Gallery />
    <Contact />
    <Footer />
  </div>
</template>

<style scoped></style>
