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

## サンプルを見てみよう

React アプリで実際の振る舞いを確認：

```
npm run dev
```

ブラウザで各サンプルを触って動作を確認しよう！
