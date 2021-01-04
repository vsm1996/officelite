import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import SignUpPage from "./pages/signup-page/SignUpPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/sign-up" component={SignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
