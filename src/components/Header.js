import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav>
      <ul className="horizontalList defaultListStyle">
        <NavItem to="books">Books</NavItem>
        <NavItem to="_blank">Blog</NavItem>
        <NavItem to="newsletters">News Letters</NavItem>
        <NavItem to="_blank">Open Projects</NavItem>
      </ul>
    </nav>
  </header>
);

const NavItem = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default Header;
