import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  <nav className="main-nav">
    <ul>
      <li>
        <NavLink href="/cats">Cats</NavLink>
      </li>
      <li>
        <NavLink href="/dogs">Dogs</NavLink>
      </li>
      <li>
        <NavLink href="/computers">Computers</NavLink>
      </li>
    </ul>
  </nav>;
};

export default Nav;
