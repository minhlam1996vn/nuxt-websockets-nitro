<!-- https://vueuse.org/core/useWebSocket/ -->
<script setup lang="ts">
const config = useRuntimeConfig()
const webSocketHost =
  process.env.NODE_ENV === 'production'
    ? config.public.webSocketHost
    : 'ws://localhost:3000'

const { data, send } = useWebSocket(`${webSocketHost}/api/web-socket`)

const message = ref('')
const history = ref<string[]>([])

watch(data, (newValue) => {
  history.value.push(`server: ${newValue}`)
})

const sendData = () => {
  history.value.push(`client: ${message.value}`)
  send(message.value)
  message.value = ''
}
</script>

<template>
  <div>
    <h1>Web Socket Example</h1>
    <form @submit.prevent="sendData">
      <input v-model="message" />
      <button type="submit">Send</button>
    </form>
    <div>
      <p v-for="entry in history" :key="entry">{{ entry }}</p>
    </div>
  </div>
</template>
