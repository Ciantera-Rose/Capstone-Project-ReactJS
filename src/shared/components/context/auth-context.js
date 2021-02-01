import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  login: () => {},
  logout: () => {},
});

export default AuthContext;

// TODO: add to app, wrap app w/ AuthProvider like Auth0 to
// handle access to pages loggedIn/!loggedIn ...
