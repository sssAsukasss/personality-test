import { defineStore } from 'pinia';
import { questions } from '@/logic/questions';
import { diagnoseMap } from '@/logic/diagnose';

export const useDiagnoseStore = defineStore('diagnose', {
  state: () => ({
    currentKey: 'start',  // 現在の質問のキー
    result: null as string | null, // 診断結果
    isLoading: false,
    isDiagnosisStarted: false // 診断が開始されたかどうか
  }),
  getters: {
    currentQuestion(state) {
      return questions[state.currentKey] || null;
    },
    resultData(state) {
      return state.result ? diagnoseMap[state.result] : null;
    }
  },
  actions: {
    // 診断開始処理
    startDiagnosis() {
      // 最初の質問を取得する処理を追加
      this.isDiagnosisStarted = true;
      this.currentKey = 'start'; // ここで最初の質問を設定
    },
    
    async answer(choiceText: string) {
      const next = this.currentQuestion?.next?.[choiceText] || null;
      if (!next) return;

      // 最後の質問の回答が終わった等ローディング演出を行う
      if (!questions[next]) {
        this.isLoading = true;
        this.currentKey = next;

        // 1秒ローディング演出 → 結果を表示
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.result = next;
        this.isLoading = false;
        return;
      }

      this.currentKey = next;
    },
    restart() {
      this.currentKey = 'start';
      this.result = null;
      this.isLoading = false;
      this.isDiagnosisStarted = false;
    }
  }
});
