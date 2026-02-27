import { CodeBlock } from "../components/CodeBlock";
import { DemoBox } from "../components/DemoBox";

export function MarginPaddingPercentPage() {
	return (
		<div className="space-y-8">
			<h2 className="font-bold text-2xl text-gray-800">
				margin / padding の % 計算
			</h2>

			<div className="rounded-lg bg-emerald-50 p-6">
				<p className="text-emerald-800">
					<code className="rounded bg-emerald-100 px-1 font-mono">margin</code>{" "}
					と{" "}
					<code className="rounded bg-emerald-100 px-1 font-mono">padding</code>{" "}
					の % は、
					<strong>上下左右すべて「親要素の幅（width）」</strong>
					を基準に計算されます。高さではありません。
				</p>
			</div>

			{/* ---- 基本 ---- */}
			<DemoBox
				title="margin の % — すべて親の幅が基準"
				description="margin-top, margin-bottom も含め、% は親の幅に対して計算されます。"
			>
				<div
					style={{
						width: "400px",
						background: "#e5e7eb",
						border: "2px solid #9ca3af",
						padding: "4px",
					}}
				>
					<p className="mb-1 text-gray-600 text-xs">親: width: 400px</p>
					<div
						style={{
							background: "#93c5fd",
							padding: "8px",
							marginLeft: "10%",
						}}
					>
						margin-left: 10% → 40px
					</div>
					<div
						style={{
							background: "#fca5a5",
							padding: "8px",
							marginTop: "10%",
						}}
					>
						margin-top: 10% → 40px（高さではなく幅の10%）
					</div>
				</div>
			</DemoBox>
			<CodeBlock
				code={`<!-- 親: width: 400px -->
<div style="width: 400px;">
  <div style="margin-left: 10%;">
    → 400px × 10% = 40px（左マージン）
  </div>
  <div style="margin-top: 10%;">
    → 400px × 10% = 40px（上マージンも幅が基準！）
  </div>
</div>`}
			/>

			{/* ---- padding ---- */}
			<DemoBox
				title="padding の % — こちらも親の幅が基準"
				description="padding-top, padding-bottom の % も親の幅に対して計算されます。"
			>
				<div
					style={{
						width: "400px",
						background: "#e5e7eb",
						border: "2px solid #9ca3af",
						padding: "4px",
					}}
				>
					<p className="mb-1 text-gray-600 text-xs">親: width: 400px</p>
					<div
						style={{
							background: "#86efac",
							paddingLeft: "10%",
							paddingTop: "10%",
						}}
					>
						<span className="text-sm">
							padding-left: 10% → 40px
							<br />
							padding-top: 10% → 40px（幅が基準）
						</span>
					</div>
				</div>
			</DemoBox>
			<CodeBlock
				code={`<div style="width: 400px;">
  <div style="padding-left: 10%; padding-top: 10%;">
    padding-left: 400px × 10% = 40px
    padding-top:  400px × 10% = 40px ← 高さではなく幅！
  </div>
</div>`}
			/>

			{/* ---- なぜ幅基準なのか ---- */}
			<div className="rounded-lg bg-amber-50 p-6 shadow-sm">
				<h3 className="mb-3 font-bold text-amber-900 text-lg">
					なぜ上下も「幅」が基準なのか？
				</h3>
				<ul className="space-y-2 text-amber-800 text-sm">
					<li>
						CSS の仕様上、margin / padding の % はすべて{" "}
						<strong>containing block の inline-size（通常は幅）</strong>
						が基準と定められています。
					</li>
					<li>
						これにより、上下左右で同じ % を指定すると
						<strong>正方形のスペース</strong>
						が作れます。
					</li>
					<li>
						もし上下が親の高さ基準だと、親の高さが子の margin/padding
						に依存し、その子の margin/padding が親の高さに依存する…という
						<strong>循環参照</strong>が発生してしまいます。
					</li>
				</ul>
			</div>

			{/* ---- アスペクト比トリック ---- */}
			<DemoBox
				title="応用: padding-top でアスペクト比を維持"
				description="padding-top の % が幅基準であることを利用して、幅に連動した高さを作れます（古典的テクニック）。"
			>
				<div style={{ width: "300px" }}>
					<p className="mb-1 text-gray-600 text-xs">親: width: 300px</p>
					<div
						style={{
							width: "100%",
							paddingTop: "56.25%",
							background: "#c4b5fd",
							position: "relative",
							border: "2px solid #7c3aed",
						}}
					>
						<span
							style={{
								position: "absolute",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)",
								fontSize: "14px",
								color: "#4c1d95",
								whiteSpace: "nowrap",
							}}
						>
							16:9 (padding-top: 56.25%)
						</span>
					</div>
				</div>
			</DemoBox>
			<CodeBlock
				code={`/* 16:9 のアスペクト比を padding-top で実現 */
/* 9 / 16 = 0.5625 = 56.25% */
.aspect-16-9 {
  width: 100%;
  padding-top: 56.25%; /* 幅の 56.25% = 高さ */
  position: relative;
}

/* 現在は aspect-ratio プロパティで簡潔に書ける */
.aspect-16-9-modern {
  aspect-ratio: 16 / 9;
}`}
			/>

			{/* ---- 親の幅が変わると ---- */}
			<DemoBox
				title="親の幅が変わると margin/padding も変わる"
				description="レスポンシブで親の幅が変化すると、% 指定の margin/padding も連動して変化します。"
			>
				<div className="flex gap-4">
					<div
						style={{
							width: "300px",
							background: "#e5e7eb",
							border: "2px solid #9ca3af",
							padding: "4px",
						}}
					>
						<p className="mb-1 text-gray-600 text-xs">親: 300px</p>
						<div
							style={{
								background: "#93c5fd",
								padding: "5%",
							}}
						>
							padding: 5% → 15px
						</div>
					</div>
					<div
						style={{
							width: "200px",
							background: "#e5e7eb",
							border: "2px solid #9ca3af",
							padding: "4px",
						}}
					>
						<p className="mb-1 text-gray-600 text-xs">親: 200px</p>
						<div
							style={{
								background: "#fca5a5",
								padding: "5%",
							}}
						>
							padding: 5% → 10px
						</div>
					</div>
				</div>
			</DemoBox>

			{/* ---- まとめ表 ---- */}
			<div className="overflow-x-auto rounded-lg bg-white p-6 shadow-sm">
				<h3 className="mb-4 font-bold text-lg">
					margin / padding の % 基準まとめ
				</h3>
				<table className="w-full border-collapse text-sm">
					<thead>
						<tr className="border-b-2 border-gray-200">
							<th className="px-4 py-2 text-left">プロパティ</th>
							<th className="px-4 py-2 text-left">% の基準</th>
							<th className="px-4 py-2 text-left">備考</th>
						</tr>
					</thead>
					<tbody>
						<tr className="border-b border-gray-100">
							<td className="px-4 py-2 font-mono">margin-left / right</td>
							<td className="px-4 py-2">親の幅</td>
							<td className="px-4 py-2">直感的</td>
						</tr>
						<tr className="border-b border-gray-100">
							<td className="px-4 py-2 font-mono">margin-top / bottom</td>
							<td className="px-4 py-2 font-bold text-red-600">親の幅</td>
							<td className="px-4 py-2">高さではない。循環参照を避けるため</td>
						</tr>
						<tr className="border-b border-gray-100">
							<td className="px-4 py-2 font-mono">padding-left / right</td>
							<td className="px-4 py-2">親の幅</td>
							<td className="px-4 py-2">直感的</td>
						</tr>
						<tr>
							<td className="px-4 py-2 font-mono">padding-top / bottom</td>
							<td className="px-4 py-2 font-bold text-red-600">親の幅</td>
							<td className="px-4 py-2">
								高さではない。アスペクト比テクニックに利用可能
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
