import React from "react";
import { GrSearch, GrCart } from 'react-icons/gr';

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-row">
        <div className="nav-col-1">
            <div className="search-container">
                <input></input>
                <GrSearch className="icon-search" />
            </div>
        </div>
        <div className="nav-col-2">
            <h1>LOGO.</h1>
        </div>
        <div className="nav-col-3">
            <div className="menu-item">REGISTER</div>
            <div className="menu-item">SIGN IN</div>
            <div className="menu-item">
                <GrCart />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
