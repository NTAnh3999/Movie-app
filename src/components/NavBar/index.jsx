import React, { useState } from "react";
import "./navbar.scss";
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
            <section>
                <nav className="nav-container-fluid">
                    <Container>
                        <div className="nav-bar">
                            <div className="logo">
                                <Link to="/">MovieApp</Link>
                            </div>
                            <NavBarLink />
                            <form
                                className="search-box"
                                onSubmit={submitHandle}
                            >
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
                    className="sidebar"
                    style={{
                        width: displaySidebar ? "30vw" : "0",
                    }}
                >
                    <div
                        className="close-btn"
                        onClick={setDisplaySidebarHandle}
                    >
                        <i className="fa-solid fa-x"></i>
                    </div>
                    <NavBarLink />
                </div>
            </section>
            <Outlet />
        </>
    );
};

export default NavBar;
