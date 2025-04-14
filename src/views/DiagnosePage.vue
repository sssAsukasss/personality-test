<template>
  <div class="diagnose-page">
    <Loading v-if="isLoading" />

    <Top v-if="!isDiagnosisStarted" @start="startDiagnosis" />

    <!-- 質問画面 -->
    <Question
      v-else-if="currentQuestion"
      :currentQuestion="currentQuestion"
      :choiceTexts="choiceTexts"
      @answer="answer"
    />

    <!-- 結果画面 -->
    <Result
      v-else-if="resultData"
      :resultData="resultData"
      @shareResult="shareResult"
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

// ストア
const diagnoseStore = useDiagnoseStore()
const isDiagnosisStarted = computed(() => diagnoseStore.isDiagnosisStarted);
const currentQuestion = computed(() => diagnoseStore.currentQuestion)
const resultData = computed(() => diagnoseStore.resultData)
const isLoading = computed(() => diagnoseStore.isLoading)
const choiceTexts = computed(() =>
  currentQuestion.value?.next ? Object.keys(currentQuestion.value.next) : []
)

const startDiagnosis = () => {
  console.log('診断スタートが呼び出されました'); // デバッグ用
  diagnoseStore.startDiagnosis();
}

const answer = async (choice: string) => {
  await diagnoseStore.answer(choice)
}

const shareResult = () => {
  const shareText = `${resultData.value?.title} - ${resultData.value?.description} #診断結果`
  const shareUrl = window.location.href

  if (navigator.share) {
    navigator
      .share({
        title: resultData.value?.title,
        text: shareText,
        url: shareUrl
      })
      .catch((err) => console.error('Error sharing:', err))
  } else {
    alert('SNSシェア機能はサポートされていません。')
  }
}
</script>

<style lang="scss" scoped>
.diagnose-page {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}
</style>
