<template>
  <div v-if="resultData" class="result-container">
    <h2>{{ resultData.title }}</h2>
    <p>{{ resultData.description }}</p>

    <div class="result-keywords">
      <h3>キーワード:</h3>
      <ul>
        <li v-for="(keyword, index) in resultData.keywords" :key="index">
          {{ keyword }}
        </li>
      </ul>
    </div>

    <div v-if="resultData.image" class="result-image">
      <img :src="resultData.image" :alt="`${resultData.title}の画像`" />
    </div>

    <div class="social-share">
      <h3>結果をシェアする</h3>
      <div class="share-buttons">
        <a
          :href="twitterShareUrl"
          target="_blank"
          class="share-button twitter"
        >
        <img src="/public/images/icons/x.png
        " alt="Twitterアイコン" class="icon" />
          でシェア
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

</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDiagnoseStore } from '@/stores/diagnoseStore'

const resultData = computed(() => useDiagnoseStore().resultData)

const encodedShareText = computed(() => {
  return encodeURIComponent(`${resultData.value?.title}の診断結果: ${resultData.value?.description} #診断 #冒険者タイプ`)
})

const twitterShareUrl = computed(() => {
  return `https://twitter.com/intent/tweet?text=${encodedShareText.value}`
})

const lineShareUrl = computed(() => {
  return`https://line.me/R/msg/text/?${encodedShareText.value}`
})

const restart = () => {
  useDiagnoseStore().restart()
}

</script>

<style lang="scss" scoped>
.result-container {
  text-align: center;
  margin: 20px;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: #555;
  }
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
  width: 400px;
  height: 400px;
  object-fit: contain;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
}

.restart-button {
  background-color: #ff5722;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-top: 20px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #e64a19;
    transform: scale(1.05); 
  }

  &:active {
    background-color: #d84315; 
    transform: scale(0.95); 
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
      background-color: #0F1419;
    }

    &.line {
      background-color: #00c300;
    }

    
    &:hover {
      opacity: 0.8;
    }

    .icon {
      width: 20px;
      height: 20px;
      vertical-align: middle;
      margin-right: 5px;
    }
  }
}
</style>