import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link, Outlet, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SignOutUser } from "../../firebase";

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
  const { currentUser } = userContext;
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
          {currentUser ? (
            <div className="user">
              <img src={currentUser.photoURL} alt="User" className="avatar" />
              <span className="user-info">
                <ul className="user-info__list">
                  <li className="user-info__item">
                    <Link className="user-info__link" to="/account-info">
                      Account information
                    </Link>
                  </li>
                  <li className="user-info__item">
                    <Link className="user-info__link" to="/wishlist">
                      Wishlist
                    </Link>
                  </li>
                  <li className="user-info__item">
                    <Link
                      className="user-info__link"
                      to="/"
                      onClick={SignOutUser}
                    >
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </span>
            </div>
          ) : (
            <Link to="/account" className="account">
              <FontAwesomeIcon icon={faUser} />
              <span className="title">Account</span>
            </Link>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
