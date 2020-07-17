import React, { Fragment, useEffect } from "react";
import SearchBar from "./components/layout/SearchBar";
import Jobs from "./components/jobs/Jobs";
import { Provider } from "react-redux";
import store from "./store";
// Import Materialize
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Initializes Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <Jobs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
