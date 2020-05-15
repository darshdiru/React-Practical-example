import React from "react";
import NavBar from "./Components/NavBar";
import "./App.css";
import SideBar from "./Components/SideBar";
import DataFetch from "./Hooks/DataFetch";
import MountCycle from "./LifeCycle/MountCycle";
import Footer from "./Components/Footer";
import Content from "./Components/Content";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="body-content">
        <div className="row mb-2">
          <div className="col-4">
            <SideBar />
          </div>
          <div className="col-4">
            <MountCycle />
          </div>
          <div className="col-4">
            <DataFetch />
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <Content />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
