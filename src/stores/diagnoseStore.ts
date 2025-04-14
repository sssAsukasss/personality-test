import { defineStore } from 'pinia';
import { questions } from '@/logic/questions';
import { diagnoseMap } from '@/logic/diagnose';

export const useDiagnoseStore = defineStore('diagnose', {
  state: () => ({
    currentKey: 'start',  // 現在の質問のキー
    answers: [] as { key: string, choice: string }[], // 選んだ選択肢
    result: null as string | null, // 診断結果
    isLoading: false
  }),
  getters: {
    currentQuestion(state) {
      console.log('state.result:', state.result); // デバッグ用
      console.log('diagnoseMap[state.result]:', diagnoseMap[state.result]); // デバッグ用
      return questions[state.currentKey] || null;
    },
    resultData(state) {
      console.log('resultData', state.result);
      return state.result ? diagnoseMap[state.result] : null;
    }
  },
  actions: {
    async answer(choiceText: string) {
      const next = this.currentQuestion?.next?.[choiceText] || null;
      console.log('currentKey:', this.currentKey); // 現在の質問キー
      console.log('choiceText:', choiceText); // 選択された選択肢
      console.log('next:', next); // 次のキー
      if (!next) return;

      this.answers.push({ key: this.currentKey, choice: choiceText });

      // 結果キー（=questions に存在しない）に到達した場合
      if (!questions[next]) {
        this.isLoading = true;
        this.currentKey = next;

        // 1秒ローディング演出 → 結果を表示
        await new Promise(resolve => setTimeout(resolve, 1000));

        this.result = next;
        console.log('result', this.result);
        this.isLoading = false;
        return;
      }

      this.currentKey = next;
    },
    restart() {
      this.currentKey = 'start';
      this.answers = [];
      this.result = null;
      this.isLoading = false;
    }
  }
});
