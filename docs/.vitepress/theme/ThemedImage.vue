<template>
  <img class="ThemedImage dark" :src="`/images/${prefix}-dark${extension}`" :alt="alt" :title="title || alt"
       ref="imgRefDark" :style="{ 'max-width': maxWidth }">
  <img class="ThemedImage light" :src="`/images/${prefix}-light${extension}`" :alt="alt" :title="title || alt"
       ref="imgRefLight" :style="{ 'max-width': maxWidth }">
</template>

<script setup lang="ts">
  import mediumZoom from 'medium-zoom'
  import { onMounted, ref } from 'vue'

  const imgRefDark = ref(null)
  const imgRefLight = ref(null)

  withDefaults(
    defineProps<{ prefix: string, extension?: string, alt?: string, title?: string, maxWidth?: string }>(),
    { extension: '.png', alt: 'Image', title: '', maxWidth: 'unset' }
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
