<script setup lang="ts"></script>

<template>
  <div>
    <h1>MLDEV</h1>
    <ClientOnly fallback-tag="span" fallback="Loading comments...">
      <EventSource />
    </ClientOnly>
  </div>
</template>
