import { CodeBlock } from "../components/CodeBlock";
import { DemoBox } from "../components/DemoBox";

export function ViewportUnitsPage() {
	return (
		<div className="space-y-8">
			<h2 className="font-bold text-2xl text-gray-800">
				ビューポート単位: vw / vh / svw / svh / lvw / lvh / dvw / dvh
			</h2>

			<div className="rounded-lg bg-blue-50 p-6">
				<p className="text-blue-800">
					ビューポート単位はブラウザの表示領域を基準にサイズを指定します。
					スマートフォンのブラウザではアドレスバーの表示・非表示で高さが変わるため、
					<code className="rounded bg-blue-100 px-1 font-mono">vh</code>{" "}
					だけでは意図しない動作が起きることがあります。CSS の{" "}
					<code className="rounded bg-blue-100 px-1 font-mono">s*</code> /{" "}
					<code className="rounded bg-blue-100 px-1 font-mono">l*</code> /{" "}
					<code className="rounded bg-blue-100 px-1 font-mono">d*</code>{" "}
					バリアントはその問題を解決します。
				</p>
			</div>

			{/* 基本の vw / vh */}
			<DemoBox
				title="vw / vh — ビューポートの幅・高さ基準"
				description="1vw = ビューポート幅の 1%、1vh = ビューポート高さの 1%。ビューポートはブラウザのページ表示領域全体を指します。"
			>
				<div className="space-y-3">
					<div
						style={{
							width: "50vw",
							background: "#93c5fd",
							padding: "8px",
							boxSizing: "border-box",
						}}
					>
						width: 50vw（ビューポート幅の 50%）
					</div>
					<div
						style={{
							width: "80vw",
							background: "#fca5a5",
							padding: "8px",
							boxSizing: "border-box",
						}}
					>
						width: 80vw（ビューポート幅の 80%）
					</div>
					<div className="text-gray-500 text-xs">
						※ vh はビューポート高さを基準にします（画面をリサイズすると変わります）
					</div>
				</div>
			</DemoBox>
			<CodeBlock
				code={`/* ビューポート幅・高さ基準 */
.hero {
  width: 100vw;   /* ビューポート幅の 100% */
  height: 100vh;  /* ビューポート高さの 100% → モバイルで問題になりやすい */
}

/* フォントサイズにも使える */
.fluid-text {
  font-size: clamp(1rem, 2vw, 2rem); /* vw で流動的なフォントサイズ */
}`}
			/>

			{/* モバイルの問題 */}
			<div className="rounded-lg bg-yellow-50 p-6">
				<h3 className="mb-2 font-bold text-lg text-yellow-800">
					モバイルブラウザの 100vh 問題
				</h3>
				<p className="mb-3 text-yellow-800 text-sm">
					iOS Safari などのモバイルブラウザは、スクロール時にアドレスバーを隠します。
					<code className="rounded bg-yellow-100 px-1 font-mono">100vh</code>{" "}
					は「アドレスバーを含まない最大の高さ」を参照するため、
					ページ読み込み時にはみ出したり、逆にスクロール後に余白が生まれたりします。
				</p>
				<div className="rounded bg-yellow-100 p-3 text-yellow-900 text-sm">
					<strong>アドレスバー表示時:</strong> 実際の表示高さ &lt; 100vh → コンテンツが画面外にはみ出す
					<br />
					<strong>アドレスバー非表示時:</strong> 実際の表示高さ = 100vh → 問題なし
				</div>
			</div>

			{/* svh / lvh / dvh */}
			<DemoBox
				title="svh / lvh / dvh — 3つの新しい高さ単位"
				description="CSS Viewport Units Level 4 で追加された単位。モバイルのアドレスバー問題を解決します（Chrome 108+, Safari 15.4+）。"
			>
				<div className="overflow-x-auto">
					<table className="w-full border-collapse text-sm">
						<thead>
							<tr className="bg-gray-100">
								<th className="border border-gray-300 px-4 py-2 text-left">単位</th>
								<th className="border border-gray-300 px-4 py-2 text-left">フルネーム</th>
								<th className="border border-gray-300 px-4 py-2 text-left">基準となる高さ</th>
								<th className="border border-gray-300 px-4 py-2 text-left">用途</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="border border-gray-300 px-4 py-2 font-mono font-bold text-blue-700">svh</td>
								<td className="border border-gray-300 px-4 py-2">Small Viewport Height</td>
								<td className="border border-gray-300 px-4 py-2">アドレスバーが<strong>表示されている</strong>状態の高さ</td>
								<td className="border border-gray-300 px-4 py-2 text-green-700">はみ出しを防ぎたい時</td>
							</tr>
							<tr className="bg-gray-50">
								<td className="border border-gray-300 px-4 py-2 font-mono font-bold text-red-700">lvh</td>
								<td className="border border-gray-300 px-4 py-2">Large Viewport Height</td>
								<td className="border border-gray-300 px-4 py-2">アドレスバーが<strong>非表示の</strong>状態の高さ</td>
								<td className="border border-gray-300 px-4 py-2">最大高さを確保したい時</td>
							</tr>
							<tr>
								<td className="border border-gray-300 px-4 py-2 font-mono font-bold text-purple-700">dvh</td>
								<td className="border border-gray-300 px-4 py-2">Dynamic Viewport Height</td>
								<td className="border border-gray-300 px-4 py-2">アドレスバーの状態に<strong>追従</strong>する高さ</td>
								<td className="border border-gray-300 px-4 py-2">常に画面ぴったりにしたい時</td>
							</tr>
						</tbody>
					</table>
				</div>
			</DemoBox>
			<CodeBlock
				code={`/* モバイルのヒーローセクション */
.hero {
  /* svh: アドレスバー表示時の高さ → 絶対にはみ出さない */
  height: 100svh;
}

/* フルスクリーンモーダル */
.modal {
  /* dvh: スクロールでアドレスバーが隠れても追従 */
  height: 100dvh;
}

/* 幅方向の対応する単位 */
.element {
  width: 100svw;  /* Small Viewport Width  */
  width: 100lvw;  /* Large Viewport Width  */
  width: 100dvw;  /* Dynamic Viewport Width */
}`}
			/>

			{/* 使い分けガイド */}
			<div className="rounded-lg bg-white p-6 shadow-sm">
				<h3 className="mb-4 font-bold text-lg">使い分けガイド</h3>
				<div className="space-y-3">
					<div className="flex items-start gap-3 rounded-lg bg-green-50 p-4">
						<span className="font-mono font-bold text-green-700">svh</span>
						<div>
							<p className="font-semibold text-green-800 text-sm">安全なフルスクリーン</p>
							<p className="text-green-700 text-xs">
								ヒーローセクション・スプラッシュ画面など、はみ出しNGな要素に最適。
								アドレスバーがある前提の最小サイズ。
							</p>
						</div>
					</div>
					<div className="flex items-start gap-3 rounded-lg bg-red-50 p-4">
						<span className="font-mono font-bold text-red-700">lvh</span>
						<div>
							<p className="font-semibold text-red-800 text-sm">デスクトップ互換</p>
							<p className="text-red-700 text-xs">
								従来の <code>vh</code> と同じ動作。デスクトップ中心のレイアウトで後方互換が必要な時。
							</p>
						</div>
					</div>
					<div className="flex items-start gap-3 rounded-lg bg-purple-50 p-4">
						<span className="font-mono font-bold text-purple-700">dvh</span>
						<div>
							<p className="font-semibold text-purple-800 text-sm">リアルタイム追従</p>
							<p className="text-purple-700 text-xs">
								フルスクリーンモーダル・オーバーレイなど、常に表示領域にぴったり合わせたい要素に。
								再描画コストがあるため多用は避ける。
							</p>
						</div>
					</div>
					<div className="flex items-start gap-3 rounded-lg bg-blue-50 p-4">
						<span className="font-mono font-bold text-blue-700">vw / vh</span>
						<div>
							<p className="font-semibold text-blue-800 text-sm">幅方向・デスクトップ</p>
							<p className="text-blue-700 text-xs">
								<code>vw</code> はモバイルでも安定しているため幅方向は引き続き使用可。
								高さ方向の <code>vh</code> はモバイル対応時に <code>svh/dvh</code> への置き換えを検討。
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* まとめ表 */}
			<div className="overflow-x-auto rounded-lg bg-white p-6 shadow-sm">
				<h3 className="mb-4 font-bold text-lg">ビューポート単位 まとめ</h3>
				<table className="w-full border-collapse text-sm">
					<thead>
						<tr className="border-b-2 border-gray-200 bg-gray-50">
							<th className="px-4 py-2 text-left">単位</th>
							<th className="px-4 py-2 text-left">基準</th>
							<th className="px-4 py-2 text-left">モバイル安全性</th>
							<th className="px-4 py-2 text-left">主な用途</th>
						</tr>
					</thead>
					<tbody>
						{[
							{ unit: "vw", base: "ビューポート幅", safety: "○", use: "流動的な幅・フォントサイズ" },
							{ unit: "vh", base: "ビューポート高さ（large相当）", safety: "△ モバイルで不安定", use: "デスクトップのフルスクリーン" },
							{ unit: "svw", base: "最小ビューポート幅", safety: "○", use: "幅の安全な最大値" },
							{ unit: "svh", base: "最小ビューポート高さ", safety: "◎ はみ出しなし", use: "ヒーロー・スプラッシュ" },
							{ unit: "lvw", base: "最大ビューポート幅", safety: "○", use: "デスクトップ互換" },
							{ unit: "lvh", base: "最大ビューポート高さ", safety: "△ vh と同等", use: "vh の代替（後方互換）" },
							{ unit: "dvw", base: "動的ビューポート幅", safety: "○", use: "動的な幅追従" },
							{ unit: "dvh", base: "動的ビューポート高さ", safety: "◎ 常に追従", use: "モーダル・オーバーレイ" },
						].map(({ unit, base, safety, use }) => (
							<tr key={unit} className="border-b border-gray-100">
								<td className="px-4 py-2 font-mono font-semibold">{unit}</td>
								<td className="px-4 py-2">{base}</td>
								<td className={`px-4 py-2 ${safety.includes("◎") ? "text-green-600 font-semibold" : safety.includes("△") ? "text-yellow-600" : "text-blue-600"}`}>{safety}</td>
								<td className="px-4 py-2 text-gray-600">{use}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
