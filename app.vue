<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'TrackerApp',
  meta: [
    { name: 'description', content: 'This is my Nuxt app description' }
  ]
})
</script>

<template>
  <NuxtWelcome />
</template>
