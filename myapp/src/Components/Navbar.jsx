import React, { useState } from "react";
import { useEffect } from "react";
import { GrSearch, GrCart } from 'react-icons/gr';
import { RiAccountCircleLine } from 'react-icons/ri';
import { NavLink } from "react-router-dom";

function Navbar() {

  const [navbar, setNavbar] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 90) {
      setNavbar(true)
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  const click = () => {
      setSearchToggle(!searchToggle)
    }

  useEffect(() => {
    setTimeout(3000);
  }, [setSearchToggle])

  return (
    <div className={navbar ? 'nav-container active' : 'nav-container'}>
      <div className="nav-row">
        <div className="nav-col-1">
          <NavLink to="/" className="menu-item"><h1>LOGO.</h1></NavLink>
        </div>
        <div className="nav-col-2">
            <NavLink to="/productlist/mens" className="menu-item" style={({ isActive }) => // funkcija gauna argumentą isActive, jei true vienas stilus, false - kitas;
                        isActive ? {
                            color: 'crimson',
                            fontWeight: 'bold'
                        } : undefined
                        }>MENS</NavLink>
            <NavLink to="/productlist/womens" className="menu-item" style={({ isActive }) => // funkcija gauna argumentą isActive, jei true vienas stilus, false - kitas;
                        isActive ? {
                            color: 'crimson',
                            fontWeight: 'bold'
                        } : undefined
                        }>WOMENS</NavLink>
            <NavLink to="/register" className="menu-item" style={({ isActive }) => // funkcija gauna argumentą isActive, jei true vienas stilus, false - kitas;
                        isActive ? {
                            color: 'crimson',
                            fontWeight: 'bold'
                        } : undefined
                        }>BLOG</NavLink>
            <NavLink to="/register" className="menu-item" style={({ isActive }) => // funkcija gauna argumentą isActive, jei true vienas stilus, false - kitas;
                        isActive ? {
                            color: 'crimson',
                            fontWeight: 'bold'
                        } : undefined
                        }>SALE</NavLink>
           
        </div>
        <div className="nav-col-3">
            <button onClick={click}><GrSearch className="icon-search" /></button>
            <NavLink to="/cart" className="menu-item" style={({ isActive }) => // funkcija gauna argumentą isActive, jei true vienas stilus, false - kitas;
                        isActive ? {
                            color: 'crimson',
                            fontWeight: 'bold'
                        } : undefined
                        }><GrCart /></NavLink>
            <NavLink to="/account" className="menu-item" style={({ isActive }) => // funkcija gauna argumentą isActive, jei true vienas stilus, false - kitas;
                        isActive ? {
                            color: 'crimson',
                            fontWeight: 'bold'
                        } : undefined
                        }><RiAccountCircleLine /></NavLink>
        </div>
      </div>
      <div className={searchToggle ? "search-open search-close" : "search-open"}>
        <input></input>
      </div>
    </div>
  );
}

export default Navbar;