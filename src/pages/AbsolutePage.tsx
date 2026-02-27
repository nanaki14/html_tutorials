import { CodeBlock } from "../components/CodeBlock";
import { DemoBox } from "../components/DemoBox";

export function AbsolutePage() {
	return (
		<div className="space-y-8">
			<h2 className="font-bold text-2xl text-gray-800">
				position: absolute とブロック化
			</h2>

			<div className="rounded-lg bg-rose-50 p-6">
				<p className="text-rose-800">
					<code className="rounded bg-rose-100 px-1 font-mono">
						position: absolute
					</code>{" "}
					を指定した要素は、元の display に関係なく
					<strong>ブロックレベルの振る舞い</strong>
					になります。さらに、top / right / bottom / left
					の組み合わせで幅と高さを暗黙的に決定できます。
				</p>
			</div>

			{/* ---- インラインがブロック化 ---- */}
			<DemoBox
				title="absolute にするとインライン要素がブロック化する"
				description="span はインライン要素ですが、position: absolute を付けると width / height が効くようになります。"
			>
				<div
					style={{
						position: "relative",
						height: "120px",
						background: "#e5e7eb",
					}}
				>
					<span
						style={{
							position: "absolute",
							top: "10px",
							left: "10px",
							width: "200px",
							height: "40px",
							background: "#93c5fd",
							padding: "8px",
						}}
					>
						span + absolute (width/height が効く)
					</span>
					<span
						style={{
							position: "static",
							width: "200px",
							height: "40px",
							background: "#fca5a5",
							padding: "4px",
						}}
					>
						span + static (width/height 効かない)
					</span>
				</div>
			</DemoBox>
			<CodeBlock
				code={`<!-- absolute の span: width / height が効く -->
<span style="position: absolute; width: 200px; height: 40px;">
  ブロック化される
</span>

<!-- 通常の span: width / height は無視される -->
<span style="width: 200px; height: 40px;">
  効かない
</span>`}
			/>

			{/* ---- top + bottom で height ---- */}
			<DemoBox
				title="top + bottom で高さを決定する"
				description="width / height を指定しなくても、top と bottom を同時に指定すれば高さが決まります。"
			>
				<div
					style={{
						position: "relative",
						height: "200px",
						background: "#e5e7eb",
						border: "2px solid #9ca3af",
					}}
				>
					<p className="text-gray-600 text-xs" style={{ padding: "4px" }}>
						親: position: relative / height: 200px
					</p>
					<div
						style={{
							position: "absolute",
							top: "30px",
							bottom: "30px",
							left: "20px",
							width: "200px",
							background: "#93c5fd",
							padding: "8px",
							border: "2px solid #3b82f6",
						}}
					>
						top: 30px / bottom: 30px
						<br />
						<span className="text-xs">→ height = 200 - 30 - 30 = 140px</span>
					</div>
				</div>
			</DemoBox>
			<CodeBlock
				code={`<div style="position: relative; height: 200px;">
  <div style="position: absolute; top: 30px; bottom: 30px; width: 200px;">
    <!-- height は指定していないが、top + bottom から自動計算 -->
    <!-- height = 200 - 30 - 30 = 140px -->
  </div>
</div>`}
			/>

			{/* ---- left + right で width ---- */}
			<DemoBox
				title="left + right で幅を決定する"
				description="left と right を同時に指定すると、width を指定しなくても幅が決まります。"
			>
				<div
					style={{
						position: "relative",
						height: "100px",
						background: "#e5e7eb",
						border: "2px solid #9ca3af",
					}}
				>
					<p className="text-gray-600 text-xs" style={{ padding: "4px" }}>
						親: position: relative / width は親のコンテンツ幅
					</p>
					<div
						style={{
							position: "absolute",
							left: "40px",
							right: "40px",
							top: "35px",
							background: "#fca5a5",
							padding: "8px",
							border: "2px solid #ef4444",
						}}
					>
						left: 40px / right: 40px → width = 親の幅 - 80px
					</div>
				</div>
			</DemoBox>
			<CodeBlock
				code={`<div style="position: relative;">
  <div style="position: absolute; left: 40px; right: 40px;">
    <!-- width は指定していないが、left + right から自動計算 -->
    <!-- width = 親の幅 - 40 - 40 -->
  </div>
</div>`}
			/>

			{/* ---- 4方向すべて指定 ---- */}
			<DemoBox
				title="top + right + bottom + left で完全にサイズ決定"
				description="4方向すべて指定すると、width も height も明示なしでサイズが確定します。"
			>
				<div
					style={{
						position: "relative",
						width: "400px",
						height: "200px",
						background: "#e5e7eb",
						border: "2px solid #9ca3af",
					}}
				>
					<p className="text-gray-600 text-xs" style={{ padding: "4px" }}>
						親: 400px × 200px
					</p>
					<div
						style={{
							position: "absolute",
							top: "20px",
							right: "20px",
							bottom: "20px",
							left: "20px",
							background: "#86efac",
							border: "2px solid #22c55e",
							padding: "8px",
						}}
					>
						top/right/bottom/left: 各20px
						<br />
						<span className="text-xs">
							→ width = 400 - 40 = 360px / height = 200 - 40 = 160px
						</span>
					</div>
				</div>
			</DemoBox>
			<CodeBlock
				code={`<div style="position: relative; width: 400px; height: 200px;">
  <div style="position: absolute;
    top: 20px; right: 20px; bottom: 20px; left: 20px;">
    <!-- width  = 400 - 20 - 20 = 360px -->
    <!-- height = 200 - 20 - 20 = 160px -->
  </div>
</div>`}
			/>

			{/* ---- width / inset の競合 ---- */}
			<DemoBox
				title="width と left + right が競合する場合"
				description="width, left, right をすべて指定した場合、right が無視されます（LTR の場合）。"
			>
				<div
					style={{
						position: "relative",
						width: "400px",
						height: "100px",
						background: "#e5e7eb",
						border: "2px solid #9ca3af",
					}}
				>
					<p className="text-gray-600 text-xs" style={{ padding: "4px" }}>
						親: 400px
					</p>
					<div
						style={{
							position: "absolute",
							top: "30px",
							left: "20px",
							right: "20px",
							width: "200px",
							background: "#fde68a",
							padding: "8px",
							border: "2px solid #f59e0b",
						}}
					>
						left: 20px + width: 200px + right: 20px
						<br />
						<span className="text-xs">→ right は無視される（LTR）</span>
					</div>
				</div>
			</DemoBox>
			<CodeBlock
				code={`/* 過剰指定: left + right + width → right が無視される (LTR) */
div {
  position: absolute;
  left: 20px;
  right: 20px;  /* ← 無視される */
  width: 200px;
}
/* left と width が優先され、要素は left: 20px から 200px 幅で配置 */`}
			/>

			{/* ---- containing block ---- */}
			<DemoBox
				title="containing block（基準となる親）"
				description="absolute 要素の位置・サイズは、最も近い position: relative/absolute/fixed/sticky の祖先を基準に計算されます。"
			>
				<div style={{ background: "#e5e7eb", padding: "16px" }}>
					<p className="mb-1 text-gray-600 text-xs">
						div (position: static) — 基準にならない
					</p>
					<div
						style={{
							position: "relative",
							background: "#dbeafe",
							padding: "16px",
							height: "150px",
							border: "2px dashed #3b82f6",
						}}
					>
						<p className="mb-1 text-blue-600 text-xs">
							div (position: relative) — これが containing block
						</p>
						<div style={{ background: "#fef9c3", padding: "16px" }}>
							<p className="mb-1 text-gray-600 text-xs">
								div (position: static) — 基準にならない
							</p>
							<div
								style={{
									position: "absolute",
									top: "10px",
									right: "10px",
									background: "#fca5a5",
									padding: "8px",
									border: "2px solid #ef4444",
								}}
							>
								absolute → relative の親が基準
							</div>
						</div>
					</div>
				</div>
			</DemoBox>
			<CodeBlock
				code={`<div><!-- static: 基準にならない -->
  <div style="position: relative;"><!-- ← これが containing block -->
    <div><!-- static: 基準にならない -->
      <div style="position: absolute; top: 10px; right: 10px;">
        <!-- relative の div を基準に配置される -->
      </div>
    </div>
  </div>
</div>`}
			/>

			{/* ---- まとめ ---- */}
			<div className="overflow-x-auto rounded-lg bg-white p-6 shadow-sm">
				<h3 className="mb-4 font-bold text-lg">
					absolute 要素のサイズ決定ルール
				</h3>
				<table className="w-full border-collapse text-sm">
					<thead>
						<tr className="border-b-2 border-gray-200">
							<th className="px-4 py-2 text-left">指定</th>
							<th className="px-4 py-2 text-left">結果</th>
						</tr>
					</thead>
					<tbody>
						<tr className="border-b border-gray-100">
							<td className="px-4 py-2 font-mono">width のみ</td>
							<td className="px-4 py-2">指定した width になる</td>
						</tr>
						<tr className="border-b border-gray-100">
							<td className="px-4 py-2 font-mono">
								left + right（width なし）
							</td>
							<td className="px-4 py-2">
								width = containing block の幅 - left - right
							</td>
						</tr>
						<tr className="border-b border-gray-100">
							<td className="px-4 py-2 font-mono">left + right + width</td>
							<td className="px-4 py-2">
								過剰指定 → right が無視される（LTR）
							</td>
						</tr>
						<tr className="border-b border-gray-100">
							<td className="px-4 py-2 font-mono">height のみ</td>
							<td className="px-4 py-2">指定した height になる</td>
						</tr>
						<tr className="border-b border-gray-100">
							<td className="px-4 py-2 font-mono">
								top + bottom（height なし）
							</td>
							<td className="px-4 py-2">
								height = containing block の高さ - top - bottom
							</td>
						</tr>
						<tr className="border-b border-gray-100">
							<td className="px-4 py-2 font-mono">top + bottom + height</td>
							<td className="px-4 py-2">過剰指定 → bottom が無視される</td>
						</tr>
						<tr>
							<td className="px-4 py-2 font-mono">すべて未指定</td>
							<td className="px-4 py-2">
								コンテンツに応じた shrink-to-fit の幅になる
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
