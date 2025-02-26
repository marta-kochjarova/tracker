<template>
  <div>
    <h1>Supabase Test</h1>
    <span>{{ data }}</span>
  </div>
</template>

<script setup>
  const { data } = await useFetch('/api/users')
</script>
