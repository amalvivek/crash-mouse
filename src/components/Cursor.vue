<script setup lang="ts">
import CroppedSVG from '@/components/CroppedSVG.vue'
import { onMounted, ref } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'Car1'
  }
})
</script>

<template>
  <CroppedSVG :type="type" />
</template>

<style scoped></style>
