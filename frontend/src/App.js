import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import NotFound from "./components/common/notFound.jsx";
import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/Register.jsx";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;