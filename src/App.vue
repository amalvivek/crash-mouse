<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView class="bg-black w-screen h-screen" />
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  pointer-events: none;
  cursor: none;
}
</style>
