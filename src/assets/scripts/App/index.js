import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Home = React.lazy(() => import("./Views/Home/index"));
const Band = React.lazy(() => import("./Views/Band/index"));
const News = React.lazy(() => import("./Views/News/index"));
const Tour = React.lazy(() => import("./Views/Tour/index"));
const NotFound = React.lazy(() => import("./Views/404/index"));

export default () => {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Home />}></Route>
          <Route path="/band" render={() => <Band />}></Route>
          <Route path="/news" render={() => <News />}></Route>
          <Route path="/tour" render={() => <Tour />}></Route>
          <Route path="*" render={() => <NotFound />}></Route>
        </Switch>
        <Footer />
      </Router>
    </React.Suspense>
  );
};
