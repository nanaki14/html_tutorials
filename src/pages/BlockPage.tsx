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
				description="以下はすべてブロック要素です。"
			>
				<div
					style={{ background: "#dbeafe", padding: "8px", marginBottom: "4px" }}
				>
					&lt;div&gt;
				</div>
				<p
					style={{ background: "#dcfce7", padding: "8px", marginBottom: "4px" }}
				>
					&lt;p&gt;
				</p>
				<h3
					style={{
						background: "#fef9c3",
						padding: "8px",
						marginBottom: "4px",
						fontSize: "1em",
					}}
				>
					&lt;h3&gt;
				</h3>
				<ul
					style={{
						background: "#fce7f3",
						padding: "8px 8px 8px 32px",
						marginBottom: "4px",
					}}
				>
					<li>&lt;ul&gt; &gt; &lt;li&gt;</li>
				</ul>
				<section
					style={{ background: "#e0e7ff", padding: "8px", marginBottom: "4px" }}
				>
					&lt;section&gt;
				</section>
			</DemoBox>
		</div>
	);
}
