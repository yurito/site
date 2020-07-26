import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TitleScreen from "./views/TitleScreen";
import NoMatchRoute from "views/NoMatchRoute";
import Services from "views/Services";
import "./styles/scss/Bootstrap.scss";
import "./styles/scss/Mobile.scss";

type AppConfig = {
  theme: String;
};

export class App extends Component<{}, AppConfig> {
  setTheme(themeName: String = "") {
    this.setState({
      theme: themeName,
    });
  }

  getSystemTheme() {
    let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    this.setTheme(theme);
  }
  componentWillMount() {
    this.getSystemTheme();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <TitleScreen theme={this.state.theme} />
          </Route>
          <Route path={"/servicos"} component={Services} />
          <Route>
            <NoMatchRoute />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
