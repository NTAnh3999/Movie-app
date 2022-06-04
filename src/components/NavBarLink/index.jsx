import React from "react";
import "./navlink.scss";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { NavLink } from "react-router-dom";
const NavBarLink = () => {
    const [state, dispath] = useContext(GlobalContext);

    return (
        <div className="nav-link-container">
            <ul className="nav-link">
                <li>
                    <NavLink
                        to="/"
                        onClick={() =>
                            dispath({
                                type: "GET_POPULAR",
                                payload: state.movieLists,
                            })
                        }
                    >
                        Popular
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="top-rated"
                        onClick={() =>
                            dispath({
                                type: "GET_TOP_RATED",
                                payload: state.movieLists,
                            })
                        }
                    >
                        Top rated
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default NavBarLink;
