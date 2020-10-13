import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./pages/form";
import Images from "./pages/images";
import Par from "./components/par";

function App() {
  return (
    <div className="App">
      <Images />
      <Par parSecondClassName="secondClassName">this is the text</Par>
    </div>
  );
}

export default App;
