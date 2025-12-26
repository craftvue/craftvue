
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    role="img"
    aria-hidden="true"
    v-bind="$attrs"
  >
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
      <path
        d="M3 17a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm1-5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
      />
      <path d="M12 8h4v4m0-4l-5 5" />
    </g>
  </svg>
</template>

<script setup lang="ts">
import { defineOptions } from 'vue'

defineOptions({ name: 'MinimizeIcon' })
</script>
