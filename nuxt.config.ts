// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      webSocketHost: process.env.WS_HOST,
    },
  },
  modules: ['@nuxt/eslint', '@vueuse/nuxt'],
  nitro: {
    experimental: {
      websocket: true,
    },
  },
})
