import React from "react";
import "./App.css";
import Header from "./components/Header";
import CreativeDesigner from "./components/CreativeDesigner";
import AboutMe from "./components/AboutMe";
import Ornament from "./components/Ornament";
import Services from "./components/Services";
function App() {
  return (
    <>
      <Header />
      <CreativeDesigner />
      <AboutMe />
      <Ornament />
      <Services />
    </>
  );
}

export default App;
