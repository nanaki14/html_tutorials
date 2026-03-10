# HTML ブロック要素・インライン要素 チュートリアル

HTMLのブロック要素とインライン要素の振る舞いを学ぶためのインタラクティブなサンプル集と教材スライドです。

## 技術スタック

- **Vite** — ビルドツール
- **React + TypeScript** — UIフレームワーク
- **Tailwind CSS v4** — スタイリング
- **Biome** — リンター / フォーマッター
- **Marp** — スライド作成

## セットアップ

```bash
npm install
```

## 開発

```bash
# サンプルアプリの起動
npm run dev

# Biome によるリント
npm run lint

# Biome による自動修正
npm run lint:fix
```

## スライド

```bash
# HTML スライドの生成
npm run slides

# ファイル監視モードでスライド生成
npm run slides:watch

# PDF スライドの生成
npm run slides:pdf
```

## ディレクトリ構成

```
├── src/
│   ├── components/    # 共通コンポーネント
│   ├── pages/         # 各ページ
│   ├── index.css      # Tailwind CSS エントリポイント
│   ├── main.tsx       # アプリケーションエントリポイント
│   └── App.tsx        # ルーティング設定
├── slides/
│   └── deck.md        # Marp スライド
├── biome.json         # Biome 設定
├── vite.config.ts     # Vite 設定
└── package.json
```
