import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import Account from "./pages/Account";
import NotFound from "./components/NotFound";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import WishList from "./pages/WishList";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="search/:query" element={<SearchResult />} />
      <Route path="/movie" element={<Category />} />
      <Route path="/:category/:id" element={<Detail />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/account" element={<Account />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound message={"Page not found"} />} />
    </Routes>
  );
}

export default App;
