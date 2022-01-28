import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

/**
 * App Component is the base that gets rendered on base route '/'
 * <outlet/> - It is kind of a placeholder for the other(children) routes to get rendered(as per latest react-router-dom@6).
 * @returns JSX.Element
 */
const App = () => (
  <div className="App">
    <header>
      <img src="https://www.dataminr.com/hubfs/dataminrblue.svg" alt="logo" />
    </header>
    <div className="content-pane">
      <Outlet />
    </div>
  </div>
);

export default App;
