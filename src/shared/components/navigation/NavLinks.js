import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      {/* render MY LOCATIONS only if logged in */}
      <li>
        <NavLink to="/u1/locations">MY LOCATIONS</NavLink>
      </li>
      {/* render ADD PLACE only if logged in */}
      <li>
        <NavLink to="/locations/new">ADD PLACE</NavLink>
      </li>
      {/* render LOGIN if NOT logged in */}
      <li>
        <NavLink to="/auth">LOGIN</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;

// LINKS => React router DOM docs
// <NavLink>
// A special version of the <Link> that will add styling
// attributes to the rendered element when it matches the current URL.

// All Users
// My Locations
// Add Location
// Login

// Links in div or ul..

// => Navigation Component
