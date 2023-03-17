import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Link, Outlet, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/logo1.png";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../Dropdown";
const NavBar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const userContext = useContext(UserContext);
  const { currentUser } = userContext;
  const isActiveNavbar = isNavbarOpen && "active";
  const handleNavbarOpen = function () {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    <div className="navbar-cotainer">
      <nav className="navbar">
        <Link className="navbar__logo" to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className={`list-container ${isNavbarOpen && "active"}`}>
          <ul className="navbar__list">
            <li className="navbar__item">
              <NavLink
                onClick={handleNavbarOpen}
                className="navbar__link"
                to="/top-rated"
              >
                <span className="title">Movies</span>
                <span className="icon">
                  {!isNavbarOpen && <FontAwesomeIcon icon={faAngleDown} />}
                </span>
              </NavLink>
              <Dropdown
                listItem={["popular", "top-rated", "upcoming", "latest"]}
              />
            </li>
            <li className="navbar__item">
              <NavLink
                onClick={handleNavbarOpen}
                className="navbar__link"
                to="/popular"
              >
                <span className="title">TV show</span>
                <span className="icon">
                  {!isNavbarOpen && <FontAwesomeIcon icon={faAngleDown} />}
                </span>
              </NavLink>
              <Dropdown
                listItem={["popular", "top-rated", "upcoming", "latest"]}
              />
            </li>
            <li>
              <NavLink
                onClick={handleNavbarOpen}
                className="navbar__link"
                to="/trending"
              >
                <span className="title">Celebrities</span>
              </NavLink>
            </li>
          </ul>
          {currentUser ? (
            <ul className="navbar__list">
              <li>
                <NavLink
                  onClick={handleNavbarOpen}
                  className="navbar__link"
                  to="wishlist"
                >
                  Wishlist
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleNavbarOpen}
                  className="navbar__link"
                  to="wishlist"
                >
                  <span className="title">User Profile</span>
                </NavLink>
              </li>
            </ul>
          ) : (
            <div className="navbar__combo-button">
              <Link to="/account" className="login" onClick={handleNavbarOpen}>
                <span className="title">Login</span>
              </Link>
              <Link
                to="/account"
                className="sign-up"
                onClick={handleNavbarOpen}
              >
                <span className="title">Sign up</span>
              </Link>
            </div>
          )}
        </div>
        <div
          className={`navbar__button ${isActiveNavbar}`}
          onClick={handleNavbarOpen}
        >
          <span className={`navbar__icon ${isActiveNavbar}`}>&nbsp;</span>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default NavBar;
