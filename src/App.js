import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

//import Loading from "../src/presentational-components/Loading";
import Users from "./user/pages/Users";
import NewLocation from "./locations/pages/NewLocation";
import UserLocations from "../src/locations/pages/UserLocations";
import UpdateLocation from "../src/locations/pages/UpdateLocation";
import AuthContext from "../src/shared/components/context/auth-context";
import Auth from "../src/user/pages/Auth";
import Navigation from "./shared/components/navigation/Navigation";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  });
  // const { isLoading } = useAuth0();

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login: login, logout: logout }}>
      <Router>
        <Navigation />
        <main>
          <Switch>
            <Route path="/" exact>
              <Users />
            </Route>
            <Route path="/:userId/locations" exact>
              <UserLocations />
            </Route>
            <Route path="/locations/new" exact>
              <NewLocation />
            </Route>
            <Route path="/locations/:locationId">
              <UpdateLocation />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;

// Main wraps header elements. Profile card needs to be below
// Style the header and Nav links for web app
// Style humburger btn
// Use dynamic route for userId
