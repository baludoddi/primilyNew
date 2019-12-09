import React from "react";

import "./styles.scss";
import CustomLink from "../CustomLink";

export const NavbarTemplate = ({ data }) => (
  // <nav className="navbar">
  //   <div className="container  navbar-container">
  //     {data.menuItems.length > 0 && (
  //       <ul className="navbar-menu">
  //         {data.menuItems.map(menuItem => (
  //           <li key={menuItem.linkURL} className="navbar-menuItem">
  //             <CustomLink
  //               linkType={menuItem.linkType}
  //               linkURL={menuItem.linkURL}
  //               className="navbar-menuLink"
  //             >
  //               {menuItem.label}
  //             </CustomLink>
  //           </li>
  //         ))}
  //       </ul>
  //     )}
  //   </div>
  // </nav>
  <div className="navbar-fixed nav-div">
  <nav className="blue">
    <div className="nav-wrapper container">
      <a href="#" className="brand-logo">Primily</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Features</a></li>
        <li><a href="badges.html">Describe</a></li>
        <li><a href="collapsible.html">Pricing</a></li>
        <li><a href="badges.html">Demo</a></li>
        <li><a href="collapsible.html">About Us</a></li>
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
