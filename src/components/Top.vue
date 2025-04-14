<template>
  <div class="top-page">
    <h1>Fantasy Occupation Diagnosis</h1>
    <button @click="handleStart" class="start-button">診断スタート</button>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  (event: 'start'): void;
}>();

const handleStart = () => {
  console.log('診断スタートボタンがクリックされました'); // デバッグ用
  emit('start');
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Uncial+Antiqua&display=swap');

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-family: 'Uncial Antiqua', serif; /* Uncial Antiquaフォントを適用 */
  color: #4a4a4a; /* ファンタジーっぽい色合い */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 文字に影を追加 */
}

.top-page {
  text-align: center;
  padding: 20px;
}

.start-button {
  background-color: #3498db;
  color: white;
  padding: 15px 30px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.start-button:hover {
  background-color: #2980b9;
}
</style>