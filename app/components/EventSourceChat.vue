<script setup lang="ts">
const history = ref<string[]>([])

const eventSource = new EventSource(`/api/chat`)

eventSource.onmessage = (event) => {
  console.log('Received event:', event.data)
  history.value.push(event.data)
}

eventSource.onerror = (err) => {
  console.log('SSE error/disconnected: ', err)
  eventSource?.close()
}

const sendAction = async (action: string) => {
  await $fetch('/api/send', {
    method: 'POST',
    body: { action },
  })
}
</script>

<template>
  <div>
    <h1>SSE + Actions</h1>
    <button @click="sendAction('Clicked!' + new Date())">Click me</button>
    <div v-for="(msg, i) in history" :key="i">{{ msg }}</div>
  </div>
</template>
