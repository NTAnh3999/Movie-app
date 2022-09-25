import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import SearchBox from "../SearchBox";
import { Link, Outlet, NavLink } from "react-router-dom";
import userAvatar from "../../assets/realtor-1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowTrendUp,
    faCrown,
    faClapperboard,
    faFire,
    faStar,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
    const userContext = useContext(UserContext);

    return (
        <>
            <nav className="nav-container">
                <div className="nav-bar">
                    <Link className="logo-box" to="/">
                        <span className="logo">
                            <FontAwesomeIcon icon={faCrown} />
                            <FontAwesomeIcon icon={faClapperboard} />
                        </span>
                    </Link>
                    <ul className="nav-list">
                        <li>
                            <NavLink className="nav-link" to="/top-rated">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                                <span className="title">Top rated</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/popular">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faFire} />
                                </span>
                                <span className="title">Popular</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/trending">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faArrowTrendUp} />
                                </span>
                                <span className="title">Trending</span>
                            </NavLink>
                        </li>
                    </ul>
                    {userContext ? (
                        <Link to="/account" className="account">
                            <FontAwesomeIcon icon={faUser} />
                            <span className="title">Account</span>
                        </Link>
                    ) : (
                        <div className="user">
                            <img
                                src={userAvatar}
                                alt="User"
                                className="avatar"
                            />
                            <span className="user-info">
                                <ul>
                                    <li>Thông tin tài khoản</li>
                                    <li>Danh sách đã lưu</li>
                                    <li>Đăng xuất</li>
                                </ul>
                            </span>
                        </div>
                    )}
                </div>
            </nav>
            <SearchBox />
            <Outlet />
        </>
    );
};

export default NavBar;
