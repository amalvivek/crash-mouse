<script setup lang="ts">
import Car1 from '@/assets/Car1.svg'
import Car2 from '@/assets/Car2.svg'
import Car3 from '@/assets/Car3.svg'
import Car4 from '@/assets/Car4.svg'
import Car5 from '@/assets/Car5.svg'
import Car6 from '@/assets/Car6.svg'

const props = defineProps({
  type: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <Car1 v-if="type == 'Car1'" />
    <Car2 v-if="type == 'Car2'" />
    <Car3 v-if="type == 'Car3'" />
    <Car4 v-if="type == 'Car4'" />
    <Car5 v-if="type == 'Car5'" />
    <Car6 v-if="type == 'Car6'" />
  </div>
</template>

<style scoped></style>
