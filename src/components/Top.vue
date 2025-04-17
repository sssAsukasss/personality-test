<template>
  <div class="top-page">
    <h1>Fantasy Occupation Diagnosis</h1>
    <button @click=startDiagnosis>診断スタート</button>
  </div>
</template>

<script setup lang="ts">
import { useDiagnoseStore } from '@/stores/diagnoseStore'

const startDiagnosis = () => {
  useDiagnoseStore().startDiagnosis()
}

</script>


<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Uncial+Antiqua&display=swap');

.top-page {
  text-align: center;
  padding: 20px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-family: 'Uncial Antiqua', serif;
    color: #4a4a4a;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  button {
    background-color: #3498db;
    color: #fff;
    padding: 15px 30px;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #1abc9c; 
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
      transform: scale(1.05);
      transition: background-color 0.3s, transform 0.3s;
    }
  }

}
</style>