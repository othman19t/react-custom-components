import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./pages/form";
import Images from "./pages/images";
import Par from "./components/par";
import H1 from "./components/h1";
function App() {
  return (
    <div className="App">
      <Images />
      <Par parSecondClassName="secondClassName">this is the text</Par>
      <H1 h1SecondClassName="secondClassName">this is the text</H1>
    </div>
  );
}

export default App;
