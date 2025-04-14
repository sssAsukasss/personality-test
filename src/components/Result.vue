<template>
  <div v-if="resultData" class="result-container">
    <h2 class="result-title">{{ resultData.title }}</h2>
    <p class="result-description">{{ resultData.description }}</p>

    <div class="result-keywords">
      <h3>キーワード:</h3>
      <ul>
        <li v-for="(keyword, index) in resultData.keywords" :key="index">
          {{ keyword }}
        </li>
      </ul>
    </div>

    <div v-if="resultData.image" class="result-image">
      <img :src="resultData.image" alt="Result Image" />
    </div>

    <div class="social-share">
      <h3>結果をシェアする</h3>
      <div class="share-buttons">
        <a
          :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`"
          target="_blank"
          class="share-button twitter"
        >
          Twitterでシェア
        </a>
        <a
          :href="lineShareUrl"
          target="_blank"
          class="share-button line"
        >
          LINEでシェア
        </a>
      </div>
    </div>

    <button @click="restart" class="restart-button">診断をやり直す</button>
  </div>

  <div v-else>
    <p>結果を読み込んでいます...</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDiagnoseStore } from '@/stores/diagnoseStore'

const diagnoseStore = useDiagnoseStore()

const resultData = computed(() => diagnoseStore.resultData)

const tweetText = computed(() => {
  return `${resultData.value?.title}の診断結果: ${resultData.value?.description} #診断 #冒険者タイプ`
})

const lineShareUrl = computed(() => {
  const baseUrl = 'https://line.me/R/msg/text/?'
  const message = encodeURIComponent(tweetText.value)
  return `${baseUrl}${message}`
})

const restart = () => {
  diagnoseStore.restart()
}
</script>

<style lang="scss" scoped>
.result-container {
  text-align: center;
  margin: 20px;
}

.result-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.result-description {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #555;
}

.result-keywords {
  margin-bottom: 20px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    font-size: 1rem;
    color: #007bff;
  }
}

.result-image img {
  max-width: 100%;
  height: auto;
  margin-top: 20px;
  border-radius: 8px;
}

.restart-button {
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-top: 20px;

  &:hover {
    background-color: #218838;
  }
}

.social-share {
  margin-top: 30px;

  .share-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .share-button {
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1rem;
    color: white;
    display: inline-block;
    cursor: pointer;

    &.twitter {
      background-color: #1da1f2;
    }

    &.line {
      background-color: #00c300;
    }

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>