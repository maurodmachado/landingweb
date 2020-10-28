import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import './assets/css/bootstrap.min.css';
import "./assets/scss/paper-kit.scss?v=1.2.0";
import "./assets/demo/demo.css?v=1.2.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";

// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" />
      <Route
        path="/nucleo-icons"
        >
        <NucleoIcons/>
        </Route>
      <Route
        path="/landing-page"
        >
        <LandingPage/>
        </Route>
      <Route
        path="/profile-page"
      >
      <ProfilePage/>
      </Route>
      <Route
        path="/register-page"
      >
        <RegisterPage/>
      </Route>
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById("root")
);
