<template>
  <div v-if="isLoading" class="loading-overlay">
    <div class="loading-spinner"></div>
    <p>診断結果を読み込んでいます...</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDiagnoseStore } from '@/stores/diagnoseStore'

const isLoading = computed(() => useDiagnoseStore().isLoading)
</script>

<style scoped lang="scss">
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  .loading-spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
  }

  p {
    color: white;
    font-size: 1.2rem;
    margin-top: 10px;
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
