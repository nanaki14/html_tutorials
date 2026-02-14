import { Link } from "react-router-dom";

export function Home() {
	return (
		<div className="space-y-6">
			<div className="rounded-lg bg-white p-8 text-center shadow-sm">
				<h2 className="mb-4 font-bold text-3xl text-gray-800">
					ブロック要素とインライン要素を学ぼう
				</h2>
				<p className="mx-auto max-w-2xl text-gray-600">
					HTMLの要素には大きく分けて「ブロック要素」と「インライン要素」があります。
					それぞれの振る舞いの違いを、インタラクティブなサンプルで確認しましょう。
				</p>
			</div>

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
		</div>
	);
}
