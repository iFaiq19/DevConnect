import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import NotFound from "./components/common/notFound.jsx";
import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/Register.jsx";
import Store from "./redux/store/store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken.js";
import {
  logoutCurrentUser,
  setCurrentUser,
} from "./redux/actions/authAction.js";
import { clearCurrentProfile } from "./redux/actions/profileAction";
import PrivateRoute from "./components/common/PrivateRoute.jsx";
import CreateProfile from "./components/layout/CreateProfile.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";

import "./App.css";
import EditProfile from "./components/edit-profile/EditProfile.jsx";
import AddEducation from "./components/add-credentials/AddEducation";
import AddExperience from "./components/add-credentials/AddExperience";
import Profiles from "./components/profiles/Profiles.jsx";
import Profile from "./components/profile/Profile.jsx";

//Check for token
if (localStorage.jwtToken) {
  const userToken = localStorage.jwtToken;
  //Set auth token header off
  setAuthToken(userToken);
  //Decode token and get user info
  const decoded = jwt_decode(userToken);
  //Set user and isAuthenticated
  Store.dispatch(setCurrentUser(decoded));

  //Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //Logout user
    Store.dispatch(logoutCurrentUser());
    //Clear current profile
    Store.dispatch(clearCurrentProfile());
    //Redirect to login
    window.location.href("/login");
  }
}

function App() {
  return (
    <Provider store={Store}>
      <React.Fragment>
        <ToastContainer />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Register} />
          <Route path="/developers" component={Profiles} />
          <Route path="/profile/:handle" component={Profile} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/create-profile" component={CreateProfile} />
          <PrivateRoute path="/edit-profile" component={EditProfile} />
          <PrivateRoute path="/add-experience" component={AddExperience} />
          <PrivateRoute path="/add-education" component={AddEducation} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </React.Fragment>
    </Provider>
  );
}

export default App;
