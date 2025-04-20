<script setup lang="ts"></script>

<template>
  <div>
    <h1>Home page</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: { 'id': 1 } }">projects</RouterLink>

  </div>
</template>
