<template>
  <img
    class="icon"
    :src="`/icons/icon-${name}.png`"
    :alt="`icon ${name}`"
    :width="`${width.toFixed(0).toString() || 20}px`"
  >
</template>

<script setup lang="ts">
  import { DefaultTheme } from 'vitepress/theme'
  defineProps<{ name: string, width?: number }>()
</script>
