import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Dashboard from "./pages/Dashboard/Dashboard";
import Episodes from "./pages/Episodes/Episodes";
import Profile from "./pages/Profile/Profile";
import SingleEpisode from "./pages/SingleEpisode/SingleEpisode";
import Error from "./pages/Error/Error";
import Characters from "./pages/Characters/Characters";
import SingleCharacter from "./pages/SingleCharacter/SingleCharacter";
import Trivia from "./pages/Trivia/Trivia";

export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/profile/:user_id" component={Profile} />
    <Route exact path="/episodes" component={Episodes} />
    <Route path="/episodes/:episode" component={SingleEpisode} />
    <Route exact path="/characters" component={Characters} />
    <Route path="/characters/:character" component={SingleCharacter} />
    <Route path="/error" component={Error} />
    <Route exact path="/trivia" component={Trivia} />
    <Route path="*" component={Error} />
  </Switch>
);
