---
marp: true
theme: default
paginate: true
header: "CSS レイアウト基礎"
---

# CSS レイアウト基礎

ブロック・インライン・Flex・Grid・position

---

## ブロック要素とは？

- 親要素の**横幅いっぱい**に広がる
- 前後に**改行**が入る
- `width` / `height` を指定できる
- `margin` / `padding` が上下左右すべて効く

### 代表的なブロック要素

- **見出し** — `h1`〜`h6`
- **文章** — `p`、`blockquote`、`pre`
- **汎用** — `div`、`figure`
- **セクショニング** — `header`、`nav`、`main`、`section`、`article`、`aside`、`footer`
- **リスト** — `ul`、`ol`、`li`、`dl`/`dt`/`dd`
- **その他** — `table`、`form`、`hr`

---

## インライン要素とは？

- コンテンツの**幅だけ**を占める
- 前後に改行が入らず、**横に並ぶ**
- `width` / `height` を指定**できない**
- 上下の `margin` は**効かない**

### 代表的なインライン要素

- **汎用・強調** — `span`、`strong`、`em`、`mark`、`small`、`b`、`i`、`s`
- **リンク・参照** — `a`、`abbr`、`cite`、`time`
- **コード** — `code`、`kbd`、`var`
- **上付き・下付き** — `sup`、`sub`
- **メディア・フォーム** — `img`、`input`、`button`、`label`
- **改行** — `br`

---

## ブロック vs インライン 比較

| 特性 | ブロック | インライン | inline-block |
|------|---------|-----------|-------------|
| 横幅 | 親要素100% | コンテンツ幅 | コンテンツ幅 |
| 改行 | あり | なし | なし |
| width/height | ✅ | ❌ | ✅ |
| margin 上下 | ✅ | ❌ | ✅ |
| margin 左右 | ✅ | ✅ | ✅ |

---

## inline-block

`display: inline-block` で**両方の特性**を持てる

- インラインのように**横に並ぶ**
- ブロックのように `width` / `height` / `margin` が**すべて効く**

```html
<span style="display: inline-block;
  width: 100px; height: 50px;">ボックス</span>
```

---

# width / height の計算基準

---

## width: % の基準

- `width: 50%` → **親要素の content-box 幅**の50%
- padding や border は含まない

```html
<div style="width: 400px; padding: 16px;">
  <div style="width: 50%;">→ 200px になる</div>
</div>
```

親の content-box 幅 = 400px → 子の 50% = **200px**

---

## height: % の基準

- `height: 50%` は**親に明示的な height** がないと無視される

```html
<!-- ✅ 効く：親に height がある -->
<div style="height: 200px;">
  <div style="height: 50%;">→ 100px</div>
</div>

<!-- ❌ 効かない：親の height が auto -->
<div>
  <div style="height: 50%;">→ 無視</div>
</div>
```

---

## box-sizing の影響

| box-sizing | width が指す範囲 |
|-----------|----------------|
| `content-box`（初期値） | コンテンツ領域のみ |
| `border-box` | border + padding + コンテンツ |

```css
/* content-box: 実際の描画幅 = 200 + 20*2 + 5*2 = 250px */
div { width: 200px; padding: 20px; border: 5px solid; }

/* border-box: 実際の描画幅 = 200px */
div { box-sizing: border-box; width: 200px; padding: 20px; border: 5px solid; }
```

---

# margin / padding の % 計算

---

## 核心ルール

> margin / padding の % は
> **上下左右すべて「親要素の幅」**が基準

```html
<div style="width: 400px;">
  <div style="margin-top: 10%;">→ 40px（高さではなく幅！）</div>
  <div style="padding-top: 10%;">→ 40px（高さではなく幅！）</div>
</div>
```

---

## なぜ上下も「幅」基準なのか？

1. **循環参照の回避**
   親の高さ → 子の margin → 子のレイアウト → 親の高さ…

2. **正方形を作りやすい**
   `padding: 10%` で上下左右が同じ値になる

3. **CSS 仕様で明確に定義**
   containing block の inline-size（通常は幅）が基準

---

## 応用：padding-top でアスペクト比維持

```css
/* 16:9 → 9/16 = 56.25% */
.aspect-16-9 {
  width: 100%;
  padding-top: 56.25%;
}

/* 現在は aspect-ratio で簡潔に */
.modern { aspect-ratio: 16 / 9; }
```

---

# position: absolute

---

## absolute 要素はブロック化する

- `<span>` などのインライン要素も absolute にすると**ブロックの振る舞い**
- `width` / `height` / `margin` がすべて効く

```html
<span style="position: absolute; width: 200px; height: 40px;">
  → ブロックとして扱われる
</span>
```

---

## top + bottom で高さを決定

```html
<div style="position: relative; height: 200px;">
  <div style="position: absolute; top: 30px; bottom: 30px;">
    <!-- height = 200 - 30 - 30 = 140px -->
  </div>
</div>
```

同様に `left + right` で **幅** も決定できる

---

## 4方向指定でサイズ確定 / 過剰指定のルール

```html
<div style="position: relative; width: 400px; height: 200px;">
  <div style="position: absolute;
    top: 20px; right: 20px; bottom: 20px; left: 20px;">
    <!-- width = 360px / height = 160px -->
  </div>
</div>
```

| 指定 | 結果 |
|------|------|
| `left` + `right` + `width` | **right が無視**（LTR） |
| `top` + `bottom` + `height` | **bottom が無視** |

---

## absolute は子要素の height: % の基準になる

`position: absolute` の要素は高さが確定しているため、
直下の子要素で `height: %` が**有効**になる

```css
/* ❌ static な親では height: % は効かない */
.parent { /* height: auto */ }
.child  { height: 50%; } /* 無視される */

/* ✅ absolute な親では高さが確定している */
.absolute-parent {
  position: absolute;
  top: 0; bottom: 0; /* ← 高さが確定 */
}
.child { height: 50%; } /* → 有効 */
```

---

## containing block（基準となる親）

absolute 要素の位置・サイズは **最も近い `position: relative/absolute/fixed/sticky` の祖先** が基準

```html
<div><!-- static: 基準にならない -->
  <div style="position: relative;"><!-- ← containing block -->
    <div><!-- static: 基準にならない -->
      <div style="position: absolute; top: 10px; right: 10px;">
        <!-- relative の div を基準に配置される -->
      </div>
    </div>
  </div>
</div>
```

---

# position: sticky

---

## sticky とは？

**relative と fixed のハイブリッド**

| position | 通常時 | スクロール時 | 親の外に出るか |
|----------|--------|------------|-------------|
| relative | フロー内 | 一緒に流れる | — |
| fixed | ビューポート固定 | 常に固定 | 出る |
| **sticky** | **フロー内** | **閾値で貼り付く** | **出ない** |

---

## sticky の基本構文

```css
.section-header {
  position: sticky;
  top: 0; /* ← 必須: この位置に達したら貼り付く */
  z-index: 1;
  background: white; /* 背景色がないと下が透ける */
}
```

`top` / `bottom` / `left` / `right` のいずれかが**必須**

---

## 親要素の範囲を超えると外れる

```
┌─ セクション1（親） ──────────┐
│ [sticky ヘッダー] ← 上端で貼り付く
│  コンテンツ...
│  コンテンツ...
└──────────────────────────┘  ← ここで外れる
┌─ セクション2（親） ──────────┐
│ [sticky ヘッダー] ← 上端で再び貼り付く
```

fixed と違い **自分の親コンテナの範囲内だけ**で貼り付く

---

## sticky が効かない原因 TOP 3

1. **`top` / `bottom` を指定していない**
   → `position: sticky` だけでは動かない

2. **祖先要素に `overflow: hidden / auto / scroll` がある**
   → その要素がスクロールコンテナになり sticky が壊れる

3. **親要素の高さが足りない**
   → 貼り付く余地（親の高さ - sticky 要素の高さ）がない

---

## sticky のよくある使いどころ

```css
/* セクション見出し */
.section-title { position: sticky; top: 0; }

/* テーブルのヘッダー行・固定列 */
thead th    { position: sticky; top: 0; }
td:first-child { position: sticky; left: 0; }

/* グローバルナビゲーション */
.global-nav { position: sticky; top: 0; z-index: 100; }

/* サイドバー目次 */
.toc { position: sticky; top: 80px; /* ヘッダー高さ分ずらす */ }
```

---

# ビューポート単位

---

## vw / vh — 基本

- `1vw` = ビューポート幅の 1%
- `1vh` = ビューポート高さの 1%

```css
.hero  { width: 100vw; height: 100vh; }
.fluid { font-size: clamp(1rem, 2vw, 2rem); }
```

**問題：** スマートフォンの `100vh` はアドレスバーの表示・非表示で高さが変わり、意図しないはみ出しが起きる

---

## svh / lvh / dvh — 新しい高さ単位

| 単位 | フルネーム | 基準 |
|------|-----------|------|
| `svh` | Small Viewport Height | アドレスバー**表示時**の高さ（最小） |
| `lvh` | Large Viewport Height | アドレスバー**非表示時**の高さ（最大） |
| `dvh` | Dynamic Viewport Height | アドレスバーの状態に**追従** |

Chrome 108+ / Safari 15.4+ / Firefox 110+

---

## svh / dvh の使い分け

```css
/* ヒーロー・スプラッシュ → はみ出しNGなら svh */
.hero { height: 100svh; }

/* モーダル・オーバーレイ → 常に画面ぴったりなら dvh */
.modal { height: 100dvh; }

/* 幅方向（vw）はモバイルでも安定しているのでそのまま使える */
.element { width: 50vw; }
```

`dvh` は再描画コストがあるため多用は避ける

---

# Flexbox

---

## display: flex — 基本

```css
.container {
  display: flex;
  gap: 8px; /* アイテム間のスペース */
}
```

- 子要素が**横方向**に並ぶ（`flex-direction: row` がデフォルト）
- 1次元のレイアウト（行 **or** 列）に最適

---

## 主軸 / 交差軸

```
flex-direction: row（デフォルト）
┌────────────────────────────┐
│ [A] → [B] → [C]           │  ← 主軸（justify-content）
└────────────────────────────┘
         ↕ 交差軸（align-items）
```

| プロパティ | 制御する軸 |
|-----------|----------|
| `justify-content` | 主軸方向の揃え |
| `align-items` | 交差軸方向の揃え |

---

## justify-content

```css
.container {
  justify-content: flex-start;    /* 始点寄せ（デフォルト） */
  /* justify-content: center;      中央 */
  /* justify-content: flex-end;    終点寄せ */
  /* justify-content: space-between; 両端配置・間隔均等 */
  /* justify-content: space-evenly;  全スペースを均等分割 */
}
```

---

## align-items / flex-wrap

```css
.container {
  align-items: stretch;    /* 交差軸に引き伸ばす（デフォルト） */
  /* align-items: center;   交差軸の中央 */
  /* align-items: flex-start / flex-end / baseline */

  flex-wrap: nowrap;  /* 1行に収める（デフォルト） */
  /* flex-wrap: wrap;  はみ出したら折り返す */
}
```

---

## flex アイテムのサイズ制御

```css
/* flex: grow shrink basis の省略形 */
.item { flex: 1; }           /* 均等分割（flex: 1 1 0%） */
.item { flex: 0 0 200px; }   /* 固定幅 200px（伸縮なし） */
.item { flex: 2; }           /* 他の flex:1 の2倍の幅 */
```

---

## よく使う Flex パターン

```css
/* 完全中央揃え */
.center { display: flex; justify-content: center; align-items: center; }

/* ナビバー（ロゴ左・リンク右） */
.navbar { display: flex; justify-content: space-between; align-items: center; }

/* サイドバー + メイン */
.layout  { display: flex; gap: 16px; }
.sidebar { flex: 0 0 240px; } /* 固定幅 */
.main    { flex: 1; }         /* 残り全部 */
```

---

# CSS Grid

---

## Flex vs Grid — 使い分け

| | Flexbox | Grid |
|--|---------|------|
| 次元 | **1次元**（行 or 列） | **2次元**（行 and 列） |
| 向き | コンテンツ主導 | レイアウト主導 |
| 向いている場面 | ナビ・ボタン列・カード内部 | ページ骨格・カードグリッド |

---

## grid-template-columns

```css
.grid { display: grid; gap: 16px; }

/* 均等3列 */
.grid { grid-template-columns: repeat(3, 1fr); }

/* 固定サイドバー + 可変メイン */
.layout { grid-template-columns: 240px 1fr; }

/* レスポンシブ（メディアクエリ不要） */
.cards  { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); }
```

---

## grid-template-areas — 名前で配置

```css
.page {
  display: grid;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  grid-template-columns: 240px 1fr;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```

---

## span — セルをまたぐ

```css
.wide { grid-column: span 3; } /* 3列をまたぐ */
.tall { grid-row: span 2; }    /* 2行をまたぐ */

/* 開始・終了ラインで指定する方法 */
.item { grid-column: 1 / 3; }  /* 2列幅 */
```

---

## subgrid — 親のトラックを子に継承

カードグリッドで**ボタンの位置を横に揃えたい**問題を解決

```css
/* 親: 行トラックを定義 */
.plan-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto; /* タイトル・説明・フッター */
}

/* 子: span 3行 + subgrid で親トラックを引き継ぐ */
.card {
  display: grid;
  grid-row: span 3;
  grid-template-rows: subgrid; /* ← これだけ */
}
```

→ 説明文の長さに関わらず**ボタン行が横一線に揃う**

Chrome 117+ / Firefox 71+ / Safari 16+

---

## Grid を使うべき判断

- ✅ 行と列を**同時に**コントロールしたい
- ✅ ページ全体の骨格（header / sidebar / main / footer）
- ✅ 複数列カードを均等に並べたい
- ✅ 要素を特定のセルに配置したい
- → ナビ・カード内部・1方向の並びは **Flexbox** を使う

---

# Container Query

---

## @media vs @container

| | メディアクエリ | コンテナクエリ |
|--|-------------|------------|
| 基準 | **ビューポート**のサイズ | **親コンテナ**のサイズ |
| 適用単位 | ページ全体のブレイクポイント | コンポーネント単位 |
| 再利用性 | 配置場所に依存する | どこに置いても自律的に変化 |

Chrome 105+ / Safari 16+ / Firefox 110+

---

## 基本構文

```css
/* ① 親にコンテナを宣言 */
.card-wrapper {
  container-type: inline-size; /* 幅を基準にする */
}

/* ② コンテナサイズに応じてスタイルを変える */
.card { flex-direction: column; } /* デフォルト: 縦積み */

@container (min-width: 300px) {
  .card { flex-direction: row; }  /* 300px 以上: 横並び */
}
```

---

## container-type の値

| 値 | 基準 | 用途 |
|----|------|------|
| `inline-size` | 要素の**幅** | ほとんどのケース |
| `size` | 幅と高さ両方 | 高さも基準にしたい場合 |

---

## cqw / cqh — コンテナ相対単位

```css
/* vw/vh のコンテナ版 */
.title { font-size: 4cqw; } /* コンテナ幅の 4% */
.half  { width: 50cqw; }    /* コンテナ幅の 50% */
```

---

## Container Query を使うべき場面

- ✅ 同じコンポーネントをサイドバーとメイン両方に置く
- ✅ デザインシステム・UIライブラリのコンポーネント
- ✅ 再利用可能なカード・ウィジェット
- ✅ ページのブレイクポイントからコンポーネントを切り離したい
- → ページ全体のレイアウト変更・ナビのハンバーガー切り替えは **@media** を使う

---

# まとめ

---

## レイアウト手法の選び方

| やりたいこと | 使う手法 |
|------------|---------|
| 要素を横 / 縦に並べる | **Flexbox** |
| 行と列の2次元レイアウト | **Grid** |
| ページ全体の骨格 | **Grid** |
| 画面サイズで切り替え | **@media** |
| コンポーネントのサイズで切り替え | **@container** |
| スクロールで貼り付く要素 | **sticky** |
| 他の要素に影響しない重ね | **absolute** |

---

## height: % が効く条件

`height: %` が有効になるのは、親の高さが**確定している**場合だけ

| 親の状態 | height: % |
|---------|----------|
| `height: auto`（デフォルト） | ❌ 無視される |
| `height: 200px`（明示指定） | ✅ 有効 |
| `position: absolute`（top+bottom で確定） | ✅ 有効 |
| `position: sticky / fixed` | ✅ 有効 |

---

## サンプルを見てみよう

React アプリで実際の振る舞いを確認：

```
npm run dev
```

ブラウザで各ページを触って動作を確認しよう！
