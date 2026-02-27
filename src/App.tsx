import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AbsolutePage } from "./pages/AbsolutePage";
import { BlockPage } from "./pages/BlockPage";
import { ComparisonPage } from "./pages/ComparisonPage";
import { Home } from "./pages/Home";
import { InlineBlockPage } from "./pages/InlineBlockPage";
import { InlinePage } from "./pages/InlinePage";
import { MarginPaddingPercentPage } from "./pages/MarginPaddingPercentPage";
import { SizingPage } from "./pages/SizingPage";

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
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
