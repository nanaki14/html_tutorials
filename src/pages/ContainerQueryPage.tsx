import { CodeBlock } from "../components/CodeBlock";
import { DemoBox } from "../components/DemoBox";

export function ContainerQueryPage() {
	return (
		<div className="space-y-8">
			<h2 className="font-bold text-2xl text-gray-800">Container Query</h2>

			<div className="rounded-lg bg-blue-50 p-6">
				<p className="text-blue-800 text-sm">
					<strong>Container Query</strong> は「ビューポートのサイズ」ではなく「
					<strong>親コンテナのサイズ</strong>」に応じてスタイルを変える仕組みです。
					コンポーネントを「どこに置いても自律的に見た目を調整できる」ようになります（Chrome 105+, Safari 16+, Firefox 110+）。
				</p>
			</div>

			{/* メディアクエリとの違い */}
			<div className="rounded-lg bg-white p-6 shadow-sm">
				<h3 className="mb-4 font-bold text-lg">メディアクエリ vs コンテナクエリ</h3>
				<div className="grid grid-cols-2 gap-4">
					<div className="rounded-lg bg-orange-50 p-4">
						<p className="mb-2 font-bold text-orange-800">メディアクエリ @media</p>
						<ul className="space-y-1 text-orange-700 text-sm">
							<li>• ビューポート（画面）のサイズが基準</li>
							<li>• 同じコンポーネントを狭い場所と広い場所に置くと困る</li>
							<li>• ページ全体のブレイクポイント設計が必要</li>
						</ul>
						<div className="mt-3 rounded bg-orange-100 p-2 text-orange-800 text-xs">
							問題: カードを「サイドバーの中（狭い）」と「メインコンテンツ（広い）」に置くと、
							どちらもビューポートが基準になるため個別調整が難しい
						</div>
					</div>
					<div className="rounded-lg bg-green-50 p-4">
						<p className="mb-2 font-bold text-green-800">コンテナクエリ @container</p>
						<ul className="space-y-1 text-green-700 text-sm">
							<li>• 親コンテナのサイズが基準</li>
							<li>• どこに置いてもコンテナサイズで自動調整</li>
							<li>• コンポーネント単位の自律的なレイアウト</li>
						</ul>
						<div className="mt-3 rounded bg-green-100 p-2 text-green-800 text-xs">
							解決: 狭いコンテナ（サイドバー）では縦積み、広いコンテナ（メイン）では横並びに自動的に切り替わる
						</div>
					</div>
				</div>
			</div>

			{/* 基本的な使い方 */}
			<DemoBox
				title="基本構文"
				description="① 親要素に container-type を指定 → ② @container でクエリを書く"
			>
				<div className="space-y-6">
					{/* 狭いコンテナ */}
					<div>
						<p className="mb-2 text-gray-500 text-xs">狭いコンテナ（200px）→ 縦積みレイアウト</p>
						<div
							style={{
								containerType: "inline-size" as React.CSSProperties["containerType"],
								width: "200px",
								border: "2px dashed #9ca3af",
								padding: "8px",
							}}
						>
							<div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
								<div style={{ background: "#6366f1", borderRadius: "50%", width: "48px", height: "48px" }} />
								<div>
									<div style={{ fontWeight: "bold", fontSize: "13px" }}>田中 太郎</div>
									<div style={{ color: "#6b7280", fontSize: "11px" }}>エンジニア</div>
									<div style={{ color: "#6b7280", fontSize: "11px", marginTop: "4px" }}>コンテナが狭い → 縦積み</div>
								</div>
							</div>
						</div>
					</div>
					{/* 広いコンテナ */}
					<div>
						<p className="mb-2 text-gray-500 text-xs">広いコンテナ（400px）→ 横並びレイアウト</p>
						<div
							style={{
								containerType: "inline-size" as React.CSSProperties["containerType"],
								width: "400px",
								border: "2px dashed #9ca3af",
								padding: "8px",
							}}
						>
							<div style={{ display: "flex", flexDirection: "row", gap: "12px", alignItems: "center" }}>
								<div style={{ background: "#6366f1", borderRadius: "50%", width: "48px", height: "48px", flexShrink: 0 }} />
								<div>
									<div style={{ fontWeight: "bold", fontSize: "13px" }}>田中 太郎</div>
									<div style={{ color: "#6b7280", fontSize: "11px" }}>エンジニア</div>
									<div style={{ color: "#6b7280", fontSize: "11px", marginTop: "4px" }}>コンテナが広い → 横並び</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</DemoBox>
			<CodeBlock
				code={`/* ① 親にコンテナを宣言 */
.card-wrapper {
  container-type: inline-size; /* 幅を基準にする */
  container-name: card;        /* 任意の名前（省略可） */
}

/* ② コンテナのサイズに応じてスタイルを変える */
.card {
  display: flex;
  flex-direction: column; /* デフォルト: 縦積み */
}

@container (min-width: 300px) {
  .card {
    flex-direction: row; /* 300px 以上: 横並び */
  }
}

/* container-name を使って特定コンテナを指定 */
@container card (min-width: 400px) {
  .card-title {
    font-size: 1.25rem;
  }
}`}
			/>

			{/* container-type */}
			<div className="rounded-lg bg-white p-6 shadow-sm">
				<h3 className="mb-4 font-bold text-lg">container-type の値</h3>
				<table className="w-full border-collapse text-sm">
					<thead>
						<tr className="border-b-2 border-gray-200 bg-gray-50">
							<th className="px-4 py-2 text-left">値</th>
							<th className="px-4 py-2 text-left">基準</th>
							<th className="px-4 py-2 text-left">用途</th>
						</tr>
					</thead>
					<tbody>
						<tr className="border-b border-gray-100">
							<td className="px-4 py-2 font-mono font-semibold text-green-700">inline-size</td>
							<td className="px-4 py-2">要素の幅（インライン方向）</td>
							<td className="px-4 py-2">ほとんどのケースで使う。幅に応じてレイアウトを変える</td>
						</tr>
						<tr className="border-b border-gray-100">
							<td className="px-4 py-2 font-mono font-semibold">size</td>
							<td className="px-4 py-2">幅と高さ両方</td>
							<td className="px-4 py-2">高さも基準にしたい場合（高さ方向が確定している必要あり）</td>
						</tr>
						<tr>
							<td className="px-4 py-2 font-mono text-gray-400">normal</td>
							<td className="px-4 py-2">なし</td>
							<td className="px-4 py-2">コンテナクエリ無効（デフォルト）。style query のみ使える</td>
						</tr>
					</tbody>
				</table>
				<p className="mt-3 text-gray-500 text-xs">
					※ container-type: inline-size を指定すると、その要素は高さの計算で子要素の高さを参照できなくなります（ブロック軸のサイズが確定する必要があるため）。
				</p>
			</div>

			{/* 実用例: サイドバーとメインで同じコンポーネント */}
			<DemoBox
				title="実用例: サイドバーとメインに同じカードを配置"
				description="同じコンポーネントでも、置かれるコンテナの幅によって自動的にレイアウトが変わります。"
			>
				<div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "12px" }}>
					{/* サイドバー */}
					<div style={{ background: "#f3f4f6", padding: "8px", borderRadius: "6px" }}>
						<p style={{ fontSize: "10px", color: "#6b7280", marginBottom: "8px" }}>サイドバー（狭い）</p>
						{/* コンテナ */}
						<div
							style={{
								containerType: "inline-size" as React.CSSProperties["containerType"],
							}}
						>
							<div style={{ display: "flex", flexDirection: "column", gap: "4px", background: "white", padding: "8px", borderRadius: "4px", border: "1px solid #e5e7eb" }}>
								<div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
									<div style={{ width: "28px", height: "28px", background: "#818cf8", borderRadius: "50%", flexShrink: 0 }} />
									<div style={{ fontSize: "11px" }}>
										<div style={{ fontWeight: "bold" }}>記事タイトル</div>
										<div style={{ color: "#9ca3af", fontSize: "10px" }}>by Author</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* メイン */}
					<div style={{ background: "#f3f4f6", padding: "8px", borderRadius: "6px" }}>
						<p style={{ fontSize: "10px", color: "#6b7280", marginBottom: "8px" }}>メインコンテンツ（広い）</p>
						<div
							style={{
								containerType: "inline-size" as React.CSSProperties["containerType"],
							}}
						>
							<div style={{ display: "flex", flexDirection: "row", gap: "12px", alignItems: "flex-start", background: "white", padding: "12px", borderRadius: "4px", border: "1px solid #e5e7eb" }}>
								<div style={{ width: "80px", height: "60px", background: "#c7d2fe", borderRadius: "4px", flexShrink: 0 }} />
								<div>
									<div style={{ fontWeight: "bold", fontSize: "13px" }}>記事タイトルが長くても大丈夫</div>
									<div style={{ color: "#6b7280", fontSize: "11px", marginTop: "4px" }}>by Author · 2024-01-01</div>
									<div style={{ color: "#6b7280", fontSize: "11px", marginTop: "4px" }}>記事の概要テキストがここに入ります...</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</DemoBox>
			<CodeBlock
				code={`/* コンポーネント側: コンテナのサイズで自律的に変わる */
.article-card-wrapper {
  container-type: inline-size;
}

.article-card {
  display: flex;
  flex-direction: column; /* 狭い: 縦積み */
  gap: 8px;
}

@container (min-width: 280px) {
  .article-card {
    flex-direction: row;  /* 広い: 横並び */
  }
  .article-thumbnail {
    width: 120px;
    height: 90px;
  }
}

/* 使う側はどこに置いてもOK */
.sidebar .article-card-wrapper { /* → 自動で縦積み */ }
.main    .article-card-wrapper { /* → 自動で横並び */ }`}
			/>

			{/* cqw / cqh 単位 */}
			<DemoBox
				title="cqw / cqh — コンテナ相対単位"
				description="コンテナのサイズを基準にした長さ単位です。vw/vh のコンテナ版です。"
			>
				<div style={{ containerType: "inline-size" as React.CSSProperties["containerType"], width: "100%", border: "2px dashed #9ca3af", padding: "12px" }}>
					<p style={{ fontSize: "10px", color: "#6b7280", marginBottom: "8px" }}>このコンテナの幅を基準にした cqw</p>
					<div style={{ fontSize: "3cqw" as React.CSSProperties["fontSize"], background: "#e0e7ff", padding: "8px", borderRadius: "4px" }}>
						font-size: 3cqw（コンテナ幅の3%）
					</div>
					<div style={{ width: "50cqw" as React.CSSProperties["width"], background: "#ddd6fe", padding: "8px", borderRadius: "4px", marginTop: "8px", fontSize: "12px" }}>
						width: 50cqw（コンテナ幅の50%）
					</div>
				</div>
			</DemoBox>
			<CodeBlock
				code={`/* コンテナ幅を基準にしたサイズ指定 */
.title {
  font-size: 4cqw;  /* コンテナ幅の 4% */
}
.half {
  width: 50cqw;     /* コンテナ幅の 50% */
}

/* 他の単位 */
/* cqh: コンテナ高さ基準（container-type: size が必要） */
/* cqi: インライン軸のコンテナサイズ（inline-size と同じ方向） */
/* cqb: ブロック軸のコンテナサイズ */
/* cqmin: cqi と cqb の小さい方 */
/* cqmax: cqi と cqb の大きい方 */`}
			/>

			{/* まとめ */}
			<div className="rounded-lg bg-white p-6 shadow-sm">
				<h3 className="mb-4 font-bold text-lg">Container Query を使うべき場面</h3>
				<div className="space-y-2 text-sm">
					{[
						"同じコンポーネントを「狭い場所（サイドバー）」と「広い場所（メイン）」の両方に置く",
						"デザインシステム・UI ライブラリ内のコンポーネント（使われる文脈が不明）",
						"再利用可能なカード・ウィジェット・タイル",
						"コンポーネントのレスポンシブをページのブレイクポイントから切り離したい",
					].map((item) => (
						<div key={item} className="flex items-start gap-2">
							<span className="mt-0.5 text-green-500">✓</span>
							<span className="text-gray-700">{item}</span>
						</div>
					))}
				</div>
				<div className="mt-4 space-y-2 text-sm">
					<p className="font-semibold text-gray-600">引き続き @media を使う場面:</p>
					{[
						"ページ全体のレイアウト変更（1カラム ↔ 2カラム など）",
						"フォントサイズの大域的な調整",
						"ナビゲーションのハンバーガーメニュー切り替え",
					].map((item) => (
						<div key={item} className="flex items-start gap-2">
							<span className="mt-0.5 text-gray-400">→</span>
							<span className="text-gray-600">{item}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
