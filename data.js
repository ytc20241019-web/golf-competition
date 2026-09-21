/**
 * 第4回 YTCカップゴルフコンペ アプリケーションデータ
 */

const GOLF_APP_DATA = {
  // 大会基本情報
  info: {
    password: 'ytc2026', // 大会関係者専用パスワード
    title: '第4回 YTCカップ ゴルフコンペ',
    subtitle: '社内親睦ゴルフコンペ（個人戦・チーム戦・ブロック対抗戦）',
    date: '2026年10月10日（土）',
    courseName: 'ムーンレイクゴルフクラブ 鞍手コース',
    address: '〒803-1308 福岡県鞍手郡鞍手町八尋1331',
    googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=%E3%83%A0%E3%83%BC%E3%83%B3%E3%83%AC%E3%82%A4%E3%82%AF%E3%82%B4%E3%83%AB%E3%83%95%E3%82%AF%E3%83%A9%E3%83%96%E9%9E%8鞍%E6%89%8B%E3%82%B3%E3%83%BC%E3%82%B9',
    openingTime: '07:00 開場',
    dressCode: 'Ｔシャツやトレーナ・ジーンズ、スリッパ、サンダル履きは厳禁です。入場の際はジャケット（ブレザー）・コートを必ず着用お願いします。\n又、プレー時のゴルフシャツの裾はパンツにＩＮを行い、シャツは折り返しの襟付きのものを着用してください。\n危険防止の意味で帽子着用でお願いします。',
    selfStyleNotice: {
      title: 'ゴルフ場からのお知らせ（セルフスタイル導入）',
      lead: 'ムーンレイクゴルフクラブ鞍手コースではセルフ化が導入されております。以下のご対応につきましては、各自にてお願いいたします。',
      items: [
        'お車からのキャディバッグ等のお荷物の積み下ろし',
        'ゴルフカートへのキャディバッグの積込み・積み降ろし',
        'プレー終了後のクラブ清掃・お荷物管理'
      ],
      note: '※ご不便をおかけいたしますが、ご理解とご協力をお願い申し上げます。'
    },
    fee: {
      playFee: 'プレー料金：16,000円（税込・指定昼食付）',
      entryFee: '役員・部長層：6,000円 / 課長層：4,000円 / 一般層：2,000円'
    }
  },

  // 緊急連絡先
  contacts: [
    {
      role: 'ゴルフ場 フロント',
      name: 'ムーンレイクGC 鞍手コース',
      tel: '0949-42-6000'
    },
    {
      role: '大会幹事（総合案内）',
      name: '山本 栄治（技管）',
      tel: '070-7664-6603'
    },
    {
      role: '大会幹事（会計・進行）',
      name: '芦原 広明（技管）',
      tel: '090-7466-8763'
    }
  ],

  // スケジュール
  schedule: [
    {
      time: '08:00 ～ 09:00',
      title: '受付',
      desc: '☆入口に受付を設けていますので、参加者は必ず受付を行ってください。',
      icon: 'clipboard-check'
    },
    {
      time: '―',
      title: '開会式：無し',
      desc: '参加者多数のため実施しませんので、大会要領を熟読ください。',
      icon: 'info'
    },
    {
      time: '09:03 ～ 順次',
      title: 'スタート（東・中・西 同時順次スタート）',
      desc: '東コース・中コース・西コース各ティよりスタート（セルフ・乗用カート）',
      icon: 'flag'
    },
    {
      time: '16:00 頃開始予定',
      title: '表彰式',
      desc: '＠コンペルームにて開催。入浴・精算を済ませてご集合ください。',
      icon: 'trophy'
    },
    {
      time: '表彰式終了後',
      title: '解散',
      desc: '気をつけてお帰りください。',
      icon: 'check-circle'
    }
  ],

  // 大会要領 ＆ ローカルルール・注意事項
  rules: {
    formats: [
      {
        title: '競技形式',
        text: 'チーム戦・個人戦はダブルペリアNET「ハンデ上限なし」・・・※1\nブロック戦：グロス成績採用。'
      },
      {
        title: 'チーム順位',
        text: '全チームの中から、順位決定。各チームの上位３名のNETスコアを採用。'
      },
      {
        title: 'ブロック順位',
        text: '各ブロックの上位４名のグロススコアで、順位決定。・・・※2'
      },
      {
        title: '個人順位',
        text: '個人のNETスコアで、順位決定。'
      }
    ],
    notes: [
      '※1 NET同率の場合は、年齢が上の方を上位とします。',
      '※2 ブロック順位は（生本）（調本）（品本）（技本）（Ｒ）（本社棟）（ＹＯＣ）（M・Ｖ）連合 の全８ブロックで競います。'
    ],
    localRules: [
      { num: '【１】', text: 'ボールの移動は、６インチ（後方へ）OKとする。（グリーン上・バンカーは不可）' },
      { num: '【２】', text: 'グリーン上のＯＫパット有（１グリップ以内 ３０ｃｍ）' },
      { num: '【３】', text: 'ロストボールは特別ルールで、紛失した場所から【罰打１】とする。' },
      { num: '【４】', text: '【１】～【３】以外は、一般公認ルールとする。' },
      { num: '【５】', text: 'コンペですが、指導可とします。またゴルフナビ使用は可とします。' },
      { num: '【６】', text: 'フェアウェイの荒れ地にボールが止まった場合は、グリーンに近づかない場所にボール移動可とする。' }
    ],
    rainRules: [
      {
        area: '■フェアウェイ・ラフでの対応',
        items: [
          '①ボールを拭いてリプレス可（６インチ）',
          '②水溜り（べちゃべちゃな場所） グリーンに近づかない場所に移動可',
          '③埋まっている場合は後方６インチ（べちょべちょであればグリーンに近づかない場所にボール移動可）'
        ]
      },
      {
        area: '■バンカーでの対応',
        items: [
          '①水たまり：バンカー内の水溜りの無い場所に移動可、バンカー内全て水溜まりの場合は無罰でバンカー後方に移動可',
          '②バンカー後方に１打罰でリプレス可（正式ルールは２打罰）'
        ]
      },
      {
        area: '■グリーン上での対応',
        items: [
          '止まった場所が水溜り（水が浮いている場合も）やラインに水溜まりがある場合 ホールに近づかない場所に移動可'
        ]
      }
    ],
    playPrecautions: [
      '【１】素振りをするときは、周囲の安全を確認してください。',
      '【２】打球を打つ前方には、絶対に立たないでください。',
      '【３】打球を打つときは同伴者に必ず声をかけて確認後打ってください。',
      '【４】打ち込み防止：前の組の人を確認、前方カートの位置を確認してください。',
      '【５】競技は、スムーズに進行させるようにしましょう（ハーフ２時間１５分以内）'
    ],
    attractions: [
      {
        title: '★ドラコン賞（東・中・西 各1回）',
        holes: '東･･･No.8　/　中･･･No.9　/　西･･･No.5',
        tip: 'フェアウェイキープが条件です。'
      },
      {
        title: '★ニアピン賞（東・中・西 各1回）',
        holes: '東･･･No.4　/　中･･･No.4　/　西･･･No.4',
        tip: 'グリーンオンしたボールが対象です。'
      }
    ]
  },

  // コース情報（公式サイト準拠）
  courses: {
    east: {
      name: '東コース（East Course）',
      shortName: '東',
      cid: 337,
      holes: [
        { hole: 1, par: 4, hdcp: 5, blue: 405, white: 386, red: 347, attraction: null, imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid337_hole1_layout.jpg' },
        { hole: 2, par: 5, hdcp: 2, blue: 579, white: 551, red: 415, attraction: null, imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid337_hole2_layout.jpg' },
        { hole: 3, par: 4, hdcp: 3, blue: 431, white: 416, red: 361, attraction: null, imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid337_hole3_layout.jpg' },
        { hole: 4, par: 3, hdcp: 8, blue: 178, white: 156, red: 122, attraction: 'ニアピンホール', imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid337_hole4_layout.jpg' },
        { hole: 5, par: 4, hdcp: 1, blue: 422, white: 403, red: 291, attraction: null, imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid337_hole5_layout.jpg' },
        { hole: 6, par: 4, hdcp: 7, blue: 369, white: 333, red: 261, attraction: null, imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid337_hole6_layout.jpg' },
        { hole: 7, par: 3, hdcp: 9, blue: 189, white: 172, red: 139, attraction: null, imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid337_hole7_layout.jpg' },
        { hole: 8, par: 5, hdcp: 4, blue: 530, white: 502, red: 419, attraction: 'ドラコンホール', imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid337_hole8_layout.jpg' },
        { hole: 9, par: 4, hdcp: 6, blue: 398, white: 379, red: 286, attraction: null, imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid337_hole9_layout.jpg' }
      ]
    },
    center: {
      name: '中コース（Center Course）',
      shortName: '中',
      cid: 338,
      holes: [
        { hole: 1, par: 4, hdcp: 6, blue: 406, white: 384, red: 332, attraction: null, imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid338_hole1_layout.jpg' },
        { hole: 2, par: 5, hdcp: 4, blue: 522, white: 502, red: 431, attraction: null, imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid338_hole2_layout.jpg' },
        { hole: 3, par: 4, hdcp: 7, blue: 356, white: 331, red: 275, attraction: null, imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid338_hole3_layout.jpg' },
        { hole: 4, par: 3, hdcp: 8, blue: 192, white: 168, red: 125, attraction: 'ニアピンホール', imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid338_hole4_layout.jpg' },
        { hole: 5, par: 4, hdcp: 1, blue: 444, white: 420, red: 331, attraction: null, imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid338_hole5_layout.jpg' },
        { hole: 6, par: 5, hdcp: 5, blue: 519, white: 495, red: 437, attraction: null, imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid338_hole6_layout.jpg' },
        { hole: 7, par: 4, hdcp: 3, blue: 423, white: 401, red: 281, attraction: null, imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid338_hole7_layout.jpg' },
        { hole: 8, par: 3, hdcp: 9, blue: 191, white: 166, red: 102, attraction: null, imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid338_hole8_layout.jpg' },
        { hole: 9, par: 4, hdcp: 2, blue: 423, white: 397, red: 314, attraction: 'ドラコンホール', imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid338_hole9_layout.jpg' }
      ]
    },
    west: {
      name: '西コース（West Course）',
      shortName: '西',
      cid: 339,
      holes: [
        { hole: 1, par: 4, hdcp: 4, blue: 402, white: 381, red: 238, attraction: null, imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid339_hole1_layout.jpg' },
        { hole: 2, par: 5, hdcp: 2, blue: 530, white: 498, red: 420, attraction: null, imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid339_hole2_layout.jpg' },
        { hole: 3, par: 4, hdcp: 5, blue: 375, white: 344, red: 304, attraction: null, imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid339_hole3_layout.jpg' },
        { hole: 4, par: 3, hdcp: 9, blue: 175, white: 157, red: 117, attraction: 'ニアピンホール', imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid339_hole4_layout.jpg' },
        { hole: 5, par: 4, hdcp: 1, blue: 458, white: 433, red: 339, attraction: 'ドラコンホール', imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid339_hole5_layout.jpg' },
        { hole: 6, par: 4, hdcp: 7, blue: 352, white: 336, red: 305, attraction: null, imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid339_hole6_layout.jpg' },
        { hole: 7, par: 4, hdcp: 6, blue: 346, white: 320, red: 270, attraction: null, imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid339_hole7_layout.jpg' },
        { hole: 8, par: 3, hdcp: 8, blue: 202, white: 186, red: 141, attraction: null, imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid339_hole8_layout.jpg' },
        { hole: 9, par: 5, hdcp: 3, blue: 531, white: 500, red: 406, attraction: null, imageUrl: 'https://pgm-images.s3.amazonaws.com/img/gallery/144/img_cid339_hole9_layout.jpg' }
      ]
    }
  },

  // 施設情報
  facilities: [
    { name: '東コース 売店・茶屋', location: '東4番・5番間 / 東8番付近', note: '自動販売機あり・トイレ併設' },
    { name: '中コース 売店・茶屋', location: '中4番ホール横 / 中8番付近', note: 'ドリンク・軽食自販機・トイレ併設' },
    { name: '西コース 売店・茶屋', location: '西5番ホール横 / 西8番付近', note: '自動販売機あり・トイレ併設' },
    { name: 'クラブハウス内', location: '2F レストラン＆コンペルーム', note: '表彰式会場は2Fコンペルームです' }
  ],

  // 賞品一覧（賞品.xlsx 準拠）
  prizes: [
    // --- 個人戦 ---
    {
      category: '個人戦',
      rank: '個人 優勝 🏆',
      title: '松坂牛焼肉食べ比べセット ＋ クリスタルトロフィー',
      desc: '栄えある個人優勝に輝いたチャンピオンに贈る日本最高峰の松坂牛！豪華クリスタルトロフィーも授与されます。',
      tag: '個人優勝',
      icon: 'trophy',
      highlight: true
    },
    {
      category: '個人戦',
      rank: '個人 準優勝 🥈',
      title: '熊本県産 すき焼き・しゃぶしゃぶ用特選肉（1kg）',
      desc: '惜しくも一歩届かずも堂々の準優勝！ご家族で大満足の極上すき焼き・しゃぶしゃぶ肉たっぷり1kg。',
      tag: '個人準優勝',
      icon: 'medal',
      highlight: true
    },
    {
      category: '個人戦',
      rank: '個人 第3位 🥉',
      title: '熊本 ふじ馬刺しセット',
      desc: 'トップ争いを演じた第3位入賞者へ！本場熊本の新鮮で旨み溢れる絶品馬刺し詰め合わせ。',
      tag: '個人3位',
      icon: 'award',
      highlight: true
    },
    {
      category: '個人戦',
      rank: '役員賞（4位～9位） 🎁',
      title: '役員より豪華協賛景品（計6名様）',
      desc: '役員よりご協賛いただいた豪華景品！',
      tag: '4位～9位（6賞）',
      icon: 'gift',
      btnLabel: '役員協賛（4位～9位）の内訳を見る',
      closeLabel: '役員協賛の内訳を閉じる',
      depts: [
        '4位: (総本)',
        '5位: (CB本)',
        '6位: (R)',
        '7位: (経本)',
        '8位: (V)',
        '9位: (M)'
      ]
    },
    {
      category: '個人戦',
      rank: '部門長賞＆役員賞 🎁',
      title: '各部門長・役員より豪華協賛景品（計22名様）',
      desc: '各部門長・役員よりご協賛いただいた豪華景品！',
      tag: '飛び賞（22賞）',
      icon: 'gift',
      btnLabel: '協賛部門一覧（22賞）を見る',
      closeLabel: '協賛部門一覧を閉じる',
      depts: [
        '10位: (品本)',
        '13位: (AI統)',
        '15位: (生本)',
        '18位: (技本)',
        '20位: (L社)',
        '22位: (栄社)',
        '24位: (YOC社)',
        '26位: (F社)',
        '30位: (RE)',
        '33位: (東科大)',
        '35位: (GCM)',
        '38位: (VS)',
        '40位: (生技)',
        '43位: (総RM)',
        '45位: (RC)',
        '48位: (M工産)',
        '50位: (品本証)',
        '54位: (生技)次',
        '58位: (人労)次',
        '60位: (R技Ｐ)',
        '64位: (T推)',
        '68位: (技管)'
      ]
    },
    {
      category: '個人戦',
      rank: 'BB賞（74位） 🍝',
      title: 'ビストロ パスタセット',
      desc: '次回は巻き返しを！美味しい特製パスタを味わって、次回コンペでのリベンジを誓いましょう。',
      tag: 'ブービー賞',
      icon: 'utensils'
    },
    {
      category: '個人戦',
      rank: 'BM賞（75位） 🍋',
      title: '未来のレモンサワー アサヒ チューハイ（6缶セット）',
      desc: '大会を最後まで盛り上げてくれた功労者へ！話題の本物のレモンスライス入りサワーで乾杯！',
      tag: 'ブービーメーカー',
      icon: 'beer'
    },

    // --- チーム戦（各チーム4名全員分！） ---
    {
      category: 'チーム戦',
      rank: 'チーム 優勝 🏆',
      title: '宮崎牛カルビ焼肉用（チーム4名様全員分！）',
      desc: '息の合ったチームワークで見事栄冠を勝ち取った優勝チーム！メンバー4名全員に極上カルビを贈呈！',
      tag: '4名全員分',
      icon: 'trophy',
      highlight: true
    },
    {
      category: 'チーム戦',
      rank: 'チーム 準優勝 🥈',
      title: '特選 ハンバーグ詰合せ（チーム4名様全員分！）',
      desc: '団結力で掴み取ったチーム準優勝！ジューシーで旨味たっぷりの本格ハンバーグを4名全員に。',
      tag: '4名全員分',
      icon: 'medal',
      highlight: true
    },
    {
      category: 'チーム戦',
      rank: 'チーム 第3位 🥉',
      title: '十勝橋本牧場 プレミアムアイスクリーム（チーム4名様全員分！）',
      desc: 'チーム戦トップ3入賞！北海道の大自然が育んだ濃厚でクリーミーな極上アイスを4名全員に。',
      tag: '4名全員分',
      icon: 'award'
    },
    {
      category: 'チーム戦',
      rank: 'チーム 5位（飛び賞） 🍖',
      title: '日本ハム 美ノ国・吟王セット（チーム4名様全員分！）',
      desc: 'ラッキーなチーム5位飛び賞！国産プレミアムハム・ソーセージの詰め合わせを4名全員に。',
      tag: '4名全員分',
      icon: 'gift'
    },
    {
      category: 'チーム戦',
      rank: 'チーム 10位（飛び賞） 🍝',
      title: 'ビストロ パスタセット（チーム4名様全員分！）',
      desc: '大会日10日にちなんだチーム10位賞！人気のパスタセットをメンバー4名全員に。',
      tag: '4名全員分',
      icon: 'utensils'
    },
    {
      category: 'チーム戦',
      rank: 'チーム 15位（飛び賞） 🍡',
      title: 'ムーンレイク特選 塩味大福（8個入 × チーム4名全員！）',
      desc: 'ゴルフ場特選の絶品和スイーツ！ラウンドの疲れを癒やすほどよい塩味と甘みの大福。',
      tag: '4名全員分',
      icon: 'gift'
    },
    {
      category: 'チーム戦',
      rank: 'チーム BB賞（19位） 🧀',
      title: 'ムーンレイク特選 チーズケーキ（冷凍 × チーム4名全員！）',
      desc: 'チームBB賞！濃厚でしっとり美味しいムーンレイク特選の冷凍チーズケーキを4名全員に。',
      tag: '4名全員分',
      icon: 'cake'
    },
    {
      category: 'チーム戦',
      rank: 'チーム BM賞（20位） 🌸',
      title: 'ムーンレイク特選 梅ケ枝餅（5個入 × チーム4名全員！）',
      desc: 'チームBM賞！福岡名物の香ばしい焼き餅「梅ケ枝餅」をメンバー4名全員に。',
      tag: '4名全員分',
      icon: 'gift'
    },

    // --- アトラクション賞 & 対抗戦 ---
    {
      category: 'アトラクション賞',
      rank: 'ベスグロ賞（男子・女子 各1名） 👑',
      title: 'サントリー プレミアムモルツ 缶ビール（6本セット）',
      desc: 'グロススコア栄えある社内No.1ゴルファーへ！男子の部・女性の部それぞれに最高峰プレモルを贈呈！',
      tag: '男子・女子各1名',
      icon: 'beer',
      highlight: true
    },
    {
      category: 'アトラクション賞',
      rank: 'ドラコン賞（各コース計6名） 🚀',
      title: 'オロナミンC / 全日本ラーメン / キーコーヒーギフト',
      desc: '豪快なティーショットを放ったスナイパーへ！（東No.8・中No.9・西No.5 各コース計6名に贈呈）',
      tag: '計6名様',
      icon: 'zap',
      details: [
        'オロナミンC 10本セット（2名様）',
        '全国ご当地ラーメン 4食セット（2名様）',
        'キーコーヒー ドリップオンギフト（2名様）'
      ]
    },
    {
      category: 'アトラクション賞',
      rank: 'ニアピン賞（各コース計6名） 🎯',
      title: 'カゴメフルーツギフト / 黒わらび餅 / 味の素スープセット',
      desc: 'ショートホールでピンに最も近づけたショットへ！（東No.4・中No.4・西No.4 各コース計6名に贈呈）',
      tag: '計6名様',
      icon: 'crosshair',
      details: [
        'カゴメ フルーツ＋野菜ギフト（2名様）',
        '特選 黒わらび餅セット（2名様）',
        '味の素 スープ＆コーヒーギフト（2名様）'
      ]
    },
    {
      category: 'アトラクション賞',
      rank: '対抗戦 1位 🎖️',
      title: '極上 黒豚バラしゃぶしゃぶ（4名様全員分！）',
      desc: '部門の威信を賭けた対抗戦の覇者へ！ジューシーで甘みのある極上黒豚しゃぶしゃぶ肉を4名全員に！',
      tag: '4名全員分',
      icon: 'award',
      highlight: true
    },

    // --- 参加賞 ---
    {
      category: '参加賞',
      rank: '全員参加賞 🎁',
      title: '特選 焼き菓子3個詰め合わせ（参加者全員にプレゼント！）',
      desc: '第4回YTCカップにご参加いただいた皆様へ、感謝の気持ちを込めてお持ち帰りいただける美味しい焼き菓子セットです。',
      tag: '参加者全員',
      icon: 'gift'
    }
  ],

  // 組み合わせ（全19組・カート・スタート時刻・メンバー）
  groups: [
    {
        "groupName": "東１",
        "course": "東コース → 中コース",
        "time": "09:03",
        "cartNo": "No.01",
        "members": [
            {
                "name": "桐野 博士",
                "dept": "GCM",
                "block": "M",
                "isLeader": false
            },
            {
                "name": "原 勝明",
                "dept": "生技",
                "block": "生本",
                "isLeader": false
            },
            {
                "name": "山崎 美和",
                "dept": "経画",
                "block": "本社棟",
                "isLeader": false
            },
            {
                "name": "平尾 光輝",
                "dept": "V技開",
                "block": "V",
                "isLeader": true
            }
        ]
    },
    {
        "groupName": "東２",
        "course": "東コース → 中コース",
        "time": "09:10",
        "cartNo": "No.02",
        "members": [
            {
                "name": "林田　歩",
                "dept": "CB本",
                "block": "本社棟",
                "isLeader": false
            },
            {
                "name": "吉武 博利",
                "dept": "品本企S",
                "block": "品本",
                "isLeader": false
            },
            {
                "name": "松尾 小巻",
                "dept": "経OP",
                "block": "本社棟",
                "isLeader": false
            },
            {
                "name": "家迫 慎一郎",
                "dept": "YOCM",
                "block": "YOC",
                "isLeader": true
            }
        ]
    },
    {
        "groupName": "東３",
        "course": "東コース → 中コース",
        "time": "09:17",
        "cartNo": "No.03",
        "members": [
            {
                "name": "久保田 由美恵",
                "dept": "AI統",
                "block": "技本",
                "isLeader": false
            },
            {
                "name": "岡久 学",
                "dept": "R",
                "block": "R",
                "isLeader": false
            },
            {
                "name": "原 英則",
                "dept": "技本",
                "block": "技本",
                "isLeader": false
            },
            {
                "name": "山本 栄治",
                "dept": "技管",
                "block": "技本",
                "isLeader": true
            }
        ]
    },
    {
        "groupName": "東４",
        "course": "東コース → 中コース",
        "time": "09:24",
        "cartNo": "No.04",
        "members": [
            {
                "name": "山田　達哉",
                "dept": "総本",
                "block": "本社棟",
                "isLeader": false
            },
            {
                "name": "赤星 孝行",
                "dept": "T推",
                "block": "品本",
                "isLeader": false
            },
            {
                "name": "國田 和孝",
                "dept": "YOCT",
                "block": "YOC",
                "isLeader": false
            },
            {
                "name": "浅井 雄介",
                "dept": "M開S1",
                "block": "M",
                "isLeader": true
            }
        ]
    },
    {
        "groupName": "東５",
        "course": "東コース → 中コース",
        "time": "09:31",
        "cartNo": "No.05",
        "members": [
            {
                "name": "柴田 悟",
                "dept": "栄社",
                "block": "本社棟",
                "isLeader": false
            },
            {
                "name": "清水 宏一",
                "dept": "人労 次",
                "block": "本社棟",
                "isLeader": false
            },
            {
                "name": "塚本 知明",
                "dept": "品本証技",
                "block": "品本",
                "isLeader": false
            },
            {
                "name": "長島 徳宏",
                "dept": "内製技",
                "block": "生本",
                "isLeader": true
            }
        ]
    },
    {
        "groupName": "東６",
        "course": "東コース → 中コース",
        "time": "09:38",
        "cartNo": "No.06",
        "members": [
            {
                "name": "村井　真二",
                "dept": "RE",
                "block": "R",
                "isLeader": false
            },
            {
                "name": "末吉 礼明",
                "dept": "VS",
                "block": "V",
                "isLeader": false
            },
            {
                "name": "尾島 正夫",
                "dept": "技析B",
                "block": "生本",
                "isLeader": false
            },
            {
                "name": "久保田 泰三",
                "dept": "調開発",
                "block": "調本",
                "isLeader": true
            }
        ]
    },
    {
        "groupName": "東７",
        "course": "東コース → 中コース",
        "time": "09:45",
        "cartNo": "No.07",
        "members": [
            {
                "name": "西来路 淳一",
                "dept": "品本企G",
                "block": "品本",
                "isLeader": false
            },
            {
                "name": "大屋　広明",
                "dept": "GCM",
                "block": "V",
                "isLeader": false
            },
            {
                "name": "秋吉　亮治",
                "dept": "AG開R",
                "block": "技本",
                "isLeader": true
            },
            {
                "name": "空き",
                "dept": "",
                "block": "",
                "isLeader": false
            }
        ]
    },
    {
        "groupName": "中１",
        "course": "中コース → 西コース",
        "time": "09:03",
        "cartNo": "No.08",
        "members": [
            {
                "name": "和田　慎",
                "dept": "R技P",
                "block": "R",
                "isLeader": false
            },
            {
                "name": "永田 英夫",
                "dept": "技管",
                "block": "技本",
                "isLeader": false
            },
            {
                "name": "平山 明美",
                "dept": "労政",
                "block": "本社棟",
                "isLeader": false
            },
            {
                "name": "岸本 龍之介",
                "dept": "人BP",
                "block": "本社棟",
                "isLeader": true
            }
        ]
    },
    {
        "groupName": "中２",
        "course": "中コース → 西コース",
        "time": "09:10",
        "cartNo": "No.09",
        "members": [
            {
                "name": "一木 靖司",
                "dept": "経本",
                "block": "本社棟",
                "isLeader": false
            },
            {
                "name": "田中 秀和",
                "dept": "労政",
                "block": "本社棟",
                "isLeader": false
            },
            {
                "name": "宮脇　智寿子",
                "dept": "R企販",
                "block": "R",
                "isLeader": false
            },
            {
                "name": "芦原 広明",
                "dept": "技管",
                "block": "技本",
                "isLeader": true
            }
        ]
    },
    {
        "groupName": "中３",
        "course": "中コース → 西コース",
        "time": "09:17",
        "cartNo": "No.10",
        "members": [
            {
                "name": "井手 耕三",
                "dept": "V",
                "block": "V",
                "isLeader": false
            },
            {
                "name": "山本 英樹",
                "dept": "技管",
                "block": "技本",
                "isLeader": false
            },
            {
                "name": "鹿又 智行",
                "dept": "R技AA",
                "block": "R",
                "isLeader": false
            },
            {
                "name": "田中 健大",
                "dept": "法務",
                "block": "本社棟",
                "isLeader": true
            }
        ]
    },
    {
        "groupName": "中４",
        "course": "中コース → 西コース",
        "time": "09:24",
        "cartNo": "No.11",
        "members": [
            {
                "name": "横尾 周洋",
                "dept": "YOC社",
                "block": "YOC",
                "isLeader": false
            },
            {
                "name": "中村 真人",
                "dept": "技析B",
                "block": "生本",
                "isLeader": false
            },
            {
                "name": "岡﨑 研二",
                "dept": "品本企G",
                "block": "品本",
                "isLeader": false
            },
            {
                "name": "中村 優",
                "dept": "YRM開",
                "block": "技本",
                "isLeader": true
            }
        ]
    },
    {
        "groupName": "中５",
        "course": "中コース → 西コース",
        "time": "09:31",
        "cartNo": "No.12",
        "members": [
            {
                "name": "筒井 幸雄",
                "dept": "東科大",
                "block": "技本",
                "isLeader": false
            },
            {
                "name": "伊藤 正和",
                "dept": "調開発",
                "block": "調本",
                "isLeader": false
            },
            {
                "name": "西岡 一昭",
                "dept": "品本企P1",
                "block": "品本",
                "isLeader": false
            },
            {
                "name": "中本 成信",
                "dept": "YOCM2",
                "block": "YOC",
                "isLeader": true
            }
        ]
    },
    {
        "groupName": "中６",
        "course": "中コース → 西コース",
        "time": "09:38",
        "cartNo": "No.13",
        "members": [
            {
                "name": "加茂 孝雄",
                "dept": "品本証",
                "block": "品本",
                "isLeader": false
            },
            {
                "name": "植村　宙",
                "dept": "GCM",
                "block": "本社棟",
                "isLeader": false
            },
            {
                "name": "栗田 智裕",
                "dept": "品本証S",
                "block": "品本",
                "isLeader": false
            },
            {
                "name": "小林 民生",
                "dept": "法務",
                "block": "本社棟",
                "isLeader": true
            }
        ]
    },
    {
        "groupName": "西１",
        "course": "西コース → 東コース",
        "time": "09:03",
        "cartNo": "No.14",
        "members": [
            {
                "name": "竹下　哲",
                "dept": "生技",
                "block": "生本",
                "isLeader": false
            },
            {
                "name": "須田 元樹",
                "dept": "品本企",
                "block": "品本",
                "isLeader": false
            },
            {
                "name": "髙見　利恵子",
                "dept": "Ｒ企計",
                "block": "R",
                "isLeader": false
            },
            {
                "name": "清水 大",
                "dept": "基開MF",
                "block": "技本",
                "isLeader": true
            }
        ]
    },
    {
        "groupName": "西２",
        "course": "西コース → 東コース",
        "time": "09:10",
        "cartNo": "No.15",
        "members": [
            {
                "name": "大塚 丈徳",
                "dept": "品本",
                "block": "品本",
                "isLeader": false
            },
            {
                "name": "山口　寛太",
                "dept": "生技 次",
                "block": "生本",
                "isLeader": false
            },
            {
                "name": "荒川 久美子",
                "dept": "品本企S3",
                "block": "品本",
                "isLeader": false
            },
            {
                "name": "牧野 省吾",
                "dept": "基開MF",
                "block": "技本",
                "isLeader": true
            }
        ]
    },
    {
        "groupName": "西３",
        "course": "西コース → 東コース",
        "time": "09:17",
        "cartNo": "No.16",
        "members": [
            {
                "name": "森田 卓寿",
                "dept": "F社",
                "block": "技本",
                "isLeader": false
            },
            {
                "name": "名村 知美",
                "dept": "総RM",
                "block": "本社棟",
                "isLeader": false
            },
            {
                "name": "村久木 宏",
                "dept": "人BP",
                "block": "本社棟",
                "isLeader": false
            },
            {
                "name": "吉田　稜平",
                "dept": "金型試",
                "block": "生本",
                "isLeader": true
            }
        ]
    },
    {
        "groupName": "西４",
        "course": "西コース → 東コース",
        "time": "09:24",
        "cartNo": "No.17",
        "members": [
            {
                "name": "山本 哲義",
                "dept": "生本",
                "block": "生本",
                "isLeader": false
            },
            {
                "name": "木谷 文彦",
                "dept": "M工産",
                "block": "M",
                "isLeader": false
            },
            {
                "name": "尾花 卓也",
                "dept": "調管",
                "block": "調本",
                "isLeader": false
            },
            {
                "name": "中元 善太",
                "dept": "技管",
                "block": "技本",
                "isLeader": true
            }
        ]
    },
    {
        "groupName": "西５",
        "course": "西コース → 東コース",
        "time": "09:31",
        "cartNo": "No.18",
        "members": [
            {
                "name": "松本 豊樹",
                "dept": "L社",
                "block": "生本",
                "isLeader": false
            },
            {
                "name": "古川　伸征",
                "dept": "RC",
                "block": "R",
                "isLeader": false
            },
            {
                "name": "田島 雄二",
                "dept": "内製技",
                "block": "生本",
                "isLeader": false
            },
            {
                "name": "梶原　慎介",
                "dept": "基開CA",
                "block": "技本",
                "isLeader": true
            }
        ]
    },
    {
        "groupName": "西6",
        "course": "西コース → 東コース",
        "time": "09:38",
        "cartNo": "No.19",
        "members": [
            {
                "name": "福田 大",
                "dept": "YRM開T",
                "block": "技本",
                "isLeader": false
            },
            {
                "name": "坪井 栄治",
                "dept": "YOCT",
                "block": "YOC",
                "isLeader": false
            },
            {
                "name": "華 炎",
                "dept": "調開発",
                "block": "調本",
                "isLeader": false
            },
            {
                "name": "大井 貴登",
                "dept": "R技PH",
                "block": "R",
                "isLeader": true
            }
        ]
    }
],

  // 参加者簡易名簿（プルダウン選択・ピン留め用、AI分析は全削除）
  members: [
    {
        "name": "一木 靖司",
        "dept": "経本",
        "block": "本社棟",
        "groupName": "中２",
        "course": "中コース → 西コース"
    },
    {
        "name": "中元 善太",
        "dept": "技管",
        "block": "技本",
        "groupName": "西４",
        "course": "西コース → 東コース"
    },
    {
        "name": "中本 成信",
        "dept": "YOCM2",
        "block": "YOC",
        "groupName": "中５",
        "course": "中コース → 西コース"
    },
    {
        "name": "中村 優",
        "dept": "YRM開",
        "block": "技本",
        "groupName": "中４",
        "course": "中コース → 西コース"
    },
    {
        "name": "中村 真人",
        "dept": "技析B",
        "block": "生本",
        "groupName": "中４",
        "course": "中コース → 西コース"
    },
    {
        "name": "久保田 泰三",
        "dept": "調開発",
        "block": "調本",
        "groupName": "東６",
        "course": "東コース → 中コース"
    },
    {
        "name": "久保田 由美恵",
        "dept": "AI統",
        "block": "技本",
        "groupName": "東３",
        "course": "東コース → 中コース"
    },
    {
        "name": "井手 耕三",
        "dept": "V",
        "block": "V",
        "groupName": "中３",
        "course": "中コース → 西コース"
    },
    {
        "name": "伊藤 正和",
        "dept": "調開発",
        "block": "調本",
        "groupName": "中５",
        "course": "中コース → 西コース"
    },
    {
        "name": "加茂 孝雄",
        "dept": "品本証",
        "block": "品本",
        "groupName": "中６",
        "course": "中コース → 西コース"
    },
    {
        "name": "原 勝明",
        "dept": "生技",
        "block": "生本",
        "groupName": "東１",
        "course": "東コース → 中コース"
    },
    {
        "name": "原 英則",
        "dept": "技本",
        "block": "技本",
        "groupName": "東３",
        "course": "東コース → 中コース"
    },
    {
        "name": "古川　伸征",
        "dept": "RC",
        "block": "R",
        "groupName": "西５",
        "course": "西コース → 東コース"
    },
    {
        "name": "吉武 博利",
        "dept": "品本企S",
        "block": "品本",
        "groupName": "東２",
        "course": "東コース → 中コース"
    },
    {
        "name": "吉田　稜平",
        "dept": "金型試",
        "block": "生本",
        "groupName": "西３",
        "course": "西コース → 東コース"
    },
    {
        "name": "名村 知美",
        "dept": "総RM",
        "block": "本社棟",
        "groupName": "西３",
        "course": "西コース → 東コース"
    },
    {
        "name": "和田　慎",
        "dept": "R技P",
        "block": "R",
        "groupName": "中１",
        "course": "中コース → 西コース"
    },
    {
        "name": "國田 和孝",
        "dept": "YOCT",
        "block": "YOC",
        "groupName": "東４",
        "course": "東コース → 中コース"
    },
    {
        "name": "坪井 栄治",
        "dept": "YOCT",
        "block": "YOC",
        "groupName": "西6",
        "course": "西コース → 東コース"
    },
    {
        "name": "塚本 知明",
        "dept": "品本証技",
        "block": "品本",
        "groupName": "東５",
        "course": "東コース → 中コース"
    },
    {
        "name": "大井 貴登",
        "dept": "R技PH",
        "block": "R",
        "groupName": "西6",
        "course": "西コース → 東コース"
    },
    {
        "name": "大塚 丈徳",
        "dept": "品本",
        "block": "品本",
        "groupName": "西２",
        "course": "西コース → 東コース"
    },
    {
        "name": "大屋　広明",
        "dept": "GCM",
        "block": "V",
        "groupName": "東７",
        "course": "東コース → 中コース"
    },
    {
        "name": "宮脇　智寿子",
        "dept": "R企販",
        "block": "R",
        "groupName": "中２",
        "course": "中コース → 西コース"
    },
    {
        "name": "家迫 慎一郎",
        "dept": "YOCM",
        "block": "YOC",
        "groupName": "東２",
        "course": "東コース → 中コース"
    },
    {
        "name": "小林 民生",
        "dept": "法務",
        "block": "本社棟",
        "groupName": "中６",
        "course": "中コース → 西コース"
    },
    {
        "name": "尾島 正夫",
        "dept": "技析B",
        "block": "生本",
        "groupName": "東６",
        "course": "東コース → 中コース"
    },
    {
        "name": "尾花 卓也",
        "dept": "調管",
        "block": "調本",
        "groupName": "西４",
        "course": "西コース → 東コース"
    },
    {
        "name": "山口　寛太",
        "dept": "生技 次",
        "block": "生本",
        "groupName": "西２",
        "course": "西コース → 東コース"
    },
    {
        "name": "山崎 美和",
        "dept": "経画",
        "block": "本社棟",
        "groupName": "東１",
        "course": "東コース → 中コース"
    },
    {
        "name": "山本 哲義",
        "dept": "生本",
        "block": "生本",
        "groupName": "西４",
        "course": "西コース → 東コース"
    },
    {
        "name": "山本 栄治",
        "dept": "技管",
        "block": "技本",
        "groupName": "東３",
        "course": "東コース → 中コース"
    },
    {
        "name": "山本 英樹",
        "dept": "技管",
        "block": "技本",
        "groupName": "中３",
        "course": "中コース → 西コース"
    },
    {
        "name": "山田　達哉",
        "dept": "総本",
        "block": "本社棟",
        "groupName": "東４",
        "course": "東コース → 中コース"
    },
    {
        "name": "岡久 学",
        "dept": "R",
        "block": "R",
        "groupName": "東３",
        "course": "東コース → 中コース"
    },
    {
        "name": "岡﨑 研二",
        "dept": "品本企G",
        "block": "品本",
        "groupName": "中４",
        "course": "中コース → 西コース"
    },
    {
        "name": "岸本 龍之介",
        "dept": "人BP",
        "block": "本社棟",
        "groupName": "中１",
        "course": "中コース → 西コース"
    },
    {
        "name": "平尾 光輝",
        "dept": "V技開",
        "block": "V",
        "groupName": "東１",
        "course": "東コース → 中コース"
    },
    {
        "name": "平山 明美",
        "dept": "労政",
        "block": "本社棟",
        "groupName": "中１",
        "course": "中コース → 西コース"
    },
    {
        "name": "木谷 文彦",
        "dept": "M工産",
        "block": "M",
        "groupName": "西４",
        "course": "西コース → 東コース"
    },
    {
        "name": "末吉 礼明",
        "dept": "VS",
        "block": "V",
        "groupName": "東６",
        "course": "東コース → 中コース"
    },
    {
        "name": "村久木 宏",
        "dept": "人BP",
        "block": "本社棟",
        "groupName": "西３",
        "course": "西コース → 東コース"
    },
    {
        "name": "村井　真二",
        "dept": "RE",
        "block": "R",
        "groupName": "東６",
        "course": "東コース → 中コース"
    },
    {
        "name": "松尾 小巻",
        "dept": "経OP",
        "block": "本社棟",
        "groupName": "東２",
        "course": "東コース → 中コース"
    },
    {
        "name": "松本 豊樹",
        "dept": "L社",
        "block": "生本",
        "groupName": "西５",
        "course": "西コース → 東コース"
    },
    {
        "name": "林田　歩",
        "dept": "CB本",
        "block": "本社棟",
        "groupName": "東２",
        "course": "東コース → 中コース"
    },
    {
        "name": "柴田 悟",
        "dept": "栄社",
        "block": "本社棟",
        "groupName": "東５",
        "course": "東コース → 中コース"
    },
    {
        "name": "栗田 智裕",
        "dept": "品本証S",
        "block": "品本",
        "groupName": "中６",
        "course": "中コース → 西コース"
    },
    {
        "name": "桐野 博士",
        "dept": "GCM",
        "block": "M",
        "groupName": "東１",
        "course": "東コース → 中コース"
    },
    {
        "name": "梶原　慎介",
        "dept": "基開CA",
        "block": "技本",
        "groupName": "西５",
        "course": "西コース → 東コース"
    },
    {
        "name": "森田 卓寿",
        "dept": "F社",
        "block": "技本",
        "groupName": "西３",
        "course": "西コース → 東コース"
    },
    {
        "name": "植村　宙",
        "dept": "GCM",
        "block": "本社棟",
        "groupName": "中６",
        "course": "中コース → 西コース"
    },
    {
        "name": "横尾 周洋",
        "dept": "YOC社",
        "block": "YOC",
        "groupName": "中４",
        "course": "中コース → 西コース"
    },
    {
        "name": "永田 英夫",
        "dept": "技管",
        "block": "技本",
        "groupName": "中１",
        "course": "中コース → 西コース"
    },
    {
        "name": "浅井 雄介",
        "dept": "M開S1",
        "block": "M",
        "groupName": "東４",
        "course": "東コース → 中コース"
    },
    {
        "name": "清水 大",
        "dept": "基開MF",
        "block": "技本",
        "groupName": "西１",
        "course": "西コース → 東コース"
    },
    {
        "name": "清水 宏一",
        "dept": "人労 次",
        "block": "本社棟",
        "groupName": "東５",
        "course": "東コース → 中コース"
    },
    {
        "name": "牧野 省吾",
        "dept": "基開MF",
        "block": "技本",
        "groupName": "西２",
        "course": "西コース → 東コース"
    },
    {
        "name": "田中 健大",
        "dept": "法務",
        "block": "本社棟",
        "groupName": "中３",
        "course": "中コース → 西コース"
    },
    {
        "name": "田中 秀和",
        "dept": "労政",
        "block": "本社棟",
        "groupName": "中２",
        "course": "中コース → 西コース"
    },
    {
        "name": "田島 雄二",
        "dept": "内製技",
        "block": "生本",
        "groupName": "西５",
        "course": "西コース → 東コース"
    },
    {
        "name": "福田 大",
        "dept": "YRM開T",
        "block": "技本",
        "groupName": "西6",
        "course": "西コース → 東コース"
    },
    {
        "name": "秋吉　亮治",
        "dept": "AG開R",
        "block": "技本",
        "groupName": "東７",
        "course": "東コース → 中コース"
    },
    {
        "name": "竹下　哲",
        "dept": "生技",
        "block": "生本",
        "groupName": "西１",
        "course": "西コース → 東コース"
    },
    {
        "name": "筒井 幸雄",
        "dept": "東科大",
        "block": "技本",
        "groupName": "中５",
        "course": "中コース → 西コース"
    },
    {
        "name": "芦原 広明",
        "dept": "技管",
        "block": "技本",
        "groupName": "中２",
        "course": "中コース → 西コース"
    },
    {
        "name": "荒川 久美子",
        "dept": "品本企S3",
        "block": "品本",
        "groupName": "西２",
        "course": "西コース → 東コース"
    },
    {
        "name": "華 炎",
        "dept": "調開発",
        "block": "調本",
        "groupName": "西6",
        "course": "西コース → 東コース"
    },
    {
        "name": "西岡 一昭",
        "dept": "品本企P1",
        "block": "品本",
        "groupName": "中５",
        "course": "中コース → 西コース"
    },
    {
        "name": "西来路 淳一",
        "dept": "品本企G",
        "block": "品本",
        "groupName": "東７",
        "course": "東コース → 中コース"
    },
    {
        "name": "赤星 孝行",
        "dept": "T推",
        "block": "品本",
        "groupName": "東４",
        "course": "東コース → 中コース"
    },
    {
        "name": "長島 徳宏",
        "dept": "内製技",
        "block": "生本",
        "groupName": "東５",
        "course": "東コース → 中コース"
    },
    {
        "name": "須田 元樹",
        "dept": "品本企",
        "block": "品本",
        "groupName": "西１",
        "course": "西コース → 東コース"
    },
    {
        "name": "髙見　利恵子",
        "dept": "Ｒ企計",
        "block": "R",
        "groupName": "西１",
        "course": "西コース → 東コース"
    },
    {
        "name": "鹿又 智行",
        "dept": "R技AA",
        "block": "R",
        "groupName": "中３",
        "course": "中コース → 西コース"
    }
]
};

