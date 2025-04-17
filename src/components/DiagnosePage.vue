<template>
  <div class="diagnose-page">
    <Loading v-if="isLoading" />

    <Top v-if="!isDiagnosisStarted" />

    <!-- 質問画面 -->
    <Question
      v-else-if="currentQuestion"
    />

    <!-- 結果画面 -->
    <Result
      v-else-if="resultData"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useDiagnoseStore } from '@/stores/diagnoseStore'
import Top from '@/components/Top.vue'
import Loading from '@/components/Loading.vue'
import Result from '@/components/Result.vue'
import Question from '@/components/Question.vue'

// storeから状態を取得
const diagnoseStore = useDiagnoseStore()
const isDiagnosisStarted = computed(() => diagnoseStore.isDiagnosisStarted);
const currentQuestion = computed(() => diagnoseStore.currentQuestion)
const resultData = computed(() => diagnoseStore.resultData)
const isLoading = computed(() => diagnoseStore.isLoading)


</script>

<style lang="scss" scoped>
.diagnose-page {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto; 
}


</style>
