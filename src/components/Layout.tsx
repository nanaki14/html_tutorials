import { Link, Outlet, useLocation } from "react-router-dom";

const navItems = [
	{ to: "/", label: "トップ" },
	{ to: "/block", label: "ブロック要素" },
	{ to: "/inline", label: "インライン要素" },
	{ to: "/block-vs-inline", label: "比較" },
	{ to: "/inline-block", label: "inline-block" },
	{ to: "/sizing", label: "width/height" },
	{ to: "/margin-padding-percent", label: "margin/padding %" },
	{ to: "/absolute", label: "absolute" },
	{ to: "/sticky", label: "sticky" },
	{ to: "/viewport-units", label: "vw/vh/svh/dvh" },
	{ to: "/flex", label: "Flexbox" },
	{ to: "/grid", label: "Grid" },
	{ to: "/container-query", label: "Container Query" },
];

export function Layout() {
	const location = useLocation();

	return (
		<div className="min-h-screen bg-gray-100">
			<header className="bg-indigo-700 text-white shadow-md">
				<div className="px-4 py-4">
					<h1 className="font-bold text-2xl">
						HTML/CSS レイアウト チュートリアル
					</h1>
				</div>
			</header>

			<div className="flex">
				<nav className="sticky top-0 h-screen w-48 shrink-0 overflow-y-auto bg-white shadow-md">
					<ul className="flex flex-col gap-1 p-3">
						{navItems.map((item) => (
							<li key={item.to}>
								<Link
									to={item.to}
									className={`block rounded-md px-3 py-2 font-medium text-sm transition-colors ${
										location.pathname === item.to
											? "bg-indigo-100 text-indigo-700"
											: "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
									}`}
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<main className="flex-1 px-8 py-8">
					<Outlet />
				</main>
			</div>
		</div>
	);
}
