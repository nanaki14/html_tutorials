import { CodeBlock } from "../components/CodeBlock";
import { DemoBox } from "../components/DemoBox";

export function FlexPage() {
	return (
		<div className="space-y-8">
			<h2 className="font-bold text-2xl text-gray-800">Flexbox</h2>

			<div className="rounded-lg bg-blue-50 p-6">
				<p className="text-blue-800">
					<code className="rounded bg-blue-100 px-1 font-mono">
						display: flex
					</code>{" "}
					を指定した要素（<strong>フレックスコンテナ</strong>
					）の直接の子（<strong>フレックスアイテム</strong>
					）が横・縦に自動整列されます。
					1次元のレイアウト（行 OR 列）に最適です。
				</p>
			</div>

			{/* 基本の flex */}
			<DemoBox
				title="display: flex — 子要素を横並びに"
				description="flex を指定すると子要素が横方向（row）に並びます。デフォルトは flex-direction: row です。"
			>
				<div className="space-y-4">
					<div>
						<p className="mb-1 text-gray-500 text-xs">通常（block）:</p>
						<div style={{ background: "#e5e7eb", padding: "8px" }}>
							<div style={{ background: "#93c5fd", padding: "8px", marginBottom: "4px" }}>A</div>
							<div style={{ background: "#fca5a5", padding: "8px", marginBottom: "4px" }}>B</div>
							<div style={{ background: "#86efac", padding: "8px" }}>C</div>
						</div>
					</div>
					<div>
						<p className="mb-1 text-gray-500 text-xs">display: flex（横並び）:</p>
						<div style={{ display: "flex", gap: "8px", background: "#e5e7eb", padding: "8px" }}>
							<div style={{ background: "#93c5fd", padding: "8px" }}>A</div>
							<div style={{ background: "#fca5a5", padding: "8px" }}>B</div>
							<div style={{ background: "#86efac", padding: "8px" }}>C</div>
						</div>
					</div>
				</div>
			</DemoBox>
			<CodeBlock
				code={`.container {
  display: flex;
  gap: 8px; /* アイテム間のスペース */
}`}
			/>

			{/* flex-direction */}
			<DemoBox
				title="flex-direction — 並ぶ方向"
				description="row（横）・column（縦）・row-reverse・column-reverse の4種類。"
			>
				<div className="grid grid-cols-2 gap-4">
					{[
						{ dir: "row", label: "row（デフォルト）" },
						{ dir: "row-reverse", label: "row-reverse" },
						{ dir: "column", label: "column" },
						{ dir: "column-reverse", label: "column-reverse" },
					].map(({ dir, label }) => (
						<div key={dir}>
							<p className="mb-1 font-semibold text-gray-600 text-xs">{label}</p>
							<div
								style={{
									display: "flex",
									flexDirection: dir as React.CSSProperties["flexDirection"],
									gap: "4px",
									background: "#e5e7eb",
									padding: "8px",
								}}
							>
								{["A", "B", "C"].map((c) => (
									<div
										key={c}
										style={{
											background: c === "A" ? "#93c5fd" : c === "B" ? "#fca5a5" : "#86efac",
											padding: "6px 10px",
											fontSize: "12px",
										}}
									>
										{c}
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</DemoBox>
			<CodeBlock
				code={`.container {
  display: flex;
  flex-direction: row;           /* 横並び（デフォルト） */
  /* flex-direction: column;      縦並び */
  /* flex-direction: row-reverse; 横逆並び */
}`}
			/>

			{/* justify-content */}
			<DemoBox
				title="justify-content — 主軸方向の揃え"
				description="flex-direction: row の場合、横方向の配置を制御します。"
			>
				<div className="space-y-3">
					{[
						{ value: "flex-start", label: "flex-start（デフォルト）" },
						{ value: "center", label: "center" },
						{ value: "flex-end", label: "flex-end" },
						{ value: "space-between", label: "space-between" },
						{ value: "space-around", label: "space-around" },
						{ value: "space-evenly", label: "space-evenly" },
					].map(({ value, label }) => (
						<div key={value}>
							<p className="mb-1 font-mono text-gray-500 text-xs">{label}</p>
							<div
								style={{
									display: "flex",
									justifyContent: value as React.CSSProperties["justifyContent"],
									background: "#e5e7eb",
									padding: "6px",
									gap: "4px",
								}}
							>
								{["A", "B", "C"].map((c) => (
									<div
										key={c}
										style={{
											background: c === "A" ? "#93c5fd" : c === "B" ? "#fca5a5" : "#86efac",
											padding: "4px 12px",
											fontSize: "12px",
										}}
									>
										{c}
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</DemoBox>
			<CodeBlock
				code={`.container {
  display: flex;
  justify-content: flex-start;    /* 左寄せ（デフォルト） */
  /* justify-content: center;      中央 */
  /* justify-content: flex-end;    右寄せ */
  /* justify-content: space-between; 両端に配置、間隔均等 */
  /* justify-content: space-around;  各アイテムの両側に均等な余白 */
  /* justify-content: space-evenly;  全スペースを均等に分割 */
}`}
			/>

			{/* align-items */}
			<DemoBox
				title="align-items — 交差軸方向の揃え"
				description="flex-direction: row の場合、縦方向（交差軸）の揃えを制御します。"
			>
				<div className="grid grid-cols-3 gap-4">
					{[
						{ value: "stretch", label: "stretch（デフォルト）" },
						{ value: "flex-start", label: "flex-start" },
						{ value: "center", label: "center" },
						{ value: "flex-end", label: "flex-end" },
						{ value: "baseline", label: "baseline" },
					].map(({ value, label }) => (
						<div key={value}>
							<p className="mb-1 font-mono text-gray-500 text-xs">{label}</p>
							<div
								style={{
									display: "flex",
									alignItems: value as React.CSSProperties["alignItems"],
									height: "80px",
									background: "#e5e7eb",
									padding: "4px",
									gap: "4px",
								}}
							>
								<div style={{ background: "#93c5fd", padding: "4px 8px", fontSize: "11px" }}>A</div>
								<div style={{ background: "#fca5a5", padding: "12px 8px", fontSize: "11px" }}>B</div>
								<div style={{ background: "#86efac", padding: "4px 8px", fontSize: "11px" }}>C</div>
							</div>
						</div>
					))}
				</div>
			</DemoBox>
			<CodeBlock
				code={`.container {
  display: flex;
  align-items: stretch;     /* 交差軸方向に引き伸ばす（デフォルト） */
  /* align-items: flex-start; 交差軸の始点 */
  /* align-items: center;     交差軸の中央 */
  /* align-items: flex-end;   交差軸の終点 */
  /* align-items: baseline;   テキストのベースラインで揃える */
}`}
			/>

			{/* flex-wrap */}
			<DemoBox
				title="flex-wrap — 折り返し"
				description="nowrap（デフォルト）では1行に収めようと縮小します。wrap を指定すると折り返します。"
			>
				<div className="space-y-4">
					<div>
						<p className="mb-1 font-semibold text-gray-600 text-xs">
							flex-wrap: nowrap（デフォルト）— 縮んでも1行
						</p>
						<div style={{ display: "flex", flexWrap: "nowrap", gap: "4px", background: "#e5e7eb", padding: "8px" }}>
							{["Item1", "Item2", "Item3", "Item4", "Item5", "Item6"].map((item) => (
								<div key={item} style={{ background: "#93c5fd", padding: "8px", whiteSpace: "nowrap", fontSize: "12px" }}>
									{item}
								</div>
							))}
						</div>
					</div>
					<div>
						<p className="mb-1 font-semibold text-gray-600 text-xs">
							flex-wrap: wrap — はみ出したら折り返す
						</p>
						<div style={{ display: "flex", flexWrap: "wrap", gap: "4px", background: "#e5e7eb", padding: "8px" }}>
							{["Item1", "Item2", "Item3", "Item4", "Item5", "Item6"].map((item) => (
								<div key={item} style={{ background: "#fca5a5", padding: "8px", whiteSpace: "nowrap", fontSize: "12px" }}>
									{item}
								</div>
							))}
						</div>
					</div>
				</div>
			</DemoBox>
			<CodeBlock
				code={`.container {
  display: flex;
  flex-wrap: nowrap;  /* 折り返さない（デフォルト） */
  /* flex-wrap: wrap;  折り返す */
}`}
			/>

			{/* flex アイテムのプロパティ */}
			<DemoBox
				title="flex アイテムのプロパティ: flex-grow / flex-shrink / flex-basis"
				description="子要素に指定するプロパティ。flex ショートハンドでまとめて指定できます。"
			>
				<div className="space-y-4">
					<div>
						<p className="mb-1 text-gray-500 text-xs">flex-grow: 0 / 1 / 2（空き空間の分配比率）</p>
						<div style={{ display: "flex", gap: "4px", background: "#e5e7eb", padding: "8px" }}>
							<div style={{ flexGrow: 0, background: "#93c5fd", padding: "8px", fontSize: "12px" }}>grow:0</div>
							<div style={{ flexGrow: 1, background: "#fca5a5", padding: "8px", fontSize: "12px" }}>grow:1</div>
							<div style={{ flexGrow: 2, background: "#86efac", padding: "8px", fontSize: "12px" }}>grow:2</div>
						</div>
					</div>
					<div>
						<p className="mb-1 text-gray-500 text-xs">flex: 1（全アイテムが均等に幅を占有）</p>
						<div style={{ display: "flex", gap: "4px", background: "#e5e7eb", padding: "8px" }}>
							{["A", "B", "C"].map((c) => (
								<div key={c} style={{ flex: 1, background: c === "A" ? "#93c5fd" : c === "B" ? "#fca5a5" : "#86efac", padding: "8px", textAlign: "center", fontSize: "12px" }}>
									{c}
								</div>
							))}
						</div>
					</div>
				</div>
			</DemoBox>
			<CodeBlock
				code={`/* flex ショートハンド: flex-grow flex-shrink flex-basis */
.item { flex: 1; }           /* flex: 1 1 0% の省略形 → 均等分割 */
.item { flex: 0 0 200px; }   /* 固定幅 200px（伸縮なし） */
.item { flex: 2; }           /* 他の flex:1 アイテムの2倍の幅 */

/* 個別指定 */
.item {
  flex-grow: 1;    /* 余った空間を取る比率 */
  flex-shrink: 1;  /* 縮む比率（0で縮まない） */
  flex-basis: 0%;  /* 基本サイズ（auto で content 幅） */
}`}
			/>

			{/* 実用パターン */}
			<div className="rounded-lg bg-white p-6 shadow-sm">
				<h3 className="mb-4 font-bold text-lg">よく使う実用パターン</h3>
				<div className="space-y-6">
					<div>
						<p className="mb-2 font-semibold text-gray-700 text-sm">完全中央揃え</p>
						<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px", background: "#e5e7eb", borderRadius: "8px" }}>
							<div style={{ background: "#6366f1", color: "white", padding: "12px 24px", borderRadius: "6px" }}>中央</div>
						</div>
						<CodeBlock code={`.center {
  display: flex;
  justify-content: center;
  align-items: center;
}`} />
					</div>
					<div>
						<p className="mb-2 font-semibold text-gray-700 text-sm">ナビゲーションバー（ロゴ左・リンク右）</p>
						<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#1e1b4b", color: "white", padding: "12px 16px", borderRadius: "8px" }}>
							<div style={{ fontWeight: "bold" }}>Logo</div>
							<div style={{ display: "flex", gap: "16px", fontSize: "14px" }}>
								<span>Home</span>
								<span>About</span>
								<span>Contact</span>
							</div>
						</div>
						<CodeBlock code={`.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`} />
					</div>
					<div>
						<p className="mb-2 font-semibold text-gray-700 text-sm">サイドバー + メインコンテンツ</p>
						<div style={{ display: "flex", gap: "8px", background: "#e5e7eb", padding: "8px", borderRadius: "8px" }}>
							<div style={{ flex: "0 0 120px", background: "#c4b5fd", padding: "8px", fontSize: "12px" }}>
								sidebar<br />flex: 0 0 120px
							</div>
							<div style={{ flex: 1, background: "#93c5fd", padding: "8px", fontSize: "12px" }}>
								main content<br />flex: 1
							</div>
						</div>
						<CodeBlock code={`.layout {
  display: flex;
  gap: 16px;
}
.sidebar { flex: 0 0 240px; } /* 固定幅 */
.main    { flex: 1; }          /* 残りを全部 */`} />
					</div>
				</div>
			</div>
		</div>
	);
}
