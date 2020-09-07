import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Dashboard from "./pages/Dashboard/Dashboard";
import Episodes from "./pages/Episodes";
import Profile from "./pages/Profile";
import SingleEpisode from "./pages/SingleEpisode";
import Error from "./pages/Error";

export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/profile/:user_id" component={Profile} />
    <Route exact path="/episodes" component={Episodes} />
    <Route path="/episodes/:episode" component={SingleEpisode} />
    <Route path="*" component={Error} />
  </Switch>
);
