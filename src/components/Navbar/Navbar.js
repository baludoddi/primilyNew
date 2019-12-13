import React from "react";

import "./styles.scss";
import CustomLink from "../CustomLink";

export const NavbarTemplate = ({ data }) => (
  <div className="navbar-fixed nav-div">
  <nav className="indigo darken-4">
    <div className="nav-wrapper container">
      <a href="#" className="brand-logo">Primily</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
          {data.menuItems.map(menuItem => (
            <li key={menuItem.linkURL}>
              <a href={menuItem.linkURL}>
                {menuItem.label}
              </a>
            </li>
          ))}
        </ul>
    </div>
  </nav>
  </div>
);

const Navbar = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data.edges[0].node.frontmatter;
  return <NavbarTemplate data={data} />;
};

export { Navbar };
