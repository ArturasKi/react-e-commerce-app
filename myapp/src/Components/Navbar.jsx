import React from "react";
import { GrSearch, GrCart } from 'react-icons/gr';
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-row">
        <div className="nav-col-1">
          <NavLink to="/" className="menu-item"><h1>LOGO.</h1></NavLink>
        </div>
        <div className="nav-col-2">
            <div className="search-container">
                <input></input>
                <GrSearch className="icon-search" />
            </div>
        </div>
        <div className="nav-col-3">
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
                        }>REGISTER</NavLink>
            <NavLink to="/register" className="menu-item" style={({ isActive }) => // funkcija gauna argumentą isActive, jei true vienas stilus, false - kitas;
                        isActive ? {
                            color: 'crimson',
                            fontWeight: 'bold'
                        } : undefined
                        }>SIGN IN</NavLink>
            <NavLink to="/cart" className="menu-item" style={({ isActive }) => // funkcija gauna argumentą isActive, jei true vienas stilus, false - kitas;
                        isActive ? {
                            color: 'crimson',
                            fontWeight: 'bold'
                        } : undefined
                        }><GrCart /></NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
