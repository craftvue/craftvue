<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    role="img"
    aria-hidden="true"
    v-bind="$attrs"
  >
    <path fill="currentColor" d="M18 12.998H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2" />
  </svg>
</template>

<script setup lang="ts">
import { defineOptions } from 'vue'

defineOptions({ name: 'MinusIcon' })
</script>
