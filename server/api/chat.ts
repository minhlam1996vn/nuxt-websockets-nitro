const connections: Set<ReturnType<typeof createEventStream>> = new Set()

export default defineEventHandler(async (event) => {
  console.log('Client connected')
  const stream = createEventStream(event)
  connections.add(stream)

  stream.onClosed(async () => {
    console.log('Client disconnected')
    connections.delete(stream)
    await stream.close()
  })

  return stream.send()
})

// Hàm broadcast cho tất cả client
export const broadcast = async (msg: string) => {
  for (const conn of connections) {
    await conn.push(msg)
  }
}
