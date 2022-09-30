import React, { useState } from "react";
import { useEffect } from "react";
import { GrSearch, GrCart, GrClose } from "react-icons/gr";
import { RiAccountCircleLine, RiCloseFill } from "react-icons/ri";
import { CgMenu, CgMenuMotion } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AppContext from "./AppContext";

function Navbar() {
  const { cartItems } = useContext(AppContext);

  let allItems = 0;

  // REIKIA SUTVARKYTI, KAD CIKLAS PASILEISTŲ PO 'ADD TO CART' PASPAUDIMO;
  if (cartItems !== null) {
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems.length !== null) {
        allItems += cartItems[i].amount;
      } else break;
    }
  }

  window.addEventListener('resize', () => open ? setOpen(!open) : null);

  console.log(allItems);

  const [navbar, setNavbar] = useState(false);
  const [searchToggle, setSearchToggle] = useState(true);
  const [open, setOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const click = () => {
    setSearchToggle(!searchToggle);
  };

  const close = () => {
    setSearchToggle(!searchToggle);
  };

  useEffect(() => {
    setTimeout(3000);
  }, [setSearchToggle]);

  useEffect(() => {
    if (!open && searchToggle) {
      document.getElementsByTagName("body")[0].style = "overflow-y: scroll";
    } else {
      document.getElementsByTagName("body")[0].style = "overflow-y: hidden";
    }
  });

  return (
    <div className={navbar ? "nav-container active" : "nav-container"}>
      <div className="nav-row">
        <div className="nav-col-left">
          {!open ? (
            <CgMenu className="hamburger" onClick={() => setOpen(!open)} />
          ) : (
            <CgMenuMotion
              className="hamburger"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>
        <div className="nav-col-1">
          <NavLink to="/" className="menu-item">
            <h1>LOGO.</h1>
          </NavLink>
        </div>
        <div
          className={
            !open ? "nav-col-2 nav-mobile-closed" : "nav-col-2 nav-mobile"
          }
        >
          {open ? (
            <GrClose className="btn-close" onClick={() => setOpen(!open)} />
          ) : null}
          <NavLink
            to="/productlist/mens"
            className="menu-item"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "crimson",
                    fontWeight: "bold",
                  }
                : undefined
            }
          >
            MENS
          </NavLink>
          <NavLink
            to="/productlist/womens"
            className="menu-item"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "crimson",
                    fontWeight: "bold",
                  }
                : undefined
            }
          >
            WOMENS
          </NavLink>
          <NavLink
            to="/blog"
            className="menu-item"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "crimson",
                    fontWeight: "bold",
                  }
                : undefined
            }
          >
            BLOG
          </NavLink>
          <NavLink
            to="/sale"
            className="menu-item"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "crimson",
                    fontWeight: "bold",
                  }
                : undefined
            }
          >
            SALE
          </NavLink>
        </div>
        <div className="nav-col-3">
          <button onClick={click}>
            <GrSearch className="icon-search" />
          </button>
          <NavLink
            to="/cart"
            className="menu-item"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "crimson",
                    fontWeight: "bold",
                  }
                : undefined
            }
          >
            <GrCart />
            <b style={{ color: "crimson" }}> {allItems ? allItems : null}</b>
          </NavLink>
          <NavLink
            to="/account"
            className="menu-item"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "crimson",
                    fontWeight: "bold",
                  }
                : undefined
            }
          >
            <RiAccountCircleLine />
          </NavLink>
        </div>
      </div>
      <div className={searchToggle ? "modal" : "modal-open"}>
        <div
          className={searchToggle ? "search-open search-close" : "search-open"}
        >
          <input placeholder="Search Your Clothes"></input>
          <span onClick={close} className="close">
            <RiCloseFill />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
