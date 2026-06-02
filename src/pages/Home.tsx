import { Link } from "react-router-dom";

export function Home() {
	return (
		<div className="space-y-6">
			<div className="rounded-lg bg-white p-8 text-center shadow-sm">
				<h2 className="mb-4 font-bold text-3xl text-gray-800">
					HTML/CSS のレイアウトを学ぼう
				</h2>
				<p className="mx-auto max-w-2xl text-gray-600">
					ブロック・インラインの基本から、サイズ計算、position、Flexbox・Grid
					といったレイアウト手法まで。
					それぞれの振る舞いの違いを、インタラクティブなサンプルで確認しましょう。
				</p>
			</div>

			<h3 className="font-bold text-gray-500 text-sm">基本</h3>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				<Link
					to="/block"
					className="rounded-lg border-2 border-blue-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<h3 className="mb-2 font-bold text-blue-700 text-xl">ブロック要素</h3>
					<p className="text-gray-600 text-sm">
						横幅いっぱいに広がり、縦に積み重なる要素の振る舞いを確認します。
					</p>
				</Link>

				<Link
					to="/inline"
					className="rounded-lg border-2 border-green-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<h3 className="mb-2 font-bold text-green-700 text-xl">
						インライン要素
					</h3>
					<p className="text-gray-600 text-sm">
						コンテンツ幅だけを占め、横に並ぶ要素の振る舞いを確認します。
					</p>
				</Link>

				<Link
					to="/block-vs-inline"
					className="rounded-lg border-2 border-purple-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<h3 className="mb-2 font-bold text-purple-700 text-xl">比較</h3>
					<p className="text-gray-600 text-sm">
						width, height, margin,
						paddingの効き方をブロックとインラインで比較します。
					</p>
				</Link>

				<Link
					to="/inline-block"
					className="rounded-lg border-2 border-orange-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<h3 className="mb-2 font-bold text-orange-700 text-xl">
						inline-block
					</h3>
					<p className="text-gray-600 text-sm">
						両方の特性を併せ持つ display: inline-block を確認します。
					</p>
				</Link>
			</div>

			<h3 className="font-bold text-gray-500 text-sm">サイズ計算</h3>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				<Link
					to="/sizing"
					className="rounded-lg border-2 border-cyan-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<h3 className="mb-2 font-bold text-cyan-700 text-xl">
						width / height の計算基準
					</h3>
					<p className="text-gray-600 text-sm">
						% 指定の基準、box-sizing の違い、各単位の計算基準を確認します。
					</p>
				</Link>

				<Link
					to="/margin-padding-percent"
					className="rounded-lg border-2 border-emerald-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<h3 className="mb-2 font-bold text-emerald-700 text-xl">
						margin / padding の %
					</h3>
					<p className="text-gray-600 text-sm">
						上下左右すべて「親の幅」が基準になる理由と応用テクニックを解説します。
					</p>
				</Link>

				<Link
					to="/absolute"
					className="rounded-lg border-2 border-rose-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<h3 className="mb-2 font-bold text-rose-700 text-xl">
						position: absolute
					</h3>
					<p className="text-gray-600 text-sm">
						absolute 要素のブロック化と、top/right/bottom/left
						によるサイズ決定を確認します。
					</p>
				</Link>

				<Link
					to="/sticky"
					className="rounded-lg border-2 border-amber-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<h3 className="mb-2 font-bold text-amber-700 text-xl">
						position: sticky
					</h3>
					<p className="text-gray-600 text-sm">
						スクロールに追従して固定される sticky 配置の動作を確認します。
					</p>
				</Link>

				<Link
					to="/viewport-units"
					className="rounded-lg border-2 border-sky-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<h3 className="mb-2 font-bold text-sky-700 text-xl">
						vw / vh / svh / dvh
					</h3>
					<p className="text-gray-600 text-sm">
						ビューポート単位の違いと、モバイルでのアドレスバー対応を確認します。
					</p>
				</Link>
			</div>

			<h3 className="font-bold text-gray-500 text-sm">レイアウト</h3>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				<Link
					to="/flex"
					className="rounded-lg border-2 border-violet-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<h3 className="mb-2 font-bold text-violet-700 text-xl">Flexbox</h3>
					<p className="text-gray-600 text-sm">
						1次元レイアウトの基本。flex-direction・justify-content・align-items を確認します。
					</p>
				</Link>

				<Link
					to="/grid"
					className="rounded-lg border-2 border-teal-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<h3 className="mb-2 font-bold text-teal-700 text-xl">Grid</h3>
					<p className="text-gray-600 text-sm">
						2次元レイアウトの基本。grid-template・fr 単位・area 配置を確認します。
					</p>
				</Link>

				<Link
					to="/container-query"
					className="rounded-lg border-2 border-fuchsia-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<h3 className="mb-2 font-bold text-fuchsia-700 text-xl">
						Container Query
					</h3>
					<p className="text-gray-600 text-sm">
						親コンテナのサイズに応じてスタイルを切り替える @container の使い方を確認します。
					</p>
				</Link>
			</div>
		</div>
	);
}
