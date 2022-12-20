import "./App.scss";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import Account from "./pages/Account";
import NotFound from "./components/NotFound";
import Category from "./pages/Category";
import {
  CATEGORY_TRENDING,
  CATEGORY_TOP_RATED,
  CATEGORY_POPULAR,
} from "./config";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="search/:query" element={<SearchResult />} />
        <Route
          path="trending"
          element={<Category categoryPage={CATEGORY_TRENDING} />}
        />
        <Route
          path="popular"
          element={<Category categoryPage={CATEGORY_POPULAR} />}
        />
        <Route
          path="top-rated"
          element={<Category categoryPage={CATEGORY_TOP_RATED} />}
        />
        <Route path="*" element={<NotFound message={"Page not found"} />} />
      </Route>
      <Route path="account" element={<Account />} />
    </Routes>
  );
}

export default App;
