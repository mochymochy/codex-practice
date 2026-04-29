# にゃん缶スライダー 〜てんちゃんのお手伝い〜 初期プロトタイプ PNG素材一覧

初期プロトタイプで必要なPNG素材を、作成優先度と用途が分かるように整理した一覧です。

| No. | ファイル名 | 保存先 | 用途 | 推奨サイズ | 背景透過 | 優先度 | 備考 |
|---:|---|---|---|---|---|---|---|
| 1 | tenchan_front.png | assets/characters/tenchan/ | 正面向きの基本立ち絵 | 512x512 または 256x256 | 必要 | 高 | - |
| 2 | tenchan_side.png | assets/characters/tenchan/ | 横向き | 512x512 または 256x256 | 必要 | 中 | - |
| 3 | tenchan_back.png | assets/characters/tenchan/ | 後ろ姿 | 512x512 または 256x256 | 必要 | 中 | - |
| 4 | tenchan_happy.png | assets/characters/tenchan/ | 嬉しい表情 | 512x512 または 256x256 | 必要 | 中 | 目を閉じたにっこり顔で、舌を出したかわいい表情 |
| 5 | tenchan_sad.png | assets/characters/tenchan/ | かなしい・しょんぼり表情 | 512x512 または 256x256 | 必要 | 中 | - |
| 6 | tenchan_push.png | assets/characters/tenchan/ | 猫缶を押すポーズ | 512x512 または 256x256 | 必要 | 高 | - |
| 7 | tenchan_icon.png | assets/characters/tenchan/ | UI用顔アイコン | 256x256 または 128x128 | 必要 | 高 | - |
| 8 | cat_can.png | assets/items/ | 通常の猫缶 | 256x256 または 128x128 | 必要 | 高 | - |
| 9 | paw_goal.png | assets/items/ | 猫缶を置くゴールマス | 256x256 または 128x128 | 必要 | 高 | - |
| 10 | wall.png | assets/items/ | 壁マス | 256x256 または 128x128 | 必要または不要 | 高 | 初期実装ではCSS表現でも可 |
| 11 | floor.png | assets/items/ | 床マス | 256x256 または 128x128 | 不要 | 高 | 初期実装ではCSS表現でも可 |
| 12 | box.png | assets/items/ | 倉庫内の装飾・障害物 | 256x256 または 128x128 | 必要 | 中 | - |
| 13 | button_start.png | assets/ui/ | スタートボタン | 任意。あとでUIに合わせて調整 | 必要 | 中 | - |
| 14 | button_reset.png | assets/ui/ | リセットボタン | 任意。あとでUIに合わせて調整 | 必要 | 中 | - |
| 15 | stage_panel.png | assets/ui/ | ステージ選択パネル | 任意。あとでUIに合わせて調整 | 必要 | 中 | - |
| 16 | icon_star.png | assets/ui/ | 星評価アイコン | 128x128 | 必要 | 中 | - |
| 17 | icon_steps.png | assets/ui/ | 手数表示アイコン | 128x128 | 必要 | 低 | - |
| 18 | nyankan_slider_logo.png | assets/logo/ | メインタイトルロゴ | 横長。例：1200x400 | 必要 | 高 | - |
| 19 | nyankan_slider_logo_with_subtitle.png | assets/logo/ | サブタイトル入りロゴ | 横長。例：1200x500 | 必要 | 中 | - |
| 20 | tenchan_design_sheet.png | assets/references/ | てんちゃん設定資料 | 任意 | 不要 | 高 | 参考画像として使用 |
| 21 | cat_can_design_sheet.png | assets/references/ | 猫缶デザイン資料 | 任意 | 不要 | 高 | 参考画像として使用 |
| 22 | game_screen_mockup.png | assets/references/ | ゲーム画面イメージ | 任意 | 不要 | 高 | 参考画像として使用 |
| 23 | ui_design_sheet.png | assets/references/ | UIデザイン資料 | 任意 | 不要 | 高 | 参考画像として使用 |

初期プロトタイプでは優先度 高 の素材から作成する。

## 初回作成対象のPNG素材

初期プロトタイプでは、まず以下の素材を優先して作成する。

- assets/characters/tenchan/tenchan_front.png
- assets/characters/tenchan/tenchan_push.png
- assets/characters/tenchan/tenchan_icon.png
- assets/items/cat_can.png
- assets/items/paw_goal.png
- assets/items/wall.png
- assets/items/floor.png
- assets/logo/nyankan_slider_logo.png

## 作成方針

- まずはゲームとして動かすために必要な最小素材だけを作る
- キャラクター差分やUI差分は後回しにする
- 正式な見た目は assets/references/ の参考画像を基準にする
- てんちゃんの表記は必ず「てんちゃん」に統一する
- ファイル名・フォルダ名では tenchan を使用してよい
- PNGは背景透過が必要なものと不要なものを分ける
- 画像の見た目がブレないよう、docs/character-design.md と docs/design-assets.md を参照する
