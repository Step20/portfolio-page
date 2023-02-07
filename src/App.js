import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import "./style/main.scss";
import Home from "./components/HomeComponent";
import Projects from "./components/ProjectsComponent";
import About from "./components/AboutComponent";
import { PageNav } from "./components/NavComponent";

function App() {
  return (
    <div className="App">
      <HorizontalScroll reverseScroll={true} pageLock={true}>
        <div className="main">
          <Home />
        </div>
        <div className="other">
          <About />
        </div>
        <div className="other">
          <Projects />
        </div>
      </HorizontalScroll>
    </div>
  );
}

export default App;
