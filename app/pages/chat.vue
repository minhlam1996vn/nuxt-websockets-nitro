<template>
  <div>
    <h1>MLDEV</h1>
    <ClientOnly fallback-tag="span" fallback="Loading comments...">
      <EventSourceChat />
    </ClientOnly>
  </div>
</template>
