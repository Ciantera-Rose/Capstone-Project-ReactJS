import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewLocation from "./locations/pages/NewLocation";
import UserLocations from "../src/locations/pages/UserLocations";
import UpdateLocation from "../src/locations/pages/UpdateLocation";
import Navigation from "./shared/components/navigation/Navigation";

const App = () => {
  return (
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
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;

// Main wraps header elements. Profile card needs to be below
// Style the header and Nav links for web app
// Style humburger btn
// Use dynamic route for userId
