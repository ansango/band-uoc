import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as View from "./Views/index";

export default () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/band">Band</Link>
          </li>
          <li>
            <Link to="/bio">Bio</Link>
          </li>
          <li>
            <Link to="/tour">Tour</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <View.Home />
          </Route>
          <Route path="/band">
            <View.Band />
          </Route>
          <Route path="/bio">
            <View.Bio />
          </Route>
          <Route path="/tour">
            <View.Tour />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
