# てんちゃん画像アセット（レビュー用メモ）

- 対象ファイル: `assets/characters/tenchan/tenchan_front.png`
- 形式: PNG（背景透過）
- 解像度: 768 x 768
- 用途: 主人公「てんちゃん」の正面向き立ち絵（全身）

## 見た目の要点
- ハチワレ猫の白黒模様
- 首周り・お腹・足先は白
- それ以外の体と尻尾は黒
- 丸い白目の中に大きめの黒目
- 太めの黒い線、フラット塗り、親しみやすく少しとぼけた雰囲気

## レビュー時の確認ポイント
- 小サイズ表示でも判別しやすいシルエットか
- 目・顔の印象が「やさしくてかわいい」通常表情になっているか
- 仕様名が「てんちゃん」で統一されているか


## 表示できるかの確認手順
1. PNGシグネチャ確認（`PNG` で始まること）
2. 画像サイズ確認（`768 x 768`）
3. 透過チャンネル（RGBA）を確認

```bash
python - <<'PY'
import struct, zlib
p = "assets/characters/tenchan/tenchan_front.png"
with open(p, "rb") as f:
    data = f.read()
assert data[:8] == b"\x89PNG\r\n\x1a\n", "PNGシグネチャ不一致"
width, height = struct.unpack("!II", data[16:24])
assert (width, height) == (768, 768), f"サイズ不一致: {(width, height)}"
color_type = data[25]
assert color_type == 6, f"RGBAではありません (color_type={color_type})"
print("OK: PNG / 768x768 / RGBA")
PY
```
