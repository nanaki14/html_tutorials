import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { BlockPage } from "./pages/BlockPage";
import { ComparisonPage } from "./pages/ComparisonPage";
import { Home } from "./pages/Home";
import { InlineBlockPage } from "./pages/InlineBlockPage";
import { InlinePage } from "./pages/InlinePage";

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
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
