import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import BackDrop from "../../../presentational-components/BackDrop";

const Navigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <BackDrop onClick={closeDrawer} />}
      {drawerIsOpen && (
        <SideDrawer>
          <nav className="drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <Header>
        <button className="nav-menu-btn" onClick={openDrawer}>
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
// Btn to open side drawer =>  useState to open close drawer
// Include NavLinks inside the drawer

// An obj property pathname: A string representing the path to link to.
