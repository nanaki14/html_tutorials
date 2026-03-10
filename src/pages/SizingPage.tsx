import { CodeBlock } from "../components/CodeBlock";
import { DemoBox } from "../components/DemoBox";

export function SizingPage() {
	return (
		<div className="space-y-8">
			<h2 className="font-bold text-2xl text-gray-800">
				width / height の計算基準
			</h2>

			<div className="rounded-lg bg-blue-50 p-6">
				<p className="text-blue-800">
					<code className="rounded bg-blue-100 px-1 font-mono">width</code> と
					<code className="rounded bg-blue-100 px-1 font-mono">height</code>{" "}
					は、指定する単位によって「何を基準に計算されるか」が異なります。 特に{" "}
					<code className="rounded bg-blue-100 px-1 font-mono">%</code>{" "}
					指定時の基準は重要です。
				</p>
			</div>

			{/* ---- width の基準 ---- */}
			<DemoBox
				title="width: % は親要素の content-box 幅が基準"
				description="width に % を指定すると、親要素のコンテンツ領域の幅に対する割合になります。"
			>
				<div
					style={{
						width: "400px",
						background: "#e5e7eb",
						padding: "16px",
						border: "2px solid #9ca3af",
					}}
				>
					<p className="mb-2 text-gray-600 text-xs">
						親: width: 400px / padding: 16px
					</p>
					<div style={{ width: "50%", background: "#93c5fd", padding: "8px" }}>
						width: 50% → 200px
					</div>
					<div
						style={{
							width: "100%",
							background: "#fca5a5",
							padding: "8px",
							marginTop: "4px",
						}}
					>
						width: 100% → 400px
					</div>
				</div>
			</DemoBox>
			<CodeBlock
				code={`<!-- 親の content-box 幅 (400px) が基準 -->
<div style="width: 400px; padding: 16px;">
  <div style="width: 50%;">200px になる</div>
  <div style="width: 100%;">400px になる</div>
</div>
<!-- padding 16px は % 計算に含まれない -->`}
			/>

			{/* ---- height の基準 ---- */}
			<DemoBox
				title="height: % は親要素の高さが明示されている場合のみ有効"
				description="height に % を指定するには、親要素に明示的な height が必要です。親の height が auto の場合、% は無視されます。"
			>
				<div className="flex gap-4">
					<div>
						<p className="mb-1 font-semibold text-gray-700 text-xs">
							親に height: 200px を指定:
						</p>
						<div
							style={{
								width: "200px",
								height: "200px",
								background: "#e5e7eb",
								border: "2px solid #9ca3af",
							}}
						>
							<div
								style={{
									width: "100%",
									height: "50%",
									background: "#93c5fd",
									padding: "8px",
								}}
							>
								height: 50% → 100px
							</div>
						</div>
					</div>
					<div>
						<p className="mb-1 font-semibold text-gray-700 text-xs">
							親に height 未指定（auto）:
						</p>
						<div
							style={{
								width: "200px",
								background: "#e5e7eb",
								border: "2px solid #9ca3af",
							}}
						>
							<div
								style={{
									width: "100%",
									height: "50%",
									background: "#fca5a5",
									padding: "8px",
								}}
							>
								height: 50% → 効かない
							</div>
						</div>
					</div>
				</div>
			</DemoBox>
			<CodeBlock
				code={`<!-- 親に明示的な height がある → % が効く -->
<div style="height: 200px;">
  <div style="height: 50%;">100px になる</div>
</div>

<!-- 親の height が auto → % は無視される -->
<div><!-- height 未指定 = auto -->
  <div style="height: 50%;">効かない</div>
</div>`}
			/>

			{/* ---- box-sizing ---- */}
			<DemoBox
				title="box-sizing による width の解釈の違い"
				description="content-box（初期値）では padding と border が width に加算されますが、border-box では width に含まれます。"
			>
				<div className="flex gap-4">
					<div>
						<p className="mb-1 font-semibold text-gray-700 text-xs">
							box-sizing: content-box（初期値）
						</p>
						<div
							style={{
								boxSizing: "content-box",
								width: "200px",
								padding: "20px",
								border: "5px solid #6366f1",
								background: "#93c5fd",
							}}
						>
							width: 200px
							<br />
							<span className="text-xs">
								実際の幅: 200 + 20×2 + 5×2 = 250px
							</span>
						</div>
					</div>
					<div>
						<p className="mb-1 font-semibold text-gray-700 text-xs">
							box-sizing: border-box
						</p>
						<div
							style={{
								boxSizing: "border-box",
								width: "200px",
								padding: "20px",
								border: "5px solid #6366f1",
								background: "#fca5a5",
							}}
						>
							width: 200px
							<br />
							<span className="text-xs">
								実際の幅: 200px（padding, border 含む）
							</span>
						</div>
					</div>
				</div>
			</DemoBox>
			<CodeBlock
				code={`/* content-box: width はコンテンツ領域のみ */
div { box-sizing: content-box; width: 200px; padding: 20px; border: 5px solid; }
/* → 実際の描画幅 = 200 + 20*2 + 5*2 = 250px */

/* border-box: width は border + padding + コンテンツ */
div { box-sizing: border-box; width: 200px; padding: 20px; border: 5px solid; }
/* → 実際の描画幅 = 200px（コンテンツ = 200 - 20*2 - 5*2 = 150px）*/`}
			/>

			{/* ---- 各単位の基準まとめ ---- */}
			<DemoBox
				title="width で使える単位と計算基準"
				description="主な単位と、それぞれ何を基準に計算されるか。"
			>
				<div
					style={{
						width: "500px",
						background: "#e5e7eb",
						padding: "12px",
						border: "2px solid #9ca3af",
					}}
				>
					<p className="mb-2 text-gray-600 text-xs">親: width: 500px</p>
					<div
						style={{
							width: "250px",
							background: "#93c5fd",
							padding: "6px",
							marginBottom: "4px",
						}}
					>
						width: 250px（絶対値）
					</div>
					<div
						style={{
							width: "50%",
							background: "#fca5a5",
							padding: "6px",
							marginBottom: "4px",
						}}
					>
						width: 50%（親の幅 × 0.5 = 250px）
					</div>
					<div
						style={{
							width: "50vw",
							background: "#86efac",
							padding: "6px",
							marginBottom: "4px",
						}}
					>
						width: 50vw（ビューポート幅 × 0.5）
					</div>
					<div
						style={{
							width: "20em",
							background: "#fde68a",
							padding: "6px",
							marginBottom: "4px",
						}}
					>
						width: 20em（自身のフォントサイズ × 20）
					</div>
					<div
						style={{
							width: "20rem",
							background: "#c4b5fd",
							padding: "6px",
						}}
					>
						width: 20rem（ルート要素のフォントサイズ × 20）
					</div>
				</div>
			</DemoBox>

			{/* ---- まとめ表 ---- */}
			<div className="overflow-x-auto rounded-lg bg-white p-6 shadow-sm">
				<h3 className="mb-4 font-bold text-lg">
					width / height の % 基準まとめ
				</h3>
				<table className="w-full border-collapse text-sm">
					<thead>
						<tr className="border-b-2 border-gray-200">
							<th className="px-4 py-2 text-left">プロパティ</th>
							<th className="px-4 py-2 text-left">% の基準</th>
							<th className="px-4 py-2 text-left">注意点</th>
						</tr>
					</thead>
					<tbody>
						<tr className="border-b border-gray-100">
							<td className="px-4 py-2 font-mono">width</td>
							<td className="px-4 py-2">
								親要素の <strong>content-box 幅</strong>
							</td>
							<td className="px-4 py-2">親の幅が確定していれば常に有効</td>
						</tr>
						<tr className="border-b border-gray-100">
							<td className="px-4 py-2 font-mono">height</td>
							<td className="px-4 py-2">
								親要素の <strong>content-box 高さ</strong>
							</td>
							<td className="px-4 py-2 text-red-600">
								親に明示的な height が必要（auto だと無視）
							</td>
						</tr>
						<tr className="border-b border-gray-100">
							<td className="px-4 py-2 font-mono">min-width / max-width</td>
							<td className="px-4 py-2">親要素の content-box 幅</td>
							<td className="px-4 py-2">width と同じ基準</td>
						</tr>
						<tr>
							<td className="px-4 py-2 font-mono">min-height / max-height</td>
							<td className="px-4 py-2">親要素の content-box 高さ</td>
							<td className="px-4 py-2 text-red-600">
								height と同じく、親に高さの指定が必要
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
