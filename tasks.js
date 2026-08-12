/**
 * タスクデータファイル
 * ------------------------------------------------------
 * resource_panel.html / config.js / holidays.js とは別に、実データだけを
 * このファイルに持たせています。<script src="tasks.js">として読み込むため、
 * file://で開いた状態でもCORSの制限を受けず、そのまま画面へ反映されます。
 *
 * 1タスク = 1要素。assigneesは配列なので、複数人が同じタスクを担当する
 * 場合は複数人分を並べてください(工数は担当者ごとに個別に入力します)。
 *
 * {
 *   taskNo   : タスク番号(表示用の識別子)
 *   name     : タスク名
 *   start    : 開始日(YYYY-MM-DD)
 *   end      : 終了日(YYYY-MM-DD、開始日と同じなら1日のタスク)
 *   assignees: [{ name: 担当者名, hours: 見積もり工数(時間) }, ...]
 *   extra    : (任意) config.jsのextraTaskFieldsで追加した項目の値。
 *              例: extra: { model: "XXXX型" }
 * }
 *
 * 1営業日あたりの必要工数は、resource_panel.html側で
 * 「担当者の見積もり工数 ÷ (開始日〜終了日の営業日数)」として自動計算します。
 * 営業日の判定には holidays.js の祝日データと、土日の自動判定を使います。
 */

window.TASKS = [
  {
    taskNo: "2608-0001",
    name: "要件定義書作成",
    start: "2026-08-11",
    end: "2026-08-11",
    assignees: [{ name: "吉田", hours: 10 }],
    extra: { model: "製品A" }   // ← ここに入れる
  },
  {
    taskNo: "2608-0002",
    name: "要件定義書レビュー",
    model: "製品A",
    start: "2026-08-12",
    end: "2026-08-12",
    assignees: [{ name: "吉田", hours: 3 }]
  },
  {
    taskNo: "2608-0003",
    name: "要件定義書指摘反映",
    model: "製品A",
    start: "2026-08-12",
    end: "2026-08-13",
    assignees: [{ name: "吉田", hours: 4 }]
  },
  {
    taskNo: "2608-0004",
    name: "詳細設計書作成",
    model: "製品A",
    start: "2026-08-14",
    end: "2026-08-15",
    assignees: [{ name: "鈴木", hours: 15 }]
  },
  {
    taskNo: "2608-0005",
    name: "ソフトウェア実装",
    model: "製品A",
    start: "2026-08-17",
    end: "2026-08-19",
    assignees: [{ name: "伊藤", hours: 21 }]
  },
  {
    taskNo: "2608-0006",
    name: "統合テスト実施",
    model: "製品A",
    start: "2026-08-20",
    end: "2026-08-24",
    assignees: [
      { name: "山田", hours: 12 },
      { name: "伊藤", hours: 6 }
    ]
  }
];
