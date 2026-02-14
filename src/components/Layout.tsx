import { Link, Outlet, useLocation } from "react-router-dom";

const navItems = [
	{ to: "/", label: "トップ" },
	{ to: "/block", label: "ブロック要素" },
	{ to: "/inline", label: "インライン要素" },
	{ to: "/block-vs-inline", label: "比較" },
	{ to: "/inline-block", label: "inline-block" },
];

export function Layout() {
	const location = useLocation();

	return (
		<div className="min-h-screen bg-gray-100">
			<header className="bg-indigo-700 text-white shadow-md">
				<div className="mx-auto max-w-5xl px-4 py-4">
					<h1 className="font-bold text-2xl">
						HTML ブロック要素 &amp; インライン要素
					</h1>
				</div>
			</header>

			<nav className="border-gray-200 border-b bg-white shadow-sm">
				<div className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4 py-2">
					{navItems.map((item) => (
						<Link
							key={item.to}
							to={item.to}
							className={`whitespace-nowrap rounded-md px-3 py-2 font-medium text-sm transition-colors ${
								location.pathname === item.to
									? "bg-indigo-100 text-indigo-700"
									: "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
							}`}
						>
							{item.label}
						</Link>
					))}
				</div>
			</nav>

			<main className="mx-auto max-w-5xl px-4 py-8">
				<Outlet />
			</main>
		</div>
	);
}
