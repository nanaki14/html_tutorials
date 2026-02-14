import { CodeBlock } from "../components/CodeBlock";
import { DemoBox } from "../components/DemoBox";

export function ComparisonPage() {
	return (
		<div className="space-y-8">
			<h2 className="font-bold text-2xl text-gray-800">
				ブロック要素 vs インライン要素
			</h2>

			<DemoBox
				title="並び方の違い"
				description="ブロック要素は縦に積み重なり、インライン要素は横に並びます。"
			>
				<div className="mb-4">
					<p className="mb-1 font-semibold text-gray-700 text-sm">
						ブロック要素（div）:
					</p>
					<div style={{ background: "#93c5fd", padding: "8px" }}>A</div>
					<div style={{ background: "#fca5a5", padding: "8px" }}>B</div>
					<div style={{ background: "#86efac", padding: "8px" }}>C</div>
				</div>
				<div>
					<p className="mb-1 font-semibold text-gray-700 text-sm">
						インライン要素（span）:
					</p>
					<span style={{ background: "#93c5fd", padding: "4px" }}>A</span>
					<span style={{ background: "#fca5a5", padding: "4px" }}>B</span>
					<span style={{ background: "#86efac", padding: "4px" }}>C</span>
				</div>
			</DemoBox>

			<DemoBox
				title="width の比較"
				description="同じ width: 150px を指定した場合の違い"
			>
				<div className="mb-4">
					<p className="mb-1 font-semibold text-gray-700 text-sm">
						ブロック要素（div）— width: 150px が効く:
					</p>
					<div
						style={{
							background: "#93c5fd",
							padding: "8px",
							width: "150px",
						}}
					>
						div
					</div>
				</div>
				<div>
					<p className="mb-1 font-semibold text-gray-700 text-sm">
						インライン要素（span）— width: 150px は無視される:
					</p>
					<span
						style={{
							background: "#fca5a5",
							padding: "4px",
							width: "150px",
						}}
					>
						span
					</span>
				</div>
			</DemoBox>
			<CodeBlock
				code={`<!-- ブロック: width が効く -->
<div style="width: 150px;">div</div>

<!-- インライン: width は無視される -->
<span style="width: 150px;">span</span>`}
			/>

			<DemoBox
				title="height の比較"
				description="同じ height: 60px を指定した場合の違い"
			>
				<div className="mb-4">
					<p className="mb-1 font-semibold text-gray-700 text-sm">
						ブロック要素（div）— height: 60px が効く:
					</p>
					<div
						style={{
							background: "#93c5fd",
							padding: "8px",
							height: "60px",
						}}
					>
						div
					</div>
				</div>
				<div>
					<p className="mb-1 font-semibold text-gray-700 text-sm">
						インライン要素（span）— height: 60px は無視される:
					</p>
					<span
						style={{
							background: "#fca5a5",
							padding: "4px",
							height: "60px",
						}}
					>
						span
					</span>
				</div>
			</DemoBox>
			<CodeBlock
				code={`<!-- ブロック: height が効く -->
<div style="height: 60px;">div</div>

<!-- インライン: height は無視される -->
<span style="height: 60px;">span</span>`}
			/>

			<DemoBox
				title="margin 上下の比較"
				description="margin-top: 30px, margin-bottom: 30px を指定した場合の違い"
			>
				<div className="mb-4">
					<p className="mb-1 font-semibold text-gray-700 text-sm">
						ブロック要素（div）— 上下 margin が効く:
					</p>
					<div style={{ background: "#e5e7eb", padding: "4px" }}>
						<div style={{ background: "#f9fafb", padding: "4px" }}>前</div>
						<div
							style={{
								background: "#93c5fd",
								padding: "8px",
								marginTop: "30px",
								marginBottom: "30px",
							}}
						>
							margin-top: 30px, margin-bottom: 30px
						</div>
						<div style={{ background: "#f9fafb", padding: "4px" }}>後</div>
					</div>
				</div>
				<div>
					<p className="mb-1 font-semibold text-gray-700 text-sm">
						インライン要素（span）— 上下 margin は効かない:
					</p>
					<div style={{ background: "#e5e7eb", padding: "4px" }}>
						前
						<span
							style={{
								background: "#fca5a5",
								marginTop: "30px",
								marginBottom: "30px",
							}}
						>
							margin-top: 30px, margin-bottom: 30px
						</span>
						後
					</div>
				</div>
			</DemoBox>
			<CodeBlock
				code={`<!-- ブロック: 上下 margin が効く -->
<div style="margin-top: 30px; margin-bottom: 30px;">
  margin-top: 30px, margin-bottom: 30px
</div>

<!-- インライン: 上下 margin は効かない -->
前<span style="margin-top: 30px; margin-bottom: 30px;">
  margin-top: 30px, margin-bottom: 30px
</span>後`}
			/>

			<div className="overflow-x-auto rounded-lg bg-white p-6 shadow-sm">
				<h3 className="mb-4 font-bold text-lg">まとめ表</h3>
				<table className="w-full border-collapse text-sm">
					<thead>
						<tr className="border-b-2 border-gray-200">
							<th className="px-4 py-2 text-left">プロパティ</th>
							<th className="px-4 py-2 text-center">ブロック要素</th>
							<th className="px-4 py-2 text-center">インライン要素</th>
						</tr>
					</thead>
					<tbody>
						<tr className="border-b border-gray-100">
							<td className="px-4 py-2">横幅</td>
							<td className="px-4 py-2 text-center">親要素の100%</td>
							<td className="px-4 py-2 text-center">コンテンツ幅</td>
						</tr>
						<tr className="border-b border-gray-100">
							<td className="px-4 py-2">改行</td>
							<td className="px-4 py-2 text-center">前後に入る</td>
							<td className="px-4 py-2 text-center">入らない</td>
						</tr>
						<tr className="border-b border-gray-100">
							<td className="px-4 py-2">width / height</td>
							<td className="px-4 py-2 text-center text-green-600">効く</td>
							<td className="px-4 py-2 text-center text-red-600">効かない</td>
						</tr>
						<tr className="border-b border-gray-100">
							<td className="px-4 py-2">margin 上下</td>
							<td className="px-4 py-2 text-center text-green-600">効く</td>
							<td className="px-4 py-2 text-center text-red-600">効かない</td>
						</tr>
						<tr className="border-b border-gray-100">
							<td className="px-4 py-2">margin 左右</td>
							<td className="px-4 py-2 text-center text-green-600">効く</td>
							<td className="px-4 py-2 text-center text-green-600">効く</td>
						</tr>
						<tr className="border-b border-gray-100">
							<td className="px-4 py-2">padding 上下</td>
							<td className="px-4 py-2 text-center text-green-600">
								効く（レイアウトに影響）
							</td>
							<td className="px-4 py-2 text-center text-yellow-600">
								見た目は効くがレイアウトに影響しない
							</td>
						</tr>
						<tr>
							<td className="px-4 py-2">padding 左右</td>
							<td className="px-4 py-2 text-center text-green-600">効く</td>
							<td className="px-4 py-2 text-center text-green-600">効く</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
