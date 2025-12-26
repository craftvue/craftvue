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
    <!-- Внутренний круг (точка) -->
    <circle cx="12" cy="8" r="1.2" fill="currentColor" />
    <!-- Линия -->
    <path d="M12 12v5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
  </svg>
</template>

<script setup lang="ts">
import { defineOptions } from 'vue'

defineOptions({ name: 'InfoIcon' })
</script>
