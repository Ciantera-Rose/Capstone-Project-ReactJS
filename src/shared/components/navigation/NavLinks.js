import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "../context/auth-context";
//import AuthenticationButton from "../../../user/auth/Authentication-Button";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to={`/${auth.userId}/locations`}>MY LOCATIONS</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/locations/new">ADD LOCATION</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">LOGIN</NavLink>
          {/* <AuthenticationButton /> */}
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
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
