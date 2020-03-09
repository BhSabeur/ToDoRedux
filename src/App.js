import React from "react";

import "./App.css";
import AddItems from "./components/AddItems";

import ListItems from "./components/ListItems";

function App() {
  return (
    <div className="App">
      <AddItems />
      <ListItems />
    </div>
  );
}

export default App;
