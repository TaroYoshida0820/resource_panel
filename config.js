/**
 * リソース負荷管理ツール 設定ファイル
 * ------------------------------------------------------
 * 担当者マスタと、負荷判定の閾値(残業/手すきの基準)を持たせています。
 * タスクの実データ(tasks.js)、祝日データ(holidays.js)とは別ファイルにして
 * 更新頻度の違い(タスクは日次、祝日は年次、担当者マスタは随時)に対応しています。
 *
 * members: 担当者ごとに負荷の閾値(1営業日あたりの上限時間)を設定します。
 *   overloadThreshold : これを超えたら「過負荷」として赤くハイライト
 *   時短勤務などで所定労働時間が違う担当者は、ここで個別に調整してください。
 *   tasks.js側に登場するがここに登録の無い担当者は、デフォルト値(8h)で扱われます。
 *
 * taskFields: タスク一覧の列を、順番も含めてすべてここで定義します。
 *   { key, label, width, numeric, alignRight }
 *   - key   : 値の取得元。taskNo/name/hours/start/end/assignee はタスクの
 *             基本情報から自動計算されます(工数=担当者ごとの見積もり工数、
 *             開始/終了はMM-DD表示)。それ以外のkeyはtasks.js側の各タスクの
 *             extraオブジェクトから取得します(例: extra:{ model:"XXXX" }
 *             に対して key:"model")。
 *   - label : 列見出し
 *   - width : 列幅(px)
 *   - numeric  : 数値として右寄せ表示したい場合はtrue(工数などで使用)
 *   - alignRight: 文字列を右詰めにしたい場合はtrue(担当者などで使用)
 *   配列の並び順がそのまま列の表示順になるので、項目の追加・並べ替えは
 *   この配列を編集するだけで完結します(resource_panel.html本体は変更不要)。
 */

window.RESOURCE_CONFIG = {
  projectName: "Sampleプロジェクト",

  dataFiles: {
    tasks: "tasks.js",
    holidays: "holidays.js"
  },
  autoRefreshIntervalSec: 30,

  // 表示範囲の設定
  visibleDays: 21,    // 一度に表示する日数(既定: 3週間)
  navStepDays: 7,     // 「前へ/次へ」ボタンで動かす日数
  startDate: null,    // 表示開始日(YYYY-MM-DD)。nullの場合は「今日」から表示します

  // タスク一覧の列定義(順番=表示順)
  taskFields: [
    { key: "taskNo",   label: "TaskNo",  width: 70 },
    { key: "name",     label: "タスク名", width: 130 },
    { key: "model",    label: "モデル名", width: 130 },
    { key: "hours",    label: "工数",    width: 44, numeric: true },
    { key: "start",    label: "開始",    width: 70 },
    { key: "end",      label: "終了",    width: 70 },
    { key: "assignee", label: "担当者",  width: 56, alignRight: true }
    // 追加したい項目はここに好きな位置で挿入できます
    // 例: { key: "model", label: "機種名", width: 80 } ← tasks.js側の extra.model を参照
  ],

  // 閾値のデフォルト値(members側に個別設定が無い担当者に適用)
  defaultOverloadThreshold: 8,

  members: [
    { name: "吉田", overloadThreshold: 8 },
    { name: "鈴木", overloadThreshold: 8 },
    { name: "伊藤", overloadThreshold: 8 },
    { name: "山田", overloadThreshold: 6 } // 例: 時短勤務(所定6h)を想定した個別設定
  ]
};
