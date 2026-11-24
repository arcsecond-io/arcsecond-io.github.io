<template>
  <figure v-if="shot" class="tool-shot">
    <img
      v-for="theme in ['dark', 'light']"
      :key="theme"
      ref="images"
      :class="theme"
      :src="withBase(`/images/tools/${shot.name}-${theme}.webp`)"
      :alt="shot.alt"
      loading="lazy"
    >
    <figcaption v-if="shot.caption && !noCaption">{{ shot.caption }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
  // A tool's screenshot, in the reader's theme. What exists is in
  // screenshots.json, written by scripts/sync-screenshots.mjs.
  import mediumZoom from 'medium-zoom'
  import { computed, onMounted, ref } from 'vue'
  import { withBase } from 'vitepress'
  import screenshots from '../screenshots.json'

  const props = withDefaults(defineProps<{ tool: string, index?: number, noCaption?: boolean }>(), { index: 0 })

  const images = ref<HTMLImageElement[]>([])
  const shot = computed(() => {
    const found = (screenshots as Record<string, any[]>)[props.tool]?.[props.index]
    // A page naming a shot that is gone must fail the build, not show nothing.
    if (!found) throw new Error(`ToolShot: no screenshot ${props.index} for "${props.tool}"`)
    return found
  })

  onMounted(() => mediumZoom(images.value, { background: 'var(--vp-c-bg)' }))
</script>

<style scoped>
  .tool-shot { margin: 1.25rem 0; }
  .tool-shot img { width: 100%; border: 1px solid var(--vp-c-divider); border-radius: 8px; }
  .tool-shot figcaption { margin-top: 0.5rem; font-size: 0.875rem; line-height: 1.5; color: var(--vp-c-text-2); }
  html:not(.dark) .tool-shot img.dark { display: none; }
  html.dark .tool-shot img.light { display: none; }
</style>
