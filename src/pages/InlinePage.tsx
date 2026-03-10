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
				description="テキストの一部を修飾するために使われる要素です。"
			>
				<p style={{ fontSize: "1.1em", lineHeight: "2" }}>
					これは<span style={{ background: "#dbeafe" }}>&lt;span&gt;</span>
					です。
					<a href="#!" style={{ color: "#2563eb" }}>
						&lt;a&gt;リンク
					</a>
					もインラインです。
					<strong>&lt;strong&gt;太字</strong>や<em>&lt;em&gt;斜体</em>
					もインラインです。
					<code
						style={{
							background: "#f3f4f6",
							padding: "2px 4px",
							borderRadius: "3px",
						}}
					>
						&lt;code&gt;
					</code>
					もインラインです。
				</p>
			</DemoBox>
		</div>
	);
}
