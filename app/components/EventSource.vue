<!-- https://vueuse.org/core/useWebSocket/ -->
<script setup lang="ts">
const history = ref<string[]>([])

const eventSource = new EventSource('/api/see')

eventSource.onmessage = (event) => {
  history.value.push(event.data)
}
</script>

<template>
  <div>
    <h1>EvenSource Example</h1>
    <div v-for="(msg, index) in history" :key="index">{{ msg }}</div>
  </div>
</template>
