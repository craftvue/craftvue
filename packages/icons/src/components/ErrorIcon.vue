<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-hidden="true"
    v-bind="$attrs"
  >
    <!-- Внешний круг (обводка) -->
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.7" />
    <!-- Крестик -->
    <path
      d="M9 9l6 6M15 9l-6 6"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      fill="none"
    />
  </svg>
</template>

<script setup lang="ts">
import { defineOptions } from 'vue'

defineOptions({ name: 'ErrorIcon' })
</script>

<style scoped></style>
