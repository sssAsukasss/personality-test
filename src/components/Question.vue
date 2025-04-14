<template>
  <div v-if="currentQuestion" class="question-container">
    <h2 class="question-text">{{ currentQuestion.text }}</h2>

    <div v-if="!isLoading" class="choices">
      <button
        v-for="(choice, index) in choices"
        :key="index"
        @click="handleChoice(choice)"
        class="choice-button"
      >
        {{ choice }}
      </button>
    </div>

    <div v-else class="loading">Loading...</div>
  </div>

  <div v-else>
    <p>診断結果を表示しています...</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDiagnoseStore } from '@/stores/diagnoseStore'

const diagnoseStore = useDiagnoseStore()

const currentQuestion = computed(() => diagnoseStore.currentQuestion)

const choices = computed(() =>
  currentQuestion.value ? Object.keys(currentQuestion.value.next) : []
)

const isLoading = computed(() => diagnoseStore.isLoading)

const handleChoice = async (choice: string) => {
  await diagnoseStore.answer(choice)
}
</script>

<style scoped lang="scss">
.question-container {
  text-align: center;
  margin: 20px;

  .question-text {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .choices {
    display: flex;
    flex-direction: column;
    align-items: center;

    .choice-button {
      background-color: #007bff;
      color: white;
      padding: 10px;
      margin: 10px 0;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;

      &:hover {
        background-color: #0056b3;
      }
    }
  }

  .loading {
    font-size: 1.2rem;
    color: #888;
  }
}
</style>