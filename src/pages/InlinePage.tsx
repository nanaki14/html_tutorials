import type React from "react";
import { CodeBlock } from "../components/CodeBlock";
import { DemoBox } from "../components/DemoBox";

export function InlinePage() {
	return (
		<div className="space-y-8">
			<h2 className="font-bold text-2xl text-gray-800">インライン要素</h2>

			<DemoBox
				title="基本的な振る舞い"
				description="インライン要素はコンテンツの幅だけを占め、横に並びます。"
			>
				<span style={{ background: "#93c5fd" }}>span 要素 1</span>
				<span style={{ background: "#fca5a5" }}>span 要素 2</span>
				<span style={{ background: "#86efac" }}>span 要素 3</span>
			</DemoBox>
			<CodeBlock
				code={`<span style="background: #93c5fd;">span 要素 1</span>
<span style="background: #fca5a5;">span 要素 2</span>
<span style="background: #86efac;">span 要素 3</span>`}
			/>

			<DemoBox
				title="width / height は効かない"
				description="インライン要素に width や height を指定しても無視されます。"
			>
				<span
					style={{
						background: "#93c5fd",
						width: "300px",
						height: "100px",
					}}
				>
					width: 300px, height: 100px を指定 → 無視される
				</span>
			</DemoBox>
			<CodeBlock
				code={`<!-- width / height を指定しても効かない -->
<span style="width: 300px; height: 100px;">
  width: 300px, height: 100px を指定 → 無視される
</span>`}
			/>

			<DemoBox
				title="margin の効き方"
				description="インライン要素では左右の margin は効きますが、上下の margin は効きません。"
			>
				<div style={{ background: "#e5e7eb", padding: "4px" }}>
					前のテキスト
					<span
						style={{
							background: "#93c5fd",
							margin: "20px",
						}}
					>
						margin: 20px を指定
					</span>
					後のテキスト
				</div>
				<p className="mt-2 text-gray-500 text-xs">
					↑ 左右の margin は効いているが、上下は効いていない
				</p>
			</DemoBox>
			<CodeBlock
				code={`前のテキスト
<span style="margin: 20px;">
  margin: 20px を指定
</span>
後のテキスト
<!-- 左右のmarginは効くが、上下は効かない -->`}
			/>

			<DemoBox
				title="padding の注意点"
				description="インライン要素の上下 padding は見た目上は効きますが、周囲のレイアウトに影響しません。"
			>
				<div style={{ background: "#e5e7eb", padding: "4px", lineHeight: "2" }}>
					上の行のテキスト
					<br />
					前のテキスト
					<span
						style={{
							background: "#93c5fd",
							padding: "20px",
						}}
					>
						padding: 20px を指定
					</span>
					後のテキスト
					<br />
					下の行のテキスト
				</div>
				<p className="mt-2 text-gray-500 text-xs">
					↑ padding
					は見た目上は効いているが、上下の行と重なっている（レイアウトに影響していない）
				</p>
			</DemoBox>
			<CodeBlock
				code={`上の行のテキスト<br />
前のテキスト
<span style="padding: 20px;">
  padding: 20px を指定
</span>
後のテキスト<br />
下の行のテキスト
<!-- padding は見た目上効くがレイアウトに影響しない -->`}
			/>

			<DemoBox
				title="代表的なインライン要素"
				description="テキストの流れの中に配置される要素です。display: inline として振る舞います。"
			>
				{([
					{
						category: "汎用・強調",
						color: "#dbeafe",
						items: [
							{ tag: "span", desc: "意味を持たない汎用インラインコンテナ", demo: <span style={{ background: "#bfdbfe", padding: "1px 4px" }}>テキスト</span> },
							{ tag: "strong", desc: "重要・強い強調（デフォルトで太字）", demo: <strong>重要なテキスト</strong> },
							{ tag: "em", desc: "強調（デフォルトで斜体）", demo: <em>強調テキスト</em> },
							{ tag: "mark", desc: "マーカーハイライト", demo: <mark>ハイライト</mark> },
							{ tag: "small", desc: "注釈・補足・免責事項など補助的なテキスト", demo: <small>補足情報</small> },
							{ tag: "b", desc: "太字（意味的な強調なし）", demo: <b>太字</b> },
							{ tag: "i", desc: "斜体（慣用句・専門用語など）", demo: <i>斜体テキスト</i> },
							{ tag: "u", desc: "下線（固有名詞の誤りなど）", demo: <u>下線テキスト</u> },
							{ tag: "s / del", desc: "取り消し線（s: 無効な情報 / del: 削除された内容）", demo: <><s>取り消し</s> / <del>削除済み</del></> },
						],
					},
					{
						category: "リンク・参照",
						color: "#dcfce7",
						items: [
							{ tag: "a", desc: "ハイパーリンク。href 属性でリンク先を指定", demo: <a href="#!" style={{ color: "#2563eb" }}>リンクテキスト</a> },
							{ tag: "abbr", desc: "略語。title 属性でフルスペルを付与", demo: <abbr title="HyperText Markup Language">HTML</abbr> },
							{ tag: "cite", desc: "作品・著作物のタイトル", demo: <cite>書籍タイトル</cite> },
							{ tag: "time", desc: "日時。datetime 属性で機械可読形式を指定", demo: <time dateTime="2024-01-01">2024年1月1日</time> },
						],
					},
					{
						category: "コード・技術",
						color: "#fef9c3",
						items: [
							{ tag: "code", desc: "インラインコードスニペット", demo: <code style={{ background: "#f3f4f6", padding: "1px 4px", borderRadius: "3px" }}>const x = 1</code> },
							{ tag: "kbd", desc: "キーボード入力・キー名", demo: <kbd style={{ background: "#e5e7eb", padding: "1px 6px", borderRadius: "3px", border: "1px solid #d1d5db", fontSize: "12px" }}>Ctrl+C</kbd> },
							{ tag: "var", desc: "数式・プログラムの変数", demo: <var>x</var> },
							{ tag: "samp", desc: "プログラムの出力サンプル", demo: <samp>error: not found</samp> },
						],
					},
					{
						category: "上付き・下付き",
						color: "#fce7f3",
						items: [
							{ tag: "sup", desc: "上付き文字（指数・注番号など）", demo: <span>x<sup>2</sup> / 注<sup>1</sup></span> },
							{ tag: "sub", desc: "下付き文字（化学式など）", demo: <span>H<sub>2</sub>O</span> },
						],
					},
					{
						category: "メディア・フォーム（inline-block）",
						color: "#e0e7ff",
						items: [
							{ tag: "img", desc: "画像（self-closing）。alt 属性は必須", demo: <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='24'%3E%3Crect width='40' height='24' fill='%23c4b5fd'/%3E%3Ctext x='20' y='16' text-anchor='middle' font-size='10' fill='%236d28d9'%3Eimg%3C/text%3E%3C/svg%3E" alt="img demo" style={{ verticalAlign: "middle" }} /> },
							{ tag: "input", desc: "入力フィールド（self-closing）。type 属性で種類を指定", demo: <input type="text" defaultValue="入力例" style={{ border: "1px solid #d1d5db", borderRadius: "3px", padding: "1px 4px", fontSize: "12px", width: "80px" }} /> },
							{ tag: "button", desc: "クリック可能なボタン", demo: <button type="button" style={{ background: "#6366f1", color: "white", padding: "2px 10px", borderRadius: "4px", fontSize: "12px", border: "none" }}>ボタン</button> },
							{ tag: "label", desc: "フォームコントロールのラベル。for 属性で input と紐付け", demo: <label style={{ fontSize: "13px" }}>ラベル</label> },
						],
					},
					{
						category: "改行・区切り",
						color: "#f1f5f9",
						items: [
							{ tag: "br", desc: "強制改行（self-closing）。段落ではなく行内改行に使う" },
							{ tag: "wbr", desc: "任意の改行ポイント（長い単語内で折り返し可能な位置）" },
						],
					},
				] as Array<{ category: string; color: string; items: Array<{ tag: string; desc: string; demo?: React.ReactNode }> }>).map(({ category, color, items }) => (
					<div key={category} style={{ marginBottom: "12px" }}>
						<p style={{ fontSize: "11px", fontWeight: "bold", color: "#6b7280", marginBottom: "4px", textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>
							{category}
						</p>
						<div style={{ background: color, borderRadius: "6px", padding: "8px 12px" }}>
							{items.map(({ tag, desc, demo }) => (
								<div key={tag} style={{ display: "flex", gap: "10px", alignItems: "center", padding: "4px 0", borderBottom: "1px solid rgba(0,0,0,0.05)", fontSize: "13px" }}>
									<code style={{ background: "rgba(0,0,0,0.08)", padding: "1px 6px", borderRadius: "3px", fontFamily: "monospace", whiteSpace: "nowrap" as const, minWidth: "140px" }}>{tag}</code>
									<span style={{ color: "#374151", flex: 1 }}>{desc}</span>
									{demo && <span style={{ whiteSpace: "nowrap" as const }}>{demo}</span>}
								</div>
							))}
						</div>
					</div>
				))}
			</DemoBox>
		</div>
	);
}
