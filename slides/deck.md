---
marp: true
theme: default
paginate: true
header: "HTML ブロック要素とインライン要素"
---

# HTML ブロック要素とインライン要素

要素の表示モデルを理解しよう

---

## ブロック要素とは？

- 親要素の**横幅いっぱい**に広がる
- 前後に**改行**が入る
- `width` / `height` を指定できる
- `margin` / `padding` が上下左右すべて効く

### 代表的なブロック要素

`<div>`, `<p>`, `<h1>`〜`<h6>`, `<ul>`, `<ol>`, `<li>`, `<section>`, `<article>`, `<header>`, `<footer>`

---

## インライン要素とは？

- コンテンツの**幅だけ**を占める
- 前後に改行が入らず、**横に並ぶ**
- `width` / `height` を指定**できない**
- 上下の `margin` は**効かない**

### 代表的なインライン要素

`<span>`, `<a>`, `<strong>`, `<em>`, `<code>`, `<img>`, `<br>`

---

## ブロック要素の振る舞い

```html
<div style="background: lightblue;">ブロック1</div>
<div style="background: lightcoral;">ブロック2</div>
<div style="background: lightgreen;">ブロック3</div>
```

→ 各 `<div>` は**横幅100%**を占め、**縦に積み重なる**

---

## インライン要素の振る舞い

```html
<span style="background: lightblue;">インライン1</span>
<span style="background: lightcoral;">インライン2</span>
<span style="background: lightgreen;">インライン3</span>
```

→ 各 `<span>` は**コンテンツ幅だけ**を占め、**横に並ぶ**

---

## width / height の違い

| プロパティ | ブロック要素 | インライン要素 |
|-----------|------------|--------------|
| `width`   | ✅ 効く     | ❌ 効かない    |
| `height`  | ✅ 効く     | ❌ 効かない    |

インライン要素に幅・高さを指定しても**無視される**

---

## margin の違い

| 方向 | ブロック要素 | インライン要素 |
|------|------------|--------------|
| 上下 | ✅ 効く     | ❌ 効かない    |
| 左右 | ✅ 効く     | ✅ 効く       |

---

## padding の違い

| 方向 | ブロック要素 | インライン要素 |
|------|------------|--------------|
| 上下 | ✅ 効く（レイアウトに影響） | ⚠️ 見た目は効くがレイアウトに影響しない |
| 左右 | ✅ 効く     | ✅ 効く       |

---

## inline-block

`display: inline-block` で**両方の特性**を持てる

- インラインのように**横に並ぶ**
- ブロックのように `width` / `height` / `margin` が**すべて効く**

```html
<span style="display: inline-block; width: 100px; height: 50px;
  background: lightblue;">ボックス</span>
```

---

## まとめ

| 特性 | ブロック | インライン | インラインブロック |
|------|---------|-----------|-----------------|
| 横幅 | 親要素100% | コンテンツ幅 | コンテンツ幅 |
| 改行 | あり | なし | なし |
| width/height | ✅ | ❌ | ✅ |
| margin 上下 | ✅ | ❌ | ✅ |
| margin 左右 | ✅ | ✅ | ✅ |

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

- `height: 50%` → **親要素の height** の50%
- ただし、親に**明示的な height** がないと**無視される**

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

## 4方向指定でサイズ確定

```html
<div style="position: relative; width: 400px; height: 200px;">
  <div style="position: absolute;
    top: 20px; right: 20px; bottom: 20px; left: 20px;">
    <!-- width  = 400 - 20 - 20 = 360px -->
    <!-- height = 200 - 20 - 20 = 160px -->
  </div>
</div>
```

---

## 過剰指定時のルール

| 指定 | 結果 |
|------|------|
| `left` + `right`（width なし） | 幅 = 親幅 - left - right |
| `left` + `right` + `width` | **right が無視**される（LTR） |
| `top` + `bottom`（height なし） | 高さ = 親高さ - top - bottom |
| `top` + `bottom` + `height` | **bottom が無視**される |

---

## サンプルを見てみよう

React アプリで実際の振る舞いを確認：

```
npm run dev
```

ブラウザで各サンプルを触って動作を確認しよう！
