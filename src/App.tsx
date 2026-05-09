import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AbsolutePage } from "./pages/AbsolutePage";
import { BlockPage } from "./pages/BlockPage";
import { ComparisonPage } from "./pages/ComparisonPage";
import { ContainerQueryPage } from "./pages/ContainerQueryPage";
import { FlexPage } from "./pages/FlexPage";
import { GridPage } from "./pages/GridPage";
import { StickyPage } from "./pages/StickyPage";
import { Home } from "./pages/Home";
import { InlineBlockPage } from "./pages/InlineBlockPage";
import { InlinePage } from "./pages/InlinePage";
import { MarginPaddingPercentPage } from "./pages/MarginPaddingPercentPage";
import { SizingPage } from "./pages/SizingPage";
import { ViewportUnitsPage } from "./pages/ViewportUnitsPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="block" element={<BlockPage />} />
					<Route path="inline" element={<InlinePage />} />
					<Route path="block-vs-inline" element={<ComparisonPage />} />
					<Route path="inline-block" element={<InlineBlockPage />} />
					<Route path="sizing" element={<SizingPage />} />
					<Route
						path="margin-padding-percent"
						element={<MarginPaddingPercentPage />}
					/>
					<Route path="absolute" element={<AbsolutePage />} />
					<Route path="sticky" element={<StickyPage />} />
					<Route path="viewport-units" element={<ViewportUnitsPage />} />
					<Route path="flex" element={<FlexPage />} />
					<Route path="grid" element={<GridPage />} />
					<Route path="container-query" element={<ContainerQueryPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
