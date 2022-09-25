import "./App.scss";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Popular from "./pages/Popular";
import Home from "./pages/Home";
import TopRated from "./pages/TopRated";
import Trending from "./pages/Trending";
import SearchResult from "./pages/SearchResult";
import Account from "./pages/Account";
import NotFound from "./components/NotFound";

function App() {
    return (
        <Routes>
            <Route path="/" element={<NavBar />}>
                <Route index element={<Home />} />
                <Route path="trending" element={<Trending />} />
                <Route path="popular" element={<Popular />} />
                <Route path="search/:query" element={<SearchResult />} />
                <Route path="top-rated" element={<TopRated />} />
                <Route
                    path="*"
                    element={<NotFound message={"Page not found"} />}
                />
            </Route>
            <Route path="account" element={<Account />} />
        </Routes>
    );
}

export default App;
