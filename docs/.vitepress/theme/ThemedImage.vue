<template>
  <img class="ThemedImage dark" :src="`/images/${prefix}-dark${extension}`" :alt="alt">
  <img class="ThemedImage light" :src="`/images/${prefix}-light${extension}`" :alt="alt">
</template>

<script setup lang="ts">
  import { DefaultTheme } from 'vitepress/theme'
  withDefaults(
    defineProps<{ prefix: string, extension?: string, alt?: string }>(),
    {extension: '.png', alt: 'Image'}
  )
</script>

<style scoped>
  html:not(.dark) .ThemedImage.dark {
    display: none;
  }

  .dark .ThemedImage.light {
    display: none;
  }
</style>
