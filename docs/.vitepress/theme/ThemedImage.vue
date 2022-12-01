<template>
  <img class="ThemedImage dark" :src="`${folder}/${prefix}-dark${extension}`" :alt="alt" ref="imgRefDark">
  <img class="ThemedImage light" :src="`${folder}/${prefix}-light${extension}`" :alt="alt" ref="imgRefLight">
</template>

<script setup lang="ts">
  import mediumZoom from 'medium-zoom'
  import { onMounted, ref } from 'vue'

  const imgRefDark = ref(null)
  const imgRefLight = ref(null)

  withDefaults(
    defineProps<{ prefix: string, extension?: string, alt?: string, folder?: string }>(),
    { extension: '.png', alt: 'Image', folder: '/images' }
  )

  onMounted(() => {
    mediumZoom(imgRefDark.value, { background: 'var(--vp-c-bg)' })
    mediumZoom(imgRefLight.value, { background: 'var(--vp-c-bg)' })
  })
</script>

<style scoped>
  html:not(.dark) .ThemedImage.dark {
    display: none;
  }

  .dark .ThemedImage.light {
    display: none;
  }

  .medium-zoom-overlay {
    z-index: 20;
  }

  .medium-zoom-image {
    z-index: 21;
  }
</style>
