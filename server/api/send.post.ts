import { broadcast } from './chat'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const msg = `User action: ${body.action} at ${new Date().toLocaleTimeString()}`

  await broadcast(msg)
  return { ok: true }
})
