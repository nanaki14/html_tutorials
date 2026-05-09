import { CodeBlock } from "../components/CodeBlock";
import { DemoBox } from "../components/DemoBox";

export function StickyPage() {
	return (
		<div className="space-y-8">
			<h2 className="font-bold text-2xl text-gray-800">position: sticky</h2>

			<div className="rounded-lg bg-blue-50 p-6">
				<p className="text-blue-800 text-sm">
					<code className="rounded bg-blue-100 px-1 font-mono">
						position: sticky
					</code>{" "}
					は <strong>relative と fixed のハイブリッド</strong>です。
					通常時は relative のようにフロー内に留まり、スクロールで指定した閾値（top/bottom など）に達すると
					fixed のように画面に貼り付きます。ただし<strong>親要素の範囲を超えて貼り付き続けることはありません</strong>。
				</p>
			</div>

			{/* relative vs fixed vs sticky */}
			<div className="rounded-lg bg-white p-6 shadow-sm">
				<h3 className="mb-4 font-bold text-lg">relative / fixed / sticky の違い</h3>
				<div className="overflow-x-auto">
					<table className="w-full border-collapse text-sm">
						<thead>
							<tr className="border-b-2 border-gray-200 bg-gray-50">
								<th className="px-4 py-2 text-left">position</th>
								<th className="px-4 py-2 text-left">通常時</th>
								<th className="px-4 py-2 text-left">スクロール時</th>
								<th className="px-4 py-2 text-left">親の範囲を出るか</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-b border-gray-100">
								<td className="px-4 py-2 font-mono">relative</td>
								<td className="px-4 py-2">フロー内に留まる</td>
								<td className="px-4 py-2">一緒にスクロールする</td>
								<td className="px-4 py-2">—</td>
							</tr>
							<tr className="border-b border-gray-100">
								<td className="px-4 py-2 font-mono">fixed</td>
								<td className="px-4 py-2">ビューポート基準で固定</td>
								<td className="px-4 py-2">常に同じ位置に固定</td>
								<td className="px-4 py-2">常に画面に貼り付く</td>
							</tr>
							<tr>
								<td className="px-4 py-2 font-mono font-semibold text-indigo-700">sticky</td>
								<td className="px-4 py-2">フロー内に留まる</td>
								<td className="px-4 py-2">閾値に達したら貼り付く</td>
								<td className="px-4 py-2 text-green-700 font-semibold">親の範囲内だけ貼り付く</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			{/* 基本デモ */}
			<DemoBox
				title="sticky の基本動作"
				description="スクロール可能なコンテナ内で、ヘッダーが top: 0 に達すると貼り付きます。親コンテナの終端を超えると外れます。"
			>
				<div
					style={{
						height: "300px",
						overflowY: "scroll",
						border: "2px solid #9ca3af",
						borderRadius: "6px",
					}}
				>
					{/* セクション 1 */}
					<div style={{ background: "#f9fafb" }}>
						<div
							style={{
								position: "sticky",
								top: 0,
								background: "#6366f1",
								color: "white",
								padding: "8px 12px",
								fontWeight: "bold",
								fontSize: "14px",
								zIndex: 1,
							}}
						>
							セクション 1（sticky ヘッダー）
						</div>
						{Array.from({ length: 5 }).map((_, i) => (
							<div key={i} style={{ padding: "12px", borderBottom: "1px solid #e5e7eb", fontSize: "13px" }}>
								セクション 1 のコンテンツ {i + 1}
							</div>
						))}
					</div>
					{/* セクション 2 */}
					<div style={{ background: "#f9fafb" }}>
						<div
							style={{
								position: "sticky",
								top: 0,
								background: "#0891b2",
								color: "white",
								padding: "8px 12px",
								fontWeight: "bold",
								fontSize: "14px",
								zIndex: 1,
							}}
						>
							セクション 2（sticky ヘッダー）
						</div>
						{Array.from({ length: 5 }).map((_, i) => (
							<div key={i} style={{ padding: "12px", borderBottom: "1px solid #e5e7eb", fontSize: "13px" }}>
								セクション 2 のコンテンツ {i + 1}
							</div>
						))}
					</div>
					{/* セクション 3 */}
					<div style={{ background: "#f9fafb" }}>
						<div
							style={{
								position: "sticky",
								top: 0,
								background: "#059669",
								color: "white",
								padding: "8px 12px",
								fontWeight: "bold",
								fontSize: "14px",
								zIndex: 1,
							}}
						>
							セクション 3（sticky ヘッダー）
						</div>
						{Array.from({ length: 5 }).map((_, i) => (
							<div key={i} style={{ padding: "12px", borderBottom: "1px solid #e5e7eb", fontSize: "13px" }}>
								セクション 3 のコンテンツ {i + 1}
							</div>
						))}
					</div>
				</div>
				<p className="mt-2 text-gray-500 text-xs">↑ スクロールしてみてください</p>
			</DemoBox>
			<CodeBlock
				code={`.section-header {
  position: sticky;
  top: 0; /* ← スクロールの閾値: ビューポート上端から 0px の位置で貼り付く */
  z-index: 1;
  background: #6366f1; /* 背景色を指定しないと下のコンテンツが透けて見える */
}

/* bottom に達したら貼り付く（下からのスクロールに有効） */
.footer-sticky {
  position: sticky;
  bottom: 0;
}`}
			/>

			{/* 親要素の範囲で外れる */}
			<DemoBox
				title="親要素の範囲を超えると外れる（fixed との最大の違い）"
				description="sticky 要素は自分の親（containing block）の外には出ません。親の下端に達すると自然に流れていきます。"
			>
				<div
					style={{
						height: "320px",
						overflowY: "scroll",
						border: "2px solid #9ca3af",
						borderRadius: "6px",
					}}
				>
					{/* 親コンテナ: 高さ制限あり */}
					<div
						style={{
							background: "#fef9c3",
							border: "2px dashed #f59e0b",
							margin: "8px",
						}}
					>
						<p style={{ padding: "8px", fontSize: "12px", color: "#92400e" }}>
							親コンテナ（高さはコンテンツ次第 / sticky はここの範囲内）
						</p>
						<div
							style={{
								position: "sticky",
								top: "8px",
								background: "#f59e0b",
								color: "white",
								padding: "8px 12px",
								fontWeight: "bold",
								fontSize: "13px",
								margin: "0 8px",
								borderRadius: "4px",
							}}
						>
							sticky な要素（親コンテナを出たら外れる）
						</div>
						{Array.from({ length: 8 }).map((_, i) => (
							<div key={i} style={{ padding: "10px 12px", borderTop: "1px solid #fde68a", fontSize: "13px" }}>
								コンテンツ {i + 1}
							</div>
						))}
					</div>
					{/* 次のセクション */}
					<div style={{ padding: "12px", background: "#f0fdf4" }}>
						<p style={{ fontSize: "13px", color: "#166534" }}>
							親コンテナの外 — sticky はここまで追ってきません
						</p>
						{Array.from({ length: 6 }).map((_, i) => (
							<div key={i} style={{ padding: "8px 0", borderTop: "1px solid #bbf7d0", fontSize: "13px" }}>
								別セクションのコンテンツ {i + 1}
							</div>
						))}
					</div>
				</div>
				<p className="mt-2 text-gray-500 text-xs">↑ スクロールして、sticky が親の下端で外れる様子を確認</p>
			</DemoBox>
			<CodeBlock
				code={`/* sticky は自分の親コンテナ内だけで貼り付く */
.section {          /* ← この範囲が sticky の限界 */
  /* height は自動（コンテンツ次第）でよい */
}
.section-header {
  position: sticky;
  top: 0;
  /* → .section の下端に達したら流れていく */
}`}
			/>

			{/* よくある使いどころ */}
			<div className="rounded-lg bg-white p-6 shadow-sm">
				<h3 className="mb-4 font-bold text-lg">よくある使いどころ</h3>
				<div className="space-y-3">
					{[
						{
							title: "セクション見出しのスティッキーヘッダー",
							desc: "長い一覧（FAQ、目次、連絡先リスト）でセクションが切り替わるたびに見出しが上部に残る。",
							code: ".section-title { position: sticky; top: 0; }",
						},
						{
							title: "テーブルの列・行ヘッダー",
							desc: "横・縦にスクロールする大きなテーブルで、ヘッダー行や左端の列を固定する。",
							code: "thead th { position: sticky; top: 0; }\ntd:first-child { position: sticky; left: 0; }",
						},
						{
							title: "サイドバーの追従",
							desc: "記事ページで目次サイドバーをスクロールに追随させつつ、記事の終わりで外れさせる。",
							code: ".toc { position: sticky; top: 80px; /* ヘッダー高さ分 */ }",
						},
						{
							title: "グローバルナビゲーション",
							desc: "ページ上部のナビバーを top: 0 で sticky にする。fixed と違いフロー内に留まるため高さが確保される。",
							code: ".global-nav { position: sticky; top: 0; z-index: 100; }",
						},
					].map(({ title, desc, code }) => (
						<div key={title} className="rounded-lg bg-gray-50 p-4">
							<p className="mb-1 font-semibold text-gray-800 text-sm">{title}</p>
							<p className="mb-2 text-gray-600 text-xs">{desc}</p>
							<pre className="overflow-x-auto rounded bg-gray-900 px-3 py-2 text-gray-100 text-xs">
								<code>{code}</code>
							</pre>
						</div>
					))}
				</div>
			</div>

			{/* ハマりポイント */}
			<div className="rounded-lg bg-red-50 p-6">
				<h3 className="mb-4 font-bold text-lg text-red-800">sticky が効かない原因 TOP 3</h3>
				<div className="space-y-4">
					<div className="rounded-lg bg-white p-4">
						<p className="mb-1 font-semibold text-red-700 text-sm">
							① top / bottom を指定していない
						</p>
						<p className="mb-2 text-gray-600 text-xs">
							<code className="bg-gray-100 px-1 font-mono">position: sticky</code>{" "}
							だけでは動きません。必ず閾値となる{" "}
							<code className="bg-gray-100 px-1 font-mono">top</code> /
							<code className="bg-gray-100 px-1 font-mono">bottom</code> /
							<code className="bg-gray-100 px-1 font-mono">left</code> /
							<code className="bg-gray-100 px-1 font-mono">right</code> のいずれかを指定する必要があります。
						</p>
						<CodeBlock code={`/* NG */
.header { position: sticky; }

/* OK */
.header { position: sticky; top: 0; }`} />
					</div>
					<div className="rounded-lg bg-white p-4">
						<p className="mb-1 font-semibold text-red-700 text-sm">
							② 祖先要素に overflow: hidden / auto / scroll が設定されている
						</p>
						<p className="mb-2 text-gray-600 text-xs">
							sticky は「スクロールコンテナ」を基準にします。途中の祖先に
							<code className="bg-gray-100 px-1 font-mono">overflow: hidden</code>{" "}
							があると、その要素がスクロールコンテナとして扱われ sticky が期待通りに動きません。
						</p>
						<CodeBlock code={`/* NG: 途中の祖先に overflow がある */
.wrapper { overflow: hidden; } /* ← sticky を壊す */
.sticky  { position: sticky; top: 0; }

/* 対処: overflow を除去するか、sticky をラッパーの直下に移動 */`} />
					</div>
					<div className="rounded-lg bg-white p-4">
						<p className="mb-1 font-semibold text-red-700 text-sm">
							③ 親要素の高さが足りない
						</p>
						<p className="mb-2 text-gray-600 text-xs">
							sticky 要素が貼り付く余地は「親の高さ - sticky 要素の高さ」です。
							親が sticky 要素とほぼ同じ高さだと、貼り付いた瞬間に外れて見えなくなります。
						</p>
						<CodeBlock code={`/* NG: 親が小さすぎて sticky の効果がほぼない */
.section { height: 60px; }     /* sticky 要素と同程度の高さ */
.sticky  { position: sticky; top: 0; height: 50px; }

/* OK: 親がスクロールするほど十分な高さを持つ */
.section { min-height: 400px; }`} />
					</div>
				</div>
			</div>

			{/* まとめ */}
			<div className="overflow-x-auto rounded-lg bg-white p-6 shadow-sm">
				<h3 className="mb-4 font-bold text-lg">sticky チェックリスト</h3>
				<div className="space-y-2 text-sm">
					{[
						{ ok: true,  text: "top / bottom / left / right のどれかを指定している" },
						{ ok: true,  text: "祖先に overflow: hidden / auto / scroll がない（または意図的なスクロールコンテナ）" },
						{ ok: true,  text: "親要素が sticky 要素よりも十分に高さを持っている" },
						{ ok: true,  text: "背景色を指定して下のコンテンツが透けないようにしている" },
						{ ok: true,  text: "ヘッダーに重なる場合は z-index を指定している" },
					].map(({ ok, text }) => (
						<div key={text} className="flex items-start gap-2">
							<span className={`mt-0.5 text-sm ${ok ? "text-green-500" : "text-red-500"}`}>
								{ok ? "✓" : "✗"}
							</span>
							<span className="text-gray-700">{text}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
