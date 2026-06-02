import { CodeBlock } from "../components/CodeBlock";
import { DemoBox } from "../components/DemoBox";

export function GridPage() {
	return (
		<div className="space-y-8">
			<h2 className="font-bold text-2xl text-gray-800">CSS Grid の使い所</h2>

			<div className="rounded-lg bg-blue-50 p-6">
				<p className="text-blue-800">
					CSS Grid は<strong>2次元レイアウト</strong>（行 AND 列の同時制御）に最適です。
					Flexbox が「1列のアイテムを並べる」のに対し、Grid は「ページ全体のレイアウト骨格を定義する」用途に向いています。
				</p>
			</div>

			{/* Flex vs Grid の使い分け */}
			<div className="rounded-lg bg-white p-6 shadow-sm">
				<h3 className="mb-4 font-bold text-lg">Flex vs Grid — 使い分けの目安</h3>
				<div className="grid grid-cols-2 gap-4">
					<div className="rounded-lg bg-blue-50 p-4">
						<p className="mb-2 font-bold text-blue-800">Flexbox が向く場面</p>
						<ul className="space-y-1 text-blue-700 text-sm">
							<li>• ナビゲーションバーのリンク並べ</li>
							<li>• ボタングループ・タグリスト</li>
							<li>• カード内部の要素配置</li>
							<li>• 中央揃え（水平 or 垂直 1方向）</li>
							<li>• アイテム数が動的（wrap で折り返し）</li>
						</ul>
						<p className="mt-2 text-blue-600 text-xs">→ コンテンツ主導（アイテムのサイズに合わせる）</p>
					</div>
					<div className="rounded-lg bg-purple-50 p-4">
						<p className="mb-2 font-bold text-purple-800">Grid が向く場面</p>
						<ul className="space-y-1 text-purple-700 text-sm">
							<li>• ページ全体のレイアウト骨格</li>
							<li>• 複数列のカードグリッド</li>
							<li>• 複雑なダッシュボード</li>
							<li>• 行と列を同時に意識するレイアウト</li>
							<li>• アイテムを特定セルに配置したい時</li>
						</ul>
						<p className="mt-2 text-purple-600 text-xs">→ レイアウト主導（グリッドを先に定義する）</p>
					</div>
				</div>
			</div>

			{/* 基本の Grid */}
			<DemoBox
				title="display: grid — 基本の列定義"
				description="grid-template-columns で列数とサイズを定義します。"
			>
				<div className="space-y-4">
					<div>
						<p className="mb-1 text-gray-500 text-xs">grid-template-columns: 1fr 1fr 1fr（均等3列）</p>
						<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
							{["1", "2", "3", "4", "5", "6"].map((n) => (
								<div key={n} style={{ background: "#93c5fd", padding: "16px", textAlign: "center" }}>
									{n}
								</div>
							))}
						</div>
					</div>
					<div>
						<p className="mb-1 text-gray-500 text-xs">grid-template-columns: 200px 1fr（固定 + 残り）</p>
						<div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "8px" }}>
							<div style={{ background: "#c4b5fd", padding: "16px", fontSize: "12px" }}>sidebar 200px</div>
							<div style={{ background: "#fca5a5", padding: "16px", fontSize: "12px" }}>main 残り全部</div>
						</div>
					</div>
				</div>
			</DemoBox>
			<CodeBlock
				code={`.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 均等3列 */
  gap: 16px;
}

/* repeat() で短く書ける */
.grid { grid-template-columns: repeat(3, 1fr); }

/* 固定幅 + 可変幅 */
.layout {
  display: grid;
  grid-template-columns: 240px 1fr; /* sidebar + main */
}`}
			/>

			{/* repeat と auto-fill/auto-fit */}
			<DemoBox
				title="auto-fill / auto-fit — レスポンシブなグリッド"
				description="minmax() と組み合わせることで、列数を自動的に調整できます。メディアクエリ不要のレスポンシブグリッドの定番パターンです。"
			>
				<div className="space-y-4">
					<div>
						<p className="mb-1 text-gray-500 text-xs">
							repeat(auto-fill, minmax(150px, 1fr)) — 最小150px、可能な限り列を追加
						</p>
						<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "8px" }}>
							{["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"].map((c) => (
								<div key={c} style={{ background: "#86efac", padding: "16px", textAlign: "center", fontSize: "13px" }}>
									{c}
								</div>
							))}
						</div>
					</div>
				</div>
			</DemoBox>
			<CodeBlock
				code={`/* メディアクエリなしのレスポンシブカードグリッド */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}
/* → 幅 200px 以上のカードを画面幅に合わせて自動で列を増減 */

/* auto-fill vs auto-fit の違い */
/* auto-fill: 空のセルを維持（列数を保つ） */
/* auto-fit:  空のセルを潰す（アイテムを引き伸ばす） */`}
			/>

			{/* grid-template-areas */}
			<DemoBox
				title="grid-template-areas — 名前で配置するページレイアウト"
				description="エリアに名前をつけて、視覚的にレイアウトを定義できます。ページ全体の骨格設計に非常に読みやすいです。"
			>
				<div
					style={{
						display: "grid",
						gridTemplateAreas: '"header header" "sidebar main" "footer footer"',
						gridTemplateColumns: "150px 1fr",
						gridTemplateRows: "auto 1fr auto",
						gap: "8px",
						minHeight: "200px",
					}}
				>
					<div style={{ gridArea: "header", background: "#6366f1", color: "white", padding: "12px", textAlign: "center", fontSize: "13px" }}>header</div>
					<div style={{ gridArea: "sidebar", background: "#c4b5fd", padding: "12px", fontSize: "13px" }}>sidebar</div>
					<div style={{ gridArea: "main", background: "#bfdbfe", padding: "12px", fontSize: "13px" }}>main content</div>
					<div style={{ gridArea: "footer", background: "#374151", color: "white", padding: "12px", textAlign: "center", fontSize: "13px" }}>footer</div>
				</div>
			</DemoBox>
			<CodeBlock
				code={`.page {
  display: grid;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100svh;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }`}
			/>

			{/* span でセルをまたぐ */}
			<DemoBox
				title="grid-column / grid-row — セルをまたいで配置"
				description="span キーワードで複数のセルをまたいで配置できます。複雑なダッシュボードやマガジンレイアウトに便利です。"
			>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(3, 1fr)",
						gap: "8px",
					}}
				>
					<div style={{ gridColumn: "span 3", background: "#6366f1", color: "white", padding: "12px", textAlign: "center", fontSize: "13px" }}>3列をまたぐ (span 3)</div>
					<div style={{ gridColumn: "span 2", background: "#93c5fd", padding: "12px", fontSize: "13px" }}>2列 (span 2)</div>
					<div style={{ background: "#fca5a5", padding: "12px", fontSize: "13px" }}>1列</div>
					<div style={{ background: "#86efac", padding: "12px", fontSize: "13px" }}>1列</div>
					<div style={{ background: "#fde68a", padding: "12px", fontSize: "13px" }}>1列</div>
					<div style={{ background: "#c4b5fd", padding: "12px", fontSize: "13px" }}>1列</div>
				</div>
			</DemoBox>
			<CodeBlock
				code={`.wide-item {
  grid-column: span 3; /* 3列をまたぐ */
}
.tall-item {
  grid-row: span 2;    /* 2行をまたぐ */
}

/* 開始・終了ラインで指定する方法 */
.item {
  grid-column: 1 / 3;  /* 1本目〜3本目のラインの間 = 2列幅 */
  grid-row: 1 / 4;     /* 1本目〜4本目のラインの間 = 3行高 */
}`}
			/>

			{/* subgrid */}
			<DemoBox
				title="subgrid — 親のトラックを子に継承する"
				description="カードグリッドで「ボタンの位置を横に揃えたい」のに、説明文の長さが違うとズレてしまう問題を subgrid が解決します。"
			>
				{(() => {
					const plans = [
						{
							color: "#bfdbfe",
							label: "Basic",
							title: "基本プラン",
							desc: "個人利用に最適なシンプルプランです。",
							price: "¥980 / 月",
						},
						{
							color: "#c4b5fd",
							label: "Pro",
							title: "プロフェッショナルプラン（人気 No.1）",
							desc: "チーム向け。高度な分析ツール・優先サポート・無制限ストレージがすべて含まれます。",
							price: "¥2,980 / 月",
						},
						{
							color: "#bbf7d0",
							label: "Enterprise",
							title: "エンタープライズ",
							desc: "大規模組織向けのカスタムプランです。",
							price: "要お問い合わせ",
						},
					];
					const cardStyle = (_color: string) => ({
						background: "white",
						border: "2px solid #e5e7eb",
						borderRadius: "8px",
						overflow: "hidden" as const,
					});
					const headerStyle = (color: string) => ({
						background: color,
						padding: "12px 16px",
						fontWeight: "bold" as const,
						fontSize: "14px",
					});
					const bodyStyle = {
						padding: "12px 16px",
						color: "#4b5563",
						fontSize: "13px",
					};
					const footerStyle = {
						padding: "12px 16px",
						borderTop: "1px solid #e5e7eb",
					};
					const btnStyle = {
						background: "#6366f1",
						color: "white",
						padding: "6px 20px",
						borderRadius: "4px",
						fontSize: "13px",
						border: "none",
						cursor: "pointer" as const,
					};
					return (
						<div className="space-y-6">
							<div>
								<p className="mb-2 font-medium text-red-600 text-xs">✗ subgrid なし — 説明文の量によってボタンの高さがバラバラになる</p>
								<div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", alignItems: "start" }}>
									{plans.map((p) => (
										<div key={p.label} style={cardStyle(p.color)}>
											<div style={headerStyle(p.color)}>{p.title}</div>
											<div style={bodyStyle}>{p.desc}</div>
											<div style={footerStyle}>
												<div style={{ marginBottom: "6px", fontWeight: "bold", fontSize: "14px" }}>{p.price}</div>
												<button style={btnStyle}>プランを選ぶ</button>
											</div>
										</div>
									))}
								</div>
							</div>
							<div>
								<p className="mb-2 font-medium text-green-700 text-xs">✓ subgrid あり — タイトル・説明・ボタンが横一線に揃う</p>
								<div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "auto 1fr auto", gap: "8px" }}>
									{plans.map((p) => (
										<div
											key={p.label}
											style={{
												...cardStyle(p.color),
												display: "grid",
												gridRow: "span 3",
												gridTemplateRows: "subgrid",
											}}
										>
											<div style={headerStyle(p.color)}>{p.title}</div>
											<div style={bodyStyle}>{p.desc}</div>
											<div style={footerStyle}>
												<div style={{ marginBottom: "6px", fontWeight: "bold", fontSize: "14px" }}>{p.price}</div>
												<button style={btnStyle}>プランを選ぶ</button>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					);
				})()}
			</DemoBox>
			<CodeBlock
				code={`/* 親グリッドで列・行の両方を定義 */
.plan-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto; /* タイトル・説明・フッター */
  gap: 16px;
}

/* 各カードが3行をまたぎ、subgrid で親の行トラックを継承 */
.card {
  display: grid;
  grid-row: span 3;
  grid-template-rows: subgrid; /* ← 3行を親から引き継ぐ */
}

/* → 説明文の長さに関わらずボタン行が横一線に揃う */

/* ブラウザサポート: Chrome 117+ / Firefox 71+ / Safari 16+ */`}
			/>

			{/* place-items */}
			<DemoBox
				title="place-items / place-content — Grid での中央揃え"
				description="place-items は各セル内のアイテム揃え、place-content はグリッド全体の揃えを制御します。"
			>
				<div className="space-y-3">
					<div>
						<p className="mb-1 text-gray-500 text-xs">place-items: center（セル内で中央揃え）</p>
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "repeat(3, 1fr)",
								placeItems: "center",
								gap: "8px",
								height: "100px",
								background: "#e5e7eb",
							}}
						>
							{["A", "BB", "CCC"].map((c) => (
								<div key={c} style={{ background: "#6366f1", color: "white", padding: "6px 12px", fontSize: "13px" }}>
									{c}
								</div>
							))}
						</div>
					</div>
				</div>
			</DemoBox>
			<CodeBlock
				code={`/* セル内のアイテムを中央に */
.grid {
  display: grid;
  place-items: center; /* align-items + justify-items の省略形 */
}

/* グリッド全体を中央に（グリッドがコンテナより小さい時） */
.grid {
  display: grid;
  place-content: center; /* align-content + justify-content の省略形 */
}`}
			/>

			{/* まとめ */}
			<div className="overflow-x-auto rounded-lg bg-white p-6 shadow-sm">
				<h3 className="mb-4 font-bold text-lg">Grid を使うべき判断チェックリスト</h3>
				<div className="space-y-2 text-sm">
					{[
						{ check: "行と列を同時にコントロールしたい", tag: "Grid" },
						{ check: "ページ全体の骨格レイアウト（header/sidebar/main/footer）", tag: "Grid" },
						{ check: "複数列のカードを均等に並べたい", tag: "Grid" },
						{ check: "要素を特定のグリッドセルに配置したい", tag: "Grid" },
						{ check: "ナビゲーションのリンクを横に並べたい", tag: "Flex" },
						{ check: "カード内部の要素を縦横に揃えたい", tag: "Flex" },
						{ check: "コンテンツの量に応じてレイアウトを変えたい（wrap）", tag: "Flex" },
					].map(({ check, tag }) => (
						<div key={check} className="flex items-center gap-3">
							<span className={`rounded px-2 py-0.5 text-xs font-semibold ${tag === "Grid" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"}`}>
								{tag}
							</span>
							<span className="text-gray-700">{check}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
