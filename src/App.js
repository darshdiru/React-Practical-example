import React from "react";
import NavBar from "./Components/NavBar";
import "./App.css";
import SideBar from "./Components/SideBar";
import DataFetch from "./Hooks/DataFetch";
import MountCycle from "./LifeCycle/MountCycle";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="row">
        <div className="col-4">
          <SideBar />
        </div>
        <div className="col-4 flex-column justify-content-center">
          <MountCycle />
        </div>

        <div className="col-4">
          <DataFetch />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
