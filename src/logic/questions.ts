export interface Question {
  text: string;
  next: { [choice: string]: string | null };
}


export const questions: { [key: string]: Question } = {
  start: {
    text: 'どんなタイプの冒険者になりたいですか？',
    next: {
      '戦う勇者': 'q1a',
      '知恵を使う冒険者': 'q1b'
    }
  },
  q1a: {
    text: 'あなたはどちらの方が好きですか？',
    next: {
      '力強い戦い': 'q2a', // 戦士・騎士
      '戦略的な戦い': 'q2b' // 魔法使い・盗賊
    }
  },
  q1b: {
    text: '冒険中、仲間と共にいることと一人で行動すること、どちらが得意ですか？',
    next: {
      '仲間と行動': 'q3a', // 癒し手・商人・騎士
      '一人で行動': 'q3b' // 学者・盗賊・狩人
    }
  },
  q2a: {
    text: '冒険で大事なことはどれですか？',
    next: {
      '強さ': 'warrior', // 戦士
      '誠実さ': 'knight' // 騎士
    }
  },
  q2b: {
    text: '素早さや頭の良さ、どちらが大事だと思いますか？',
    next: {
      '頭の良さ': 'witch', // 魔法使い
      '素早さ': 'thief' // 盗賊
    }
  },
  q3a: {
    text: '人の悩みを聞くのは得意ですか？',
    next: {
      '得意': 'healer', // 癒し手
      'あまり得意でない': 'merchant' // 商人
    }
  },
  q3b: {
    text: '自分の知識を人に教えたり、伝えたりするのは好きですか？',
    next: {
      '好き': 'scholar', // 学者
      'あまり好きではない': 'hunter' // 狩人
    }
  }
}
