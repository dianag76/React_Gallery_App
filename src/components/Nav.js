import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => 
  <nav className="main-nav">
    <ul>
      <li>
        <NavLink to="/rain">Rain</NavLink>
      </li>
      <li>
        <NavLink to="/tree">Tree</NavLink>
      </li>
      <li>
        <NavLink to="/comet">Comet</NavLink>
      </li>
    </ul>
  </nav>


export default Nav;
