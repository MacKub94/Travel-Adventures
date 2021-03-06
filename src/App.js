import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";
import SingleTrip from "./pages/SingleTrip";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <Sidebar />
      <Navbar />
      <ScrollToTop>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
