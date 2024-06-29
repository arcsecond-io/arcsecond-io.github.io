<template>
  <div :style="{ 'max-width': maxWidth, 'float': float, 'margin: 0.5rem 0 0 1rem': float !== 'unset' }"
       style="width: 100%; border: 1px solid #eee; padding: 3px;">
    <img class="ThemedImage dark"
         :src="`/images/${prefix}-dark${extension}`"
         :alt="alt"
         :title="title || alt"
         ref="imgRefDark"
         style="width: 100%;">
    <img class="ThemedImage light"
         :src="`/images/${prefix}-light${extension}`"
         :alt="alt"
         :title="title || alt"
         ref="imgRefLight"
         style="width: 100%;">
  </div>
</template>

<script setup lang="ts">
  import mediumZoom from 'medium-zoom'
  import { onMounted, ref } from 'vue'

  const imgRefDark = ref(null)
  const imgRefLight = ref(null)

  withDefaults(
    defineProps<{ prefix: string, extension?: string, alt?: string, title?: string, maxWidth?: string, float?: string }>(),
    { extension: '.png', alt: 'Image', title: '', maxWidth: '100%', float: 'unset' }
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
    z-index: 30;
  }

  .medium-zoom-image {
    z-index: 31;
  }
</style>
