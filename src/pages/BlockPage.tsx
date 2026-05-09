import type React from "react";
import { CodeBlock } from "../components/CodeBlock";
import { DemoBox } from "../components/DemoBox";

export function BlockPage() {
	return (
		<div className="space-y-8">
			<h2 className="font-bold text-2xl text-gray-800">ブロック要素</h2>

			<DemoBox
				title="基本的な振る舞い"
				description="ブロック要素は親要素の横幅いっぱいに広がり、前後に改行が入ります。"
			>
				<div style={{ background: "#93c5fd", padding: "8px" }}>div 要素 1</div>
				<div style={{ background: "#fca5a5", padding: "8px" }}>div 要素 2</div>
				<div style={{ background: "#86efac", padding: "8px" }}>div 要素 3</div>
			</DemoBox>
			<CodeBlock
				code={`<div style="background: #93c5fd;">div 要素 1</div>
<div style="background: #fca5a5;">div 要素 2</div>
<div style="background: #86efac;">div 要素 3</div>`}
			/>

			<DemoBox
				title="width の指定"
				description="ブロック要素は width を指定できます。指定しない場合は親要素の100%になります。"
			>
				<div style={{ background: "#93c5fd", padding: "8px", width: "50%" }}>
					width: 50%
				</div>
				<div style={{ background: "#fca5a5", padding: "8px", width: "200px" }}>
					width: 200px
				</div>
				<div style={{ background: "#86efac", padding: "8px" }}>
					width 指定なし（100%）
				</div>
			</DemoBox>
			<CodeBlock
				code={`<div style="width: 50%;">width: 50%</div>
<div style="width: 200px;">width: 200px</div>
<div>width 指定なし（100%）</div>`}
			/>

			<DemoBox
				title="height の指定"
				description="ブロック要素は height を指定できます。"
			>
				<div
					style={{
						background: "#93c5fd",
						padding: "8px",
						height: "80px",
						marginBottom: "8px",
					}}
				>
					height: 80px
				</div>
				<div style={{ background: "#fca5a5", padding: "8px" }}>
					height 指定なし（コンテンツに合わせる）
				</div>
			</DemoBox>
			<CodeBlock
				code={`<div style="height: 80px;">height: 80px</div>
<div>height 指定なし（コンテンツに合わせる）</div>`}
			/>

			<DemoBox
				title="margin の効果"
				description="ブロック要素では margin が上下左右すべて効きます。"
			>
				<div style={{ background: "#e5e7eb", padding: "4px" }}>
					<div
						style={{
							background: "#93c5fd",
							padding: "8px",
							margin: "20px",
						}}
					>
						margin: 20px（上下左右すべて効いている）
					</div>
				</div>
			</DemoBox>
			<CodeBlock
				code={`<div style="background: #e5e7eb;">
  <div style="margin: 20px;">
    margin: 20px（上下左右すべて効いている）
  </div>
</div>`}
			/>

			<DemoBox
				title="代表的なブロック要素"
				description="カテゴリ別の代表タグ一覧です。いずれも display: block として振る舞います。"
			>
				{([
					{
						category: "見出し",
						color: "#fef9c3",
						items: [
							{ tag: "h1〜h6", desc: "セクション見出し。h1 が最上位、h6 が最下位" },
						],
						demo: (
							<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" as const, marginTop: "6px" }}>
								{[1,2,3,4].map(n => {
									const sizes = ["1.5em","1.25em","1.1em","1em"];
									return <span key={n} style={{ fontWeight: "bold", fontSize: sizes[n-1] }}>h{n}</span>;
								})}
							</div>
						),
					},
					{
						category: "文章",
						color: "#dcfce7",
						items: [
							{ tag: "p", desc: "テキストの段落" },
							{ tag: "blockquote", desc: "長い引用文（cite 属性で出典を付与）" },
							{ tag: "pre", desc: "整形済みテキスト。空白・改行をそのまま表示" },
							{ tag: "address", desc: "連絡先情報" },
						],
					},
					{
						category: "汎用コンテナ",
						color: "#dbeafe",
						items: [
							{ tag: "div", desc: "意味を持たない汎用ブロックコンテナ" },
							{ tag: "figure", desc: "画像・図表とキャプションをまとめる" },
							{ tag: "details / summary", desc: "折りたたみ可能なコンテンツ" },
						],
					},
					{
						category: "セクショニング",
						color: "#e0e7ff",
						items: [
							{ tag: "header", desc: "ページ・セクションのヘッダー" },
							{ tag: "nav", desc: "ナビゲーションリンク群" },
							{ tag: "main", desc: "ページのメインコンテンツ（1ページに1つ）" },
							{ tag: "section", desc: "意味的なセクション（見出しを伴う）" },
							{ tag: "article", desc: "独立して配信できるコンテンツ（記事・投稿）" },
							{ tag: "aside", desc: "補足情報・サイドバー" },
							{ tag: "footer", desc: "ページ・セクションのフッター" },
						],
					},
					{
						category: "リスト",
						color: "#fce7f3",
						items: [
							{ tag: "ul", desc: "順序なしリスト（箇条書き）" },
							{ tag: "ol", desc: "順序ありリスト（番号付き）" },
							{ tag: "li", desc: "リストの各項目（ul/ol の子要素）" },
							{ tag: "dl / dt / dd", desc: "定義リスト（用語と説明のペア）" },
						],
					},
					{
						category: "テーブル",
						color: "#fef3c7",
						items: [
							{ tag: "table", desc: "表全体のコンテナ" },
							{ tag: "thead / tbody / tfoot", desc: "表のヘッダー・本体・フッター行グループ" },
							{ tag: "tr", desc: "表の行" },
						],
					},
					{
						category: "フォーム",
						color: "#f3e8ff",
						items: [
							{ tag: "form", desc: "フォームコンテナ。action/method を指定" },
							{ tag: "fieldset", desc: "関連するフォーム部品をグループ化" },
						],
					},
					{
						category: "その他",
						color: "#f1f5f9",
						items: [
							{ tag: "hr", desc: "水平線（話題の区切り）" },
						],
					},
				] as Array<{ category: string; color: string; items: Array<{ tag: string; desc: string }>; demo?: React.ReactNode }>).map(({ category, color, items, demo }) => (
					<div key={category} style={{ marginBottom: "12px" }}>
						<p style={{ fontSize: "11px", fontWeight: "bold", color: "#6b7280", marginBottom: "4px", textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>
							{category}
						</p>
						<div style={{ background: color, borderRadius: "6px", padding: "8px 12px" }}>
							{items.map(({ tag, desc }) => (
								<div key={tag} style={{ display: "flex", gap: "10px", alignItems: "baseline", padding: "3px 0", borderBottom: "1px solid rgba(0,0,0,0.05)", fontSize: "13px" }}>
									<code style={{ background: "rgba(0,0,0,0.08)", padding: "1px 6px", borderRadius: "3px", fontFamily: "monospace", whiteSpace: "nowrap" as const, minWidth: "140px" }}>{tag}</code>
									<span style={{ color: "#374151" }}>{desc}</span>
								</div>
							))}
							{demo}
						</div>
					</div>
				))}
			</DemoBox>
		</div>
	);
}
