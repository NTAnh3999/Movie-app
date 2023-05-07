import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../Logo";
import { useEffect } from "react";
import Button from "../Button";
import { SignOutUser } from "../../services/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { AVATAR_DEFAULT_URL } from "../../common";
const Layout = ({ children }) => {
  const userContext = useContext(UserContext);
  const { currentUser } = userContext;
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleLogout = async () => {
    await SignOutUser();
    navigate("/");
  };
  return (
    <>
      <header className="navbar-container">
        <nav className={`navbar ${offset >= 95 && "active"}`}>
          <Logo />
          <div className={`list-container ${isBurgerActive && "active"}`}>
            <ul className="navbar__list">
              <li className="navbar__item">
                <NavLink className="navbar__link" to="/movie">
                  <span className="title">Movies</span>
                </NavLink>
              </li>
              <li className="navbar__item">
                <NavLink className="navbar__link" to="/tv">
                  <span className="title">TV show</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="navbar__link" to="/celebrities">
                  <span className="title">Celebrities</span>
                </NavLink>
              </li>
            </ul>
            {currentUser ? (
              !isBurgerActive ? (
                <div className="navbar__account">
                  <img
                    src={currentUser.photoURL ?? AVATAR_DEFAULT_URL}
                    alt="avatar"
                  />
                  <FontAwesomeIcon icon={faChevronDown} />
                  <ul className="dropdown">
                    <li className="dropdown__item">
                      <NavLink className="dropdown__link" to="/profile">
                        <span className="title">Profile</span>
                      </NavLink>
                    </li>
                    <li className="dropdown__item">
                      <NavLink className="dropdown__link" to="/wishlist">
                        <span className="title">Wishlist</span>
                      </NavLink>
                    </li>
                    <li className="dropdown__item" onClick={handleLogout}>
                      <span className="title">Logout</span>
                    </li>
                  </ul>
                </div>
              ) : (
                <ul className="navbar__list">
                  <li className="navbar__item">
                    <NavLink className="navbar__link" to="/profile">
                      <span className="title">Profile</span>
                    </NavLink>
                  </li>
                  <li className="navbar__item">
                    <NavLink className="navbar__link" to="/wishlist">
                      <span className="title">Wishlist</span>
                    </NavLink>
                  </li>
                  <li className="navbar__item" onClick={handleLogout}>
                    <span className="navbar__link">
                      <span className="title">Logout</span>
                    </span>
                  </li>
                </ul>
              )
            ) : (
              <Link to="/account" className="sign-up">
                <Button className="btn--primary">Account</Button>
              </Link>
            )}
          </div>
          <div
            className={`navbar__button ${isBurgerActive && "active"}`}
            onClick={() => setIsBurgerActive(!isBurgerActive)}
          >
            <span
              className={`navbar__icon ${isBurgerActive && "active"}`}
            ></span>
          </div>
        </nav>
      </header>
      <main style={{ paddingBottom: "4rem" }}>{children}</main>
      <footer className="footer">
        <div className="footer__content container">
          <div className="footer__content__logo">
            <Logo />
          </div>
          <div className="footer__content__menus">
            <div className="footer__content__menu">
              <Link to="/">Home</Link>
              <Link to="/">Contact</Link>
              <Link to="/">About us</Link>
            </div>
            <div className="footer__content__menu">
              <Link to="/">Live</Link>
              <Link to="/">FAQ</Link>
              <Link to="/">Pravacy policy</Link>
            </div>
            <div className="footer__content__menu">
              <Link to="/">You must watch</Link>
              <Link to="/">Recent release</Link>
              <Link to="/">Top IMDB</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
