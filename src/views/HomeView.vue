<script setup lang="ts">
import Cursor from '@/components/Cursor.vue'
import { onMounted, ref } from 'vue'

// const cursor = ref<InstanceType<typeof Cursor>>(null as never)

const x = ref<number>(0)
const y = ref<number>(0)

const angle = ref<String>('0rad')
const leftOffset = ref<String>('0px')
const topOffset = ref<String>('0px')

let time: number

onMounted(() => {
  time = new Date().getTime()
  window.addEventListener('mousemove', function (e) {
    // Get angle in radians using Math.atan()
    const now = new Date().getTime()
    if (now - time > 0) {
      angle.value = `${Math.atan2(e.clientY - y.value, e.clientX - x.value) + Math.PI / 2}rad`
      x.value = e.clientX
      y.value = e.clientY
      time = now
    }
    leftOffset.value = `${e.clientX}px`
    topOffset.value = `${e.clientY}px`
  })
})
</script>

<template>
  <main>
    <Cursor
      class="w-[100px] -translate-x-1/2 -translate-y-1/2 absolute custom-cursor"
      type="Car4"
      id="cursor"
    />
  </main>
</template>

<style scoped>
.custom-cursor {
  top: v-bind(topOffset);
  left: v-bind(leftOffset);
  transform: rotate(v-bind(angle));
  transition: transform 50ms linear;
}
</style>
