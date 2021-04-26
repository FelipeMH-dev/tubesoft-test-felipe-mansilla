import React from "react";
import Timestamps from "./components/Timestamps/timestamps";
import Chronometer from "./components/Chronometer/main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navigation } from "./components/Nav/Navbar";
import "./App.css";
import "bootswatch/dist/flatly/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Switch>
          <Route exact path="/timestamps" component={Timestamps} />
          <Route exact path="/" component={Chronometer} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
