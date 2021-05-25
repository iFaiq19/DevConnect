import "./App.css";
import React from "react";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Landing />
      <Footer />
    </React.Fragment>
  );
}

export default App;
