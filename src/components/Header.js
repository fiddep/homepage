import React from "react";
import Link from "next/link";

const Header = () => (
  <header>
    <nav>
      <ul className="horizontalList defaultListStyle">
        <NavItem to="books">Books</NavItem>
        <NavItem to="_blank">Blog</NavItem>
        <NavItem to="news-letters">News Letters</NavItem>
        <NavItem to="_blank">Open Projects</NavItem>
      </ul>
    </nav>
  </header>
);

const NavItem = (props) => (
  <li>
    <Link href={props.to}>
      <a>{props.children}</a>
    </Link>
  </li>
);

export default Header;
