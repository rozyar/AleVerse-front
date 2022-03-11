import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/AleVerse.png";

const Menu = () => (
  <>
    <p>
      <Link to='/' element>Home</Link> 
    </p>
    <p>
    <Link to="/Explore">Explore</Link>
    </p>
    <p>
      <Link to="/create">Create</Link>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="aleVerse_navbar">
      <div className="aleVerse_navbar-links">
        <div className="aleVerse_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="aleVerse_navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="aleVerse_navbar-sign">
        <p><Link to='/SignIn'> Sign in </Link></p>
        <Link to='/SignUp'><button type="button">Sign up</button></Link>
      </div>
      <div className="aleVerse_navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="aleVerse_navbar-menu_container scale-up-center">
            <div className="aleVerse_navbar-menu-links">
              <Menu />
              <div className="aleVerse_navbar-menu_container-links-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
