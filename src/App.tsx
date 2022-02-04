import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

const NoMatch = () => <div>No match</div>;

function App() {
  return (
    <div data-testid="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details" component={Details} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
