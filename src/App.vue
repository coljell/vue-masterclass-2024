<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'

console.log(supabase)
</script>

<template>
  <main>
    <h1>My App</h1>
    <RouterView />
  </main>
</template>
