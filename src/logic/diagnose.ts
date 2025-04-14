export interface DiagnoseMap {
  [key: string]: {
    title: string;
    description: string;
    keywords: string[];
    image: string;
  };
}

export const diagnoseMap: DiagnoseMap = {
  'witch': {
    title: '魔法使い',
    description: '知識と直感で世界を操るミステリアスな存在。ひとりの時間が好きで、観察力とひらめきに優れるタイプ',
    keywords: ['知的', '直感派', '静かな努力家'],
    image: '/images/witch.png'
  },
  'warrior': {
    title: '戦士',
    description: '真っ直ぐで情熱的。行動力が高く、困っている人を放っておけない。挑戦を恐れない熱血タイプ',
    keywords: ['体力派', '情熱的', '正義感'],
    image: '/images/warrior.png'
  },
  'healer': {
    title: '癒し手（ヒーラー）',
    description: '周囲を温かく包み込む、優しさの象徴。聞き役に回ることが多く、人の感情に敏感な共感タイプ',
    keywords: ['やさしい', '気配り上手', '心の支え'],
    image: '/images/healer.png'
  },
  'merchant': {
    title: '商人',
    description: '人と話すのが好きで、空気を読むのがうまい。頭の回転も早く、企画や交渉で力を発揮するタイプ',
    keywords: ['話し上手', '現実的', '柔軟思考'],
    image: '/images/merchant.png'
  },
  'thief': {
    title: '盗賊',
    description: '自由を愛する個性派。ルールに縛られるのは苦手で、自分らしく動くのが得意なひらめき人間',
    keywords: ['自由人', '直感型', 'マイペース'],
    image: '/images/thief.png'
  },
  'scholar': {
    title: '学者',
    description: '好奇心が強く、あらゆる知識を集めたがる探究者。理論派で分析力に優れたブレない思考タイプ',
    keywords: ['探究心', '分析派', '集中力◎'],
    image: '/images/scholar.png'
  },
  'knight': {
    title: '騎士',
    description: '誠実で信頼されやすいタイプ。チームを守る責任感が強く、仲間思いで困難にも立ち向かう勇者肌',
    keywords: ['まじめ', '責任感', 'リーダー気質'],
    image: '/images/knight.png'
  },
  'hunter': {
    title: '狩人（ハンター）',
    description: '自然体で感覚派。周囲に流されず、自分のペースを大事にするタイプ。観察眼と集中力が武器',
    keywords: ['感覚派', '自然好き', '単独行動派'],
    image: '/images/hunter.png'
  }
}
