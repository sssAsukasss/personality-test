<template>
  <div v-if="currentQuestion" class="question-container">
    <h2>{{ currentQuestion.text }}</h2>

    <div v-if="!isLoading" class="choices">
      <button
        v-for="(choice, index) in choices"
        :key="index"
        @click="handleChoice(choice)"
      >
        {{ choice }}
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDiagnoseStore } from '@/stores/diagnoseStore'

const currentQuestion = computed(() => useDiagnoseStore().currentQuestion)

const choices = computed(() =>
  currentQuestion.value ? Object.keys(currentQuestion.value.next) : []
)

const isLoading = computed(() => useDiagnoseStore().isLoading)

const handleChoice = async (choice: string) => {
  await useDiagnoseStore().answer(choice)
}
</script>

<style scoped lang="scss">
.question-container {
  text-align: center;
  margin: 20px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .choices {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
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
}
</style>