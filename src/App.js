import "./App.scss";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import SearchResult from "./pages/SearchResult";
import NotFound from "./components/NotFound";

function App() {
    return (
        <Routes>
            <Route path="/" element={<NavBar />}>
                <Route path="search" element={<SearchResult />} />
                <Route path="search/:query" element={<SearchResult />} />
                <Route index element={<Popular />} />
                <Route path="top-rated" element={<TopRated />} />
                <Route
                    path="*"
                    element={<NotFound message={"Page not found"} />}
                />
            </Route>
        </Routes>
    );
}

export default App;
