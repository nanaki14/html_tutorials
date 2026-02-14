import { CodeBlock } from "../components/CodeBlock";
import { DemoBox } from "../components/DemoBox";

export function InlineBlockPage() {
	return (
		<div className="space-y-8">
			<h2 className="font-bold text-2xl text-gray-800">
				display: inline-block
			</h2>

			<div className="rounded-lg bg-indigo-50 p-6">
				<p className="text-indigo-800">
					<code className="rounded bg-indigo-100 px-1 font-mono">
						display: inline-block
					</code>
					は、インライン要素のように横に並びつつ、ブロック要素のように width /
					height / margin が効く表示モデルです。
				</p>
			</div>

			<DemoBox
				title="inline-block の基本"
				description="横に並びながら、width と height が効きます。"
			>
				<span
					style={{
						display: "inline-block",
						width: "120px",
						height: "60px",
						background: "#93c5fd",
						padding: "8px",
						margin: "4px",
						verticalAlign: "top",
					}}
				>
					ボックス 1
				</span>
				<span
					style={{
						display: "inline-block",
						width: "120px",
						height: "60px",
						background: "#fca5a5",
						padding: "8px",
						margin: "4px",
						verticalAlign: "top",
					}}
				>
					ボックス 2
				</span>
				<span
					style={{
						display: "inline-block",
						width: "120px",
						height: "60px",
						background: "#86efac",
						padding: "8px",
						margin: "4px",
						verticalAlign: "top",
					}}
				>
					ボックス 3
				</span>
			</DemoBox>
			<CodeBlock
				code={`<span style="display: inline-block; width: 120px; height: 60px;">
  ボックス 1
</span>
<span style="display: inline-block; width: 120px; height: 60px;">
  ボックス 2
</span>
<span style="display: inline-block; width: 120px; height: 60px;">
  ボックス 3
</span>`}
			/>

			<DemoBox
				title="3つの display を比較"
				description="同じ span 要素に width: 150px, height: 50px, margin: 10px を指定"
			>
				<div className="mb-4">
					<p className="mb-1 font-semibold text-gray-700 text-sm">
						display: inline（デフォルト）:
					</p>
					<div style={{ background: "#e5e7eb", padding: "4px" }}>
						前
						<span
							style={{
								display: "inline",
								width: "150px",
								height: "50px",
								margin: "10px",
								background: "#93c5fd",
							}}
						>
							inline
						</span>
						後
					</div>
					<p className="mt-1 text-gray-500 text-xs">
						→ width, height, 上下margin は無視
					</p>
				</div>
				<div className="mb-4">
					<p className="mb-1 font-semibold text-gray-700 text-sm">
						display: inline-block:
					</p>
					<div style={{ background: "#e5e7eb", padding: "4px" }}>
						前
						<span
							style={{
								display: "inline-block",
								width: "150px",
								height: "50px",
								margin: "10px",
								background: "#fca5a5",
								verticalAlign: "top",
							}}
						>
							inline-block
						</span>
						後
					</div>
					<p className="mt-1 text-gray-500 text-xs">
						→ すべてのプロパティが効き、横に並ぶ
					</p>
				</div>
				<div>
					<p className="mb-1 font-semibold text-gray-700 text-sm">
						display: block:
					</p>
					<div style={{ background: "#e5e7eb", padding: "4px" }}>
						前
						<span
							style={{
								display: "block",
								width: "150px",
								height: "50px",
								margin: "10px",
								background: "#86efac",
							}}
						>
							block
						</span>
						後
					</div>
					<p className="mt-1 text-gray-500 text-xs">
						→ すべてのプロパティが効くが、前後に改行が入る
					</p>
				</div>
			</DemoBox>
			<CodeBlock
				code={`<!-- inline: width, height, 上下margin 無視 -->
<span style="display: inline; width: 150px; height: 50px; margin: 10px;">
  inline
</span>

<!-- inline-block: すべて効く＋横並び -->
<span style="display: inline-block; width: 150px; height: 50px; margin: 10px;">
  inline-block
</span>

<!-- block: すべて効く＋改行あり -->
<span style="display: block; width: 150px; height: 50px; margin: 10px;">
  block
</span>`}
			/>

			<div className="overflow-x-auto rounded-lg bg-white p-6 shadow-sm">
				<h3 className="mb-4 font-bold text-lg">3つの display の比較</h3>
				<table className="w-full border-collapse text-sm">
					<thead>
						<tr className="border-b-2 border-gray-200">
							<th className="px-4 py-2 text-left">特性</th>
							<th className="px-4 py-2 text-center">block</th>
							<th className="px-4 py-2 text-center">inline</th>
							<th className="px-4 py-2 text-center">inline-block</th>
						</tr>
					</thead>
					<tbody>
						<tr className="border-b border-gray-100">
							<td className="px-4 py-2">横幅</td>
							<td className="px-4 py-2 text-center">親要素の100%</td>
							<td className="px-4 py-2 text-center">コンテンツ幅</td>
							<td className="px-4 py-2 text-center">コンテンツ幅</td>
						</tr>
						<tr className="border-b border-gray-100">
							<td className="px-4 py-2">改行</td>
							<td className="px-4 py-2 text-center">あり</td>
							<td className="px-4 py-2 text-center">なし</td>
							<td className="px-4 py-2 text-center">なし</td>
						</tr>
						<tr className="border-b border-gray-100">
							<td className="px-4 py-2">width / height</td>
							<td className="px-4 py-2 text-center text-green-600">効く</td>
							<td className="px-4 py-2 text-center text-red-600">効かない</td>
							<td className="px-4 py-2 text-center text-green-600">効く</td>
						</tr>
						<tr className="border-b border-gray-100">
							<td className="px-4 py-2">margin 上下</td>
							<td className="px-4 py-2 text-center text-green-600">効く</td>
							<td className="px-4 py-2 text-center text-red-600">効かない</td>
							<td className="px-4 py-2 text-center text-green-600">効く</td>
						</tr>
						<tr>
							<td className="px-4 py-2">margin 左右</td>
							<td className="px-4 py-2 text-center text-green-600">効く</td>
							<td className="px-4 py-2 text-center text-green-600">効く</td>
							<td className="px-4 py-2 text-center text-green-600">効く</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
