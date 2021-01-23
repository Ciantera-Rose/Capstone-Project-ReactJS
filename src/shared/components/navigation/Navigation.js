import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";

const Navigation = (props) => {
  return (
    <React.Fragment>
      <SideDrawer>
        <nav>
          <NavLinks />
        </nav>
      </SideDrawer>
      <Header>
        <button className="nav-menu-btn">
          <span />
          <span />
          <span />
        </button>
        <h1 className="nav-title">
          <Link to="/">Your Locations</Link>
        </h1>
        <nav className="header-nav">
          <NavLinks />
        </nav>
      </Header>
    </React.Fragment>
  );
};

export default Navigation;

// Pass Navigation into Header as child element
// Mobile view: Header needs Side Drawer w/ with hamburger toggle btn feature with the links
// Open / Close The Side Drawer Handler
// Webapp no hamburger drawer feature. Links on top

// Header needs to click
// Header shows user locations
// Btn to open side drawer
// Include NavLinks inside the drawer

// An obj property pathname: A string representing the path to link to.
