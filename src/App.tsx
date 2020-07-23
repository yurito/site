import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TitleScreen from "./views/TitleScreen";
import NoMatchRoute from "views/NoMatchRoute";
import Services from "views/Services";
import "./styles/scss/Bootstrap.scss";
import "./styles/scss/Mobile.scss";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={TitleScreen} />
        <Route path={"/servicos"} component={Services} />
        <Route>
          <NoMatchRoute />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
