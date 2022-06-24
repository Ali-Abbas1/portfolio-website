import React from "react";
import "./App.css";
import Header from "./components/Header";
import CreativeDesigner from "./components/CreativeDesigner";
import AboutMe from "./components/AboutMe";
import Ornament from "./components/Ornament";
import Services from "./components/Services";
import Contributors from "./components/Contributors";
import RegularPortfolio from "./components/RegularPortfolio";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Header />
      <CreativeDesigner />
      <AboutMe />
      <Ornament />
      <Services />
      <Contributors />
      <RegularPortfolio />
      <Contact />
    </>
  );
}

export default App;
