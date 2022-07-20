import { useState } from "react";
import Container from "../Container";
import NavBarLink from "../NavBarLink";
import { Link, useNavigate, Outlet } from "react-router-dom";

const NavBar = () => {
    const [displaySidebar, setDisplaySidebar] = useState(false);

    const navigate = useNavigate();
    let query;
    function setDisplaySidebarHandle() {
        setDisplaySidebar(!displaySidebar);
    }
    function submitHandle(e) {
        e.preventDefault();
        if (!query) {
            navigate("/");
        } else {
            navigate(`/search/${query}`);
        }
    }
    const inputHandle = function (e) {
        query = e.target.value;
        // dispath({ type: "GET_SEARCH_QUERY", query: inputValue });
    };

    return (
        <>
            <nav className="nav-container-fluid">
                <Container>
                    <div className="nav-bar">
                        <Link className="logo" to="/">
                            MovieApp
                        </Link>

                        <NavBarLink />
                        <form className="search-box" onSubmit={submitHandle}>
                            <input
                                id="search-input"
                                placeholder="Search for movies..."
                                value={query}
                                onChange={inputHandle}
                            />
                            <button className="search-btn" type="submit">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>
                        <div
                            className="bars-menu"
                            onClick={setDisplaySidebarHandle}
                        >
                            <i
                                className={`fa-solid ${
                                    displaySidebar ? "fa-x" : "fa-bars"
                                }`}
                            ></i>
                        </div>
                    </div>
                </Container>
            </nav>

            <div
                className="sidebar overlay"
                style={{
                    width: displaySidebar ? "30vw" : "0",
                }}
            >
                <div className="close-btn" onClick={setDisplaySidebarHandle}>
                    <i className="fa-solid fa-x"></i>
                </div>
                <NavBarLink />
            </div>

            <Outlet />
        </>
    );
};

export default NavBar;
