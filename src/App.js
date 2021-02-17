import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
//import { useAuth0 } from "@auth0/auth0-react";

//import Loading from "../src/presentational-components/Loading";
import Users from './user/pages/Users';
import NewLocation from './locations/pages/NewLocation';
import UserLocations from '../src/locations/pages/UserLocations';
import UpdateLocation from '../src/locations/pages/UpdateLocation';
import AuthContext from '../src/shared/components/context/auth-context';
import Auth from '../src/user/pages/Auth';
import Navigation from './shared/components/navigation/Navigation';
import { useAuth } from './shared/components/hooks/auth-hook';

const App = () => {
  const { token, login, logout, userId } = useAuth();
  let routes;

  if (token) {
    routes = (
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
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/locations" exact>
          <UserLocations />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout
      }}
    >
      <Router>
        <Navigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
