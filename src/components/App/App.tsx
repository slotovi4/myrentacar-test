import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "../../store";

// Components
import Header from "../Header/Header";
import AutoList from "../AutoList/AutoList";

const MainPage = () => (
  <React.Fragment>
    <AutoList />
  </React.Fragment>
);

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Header />
        <Router>
          <Switch>
            <Route exact={true} path="/" component={MainPage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
