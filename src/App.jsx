import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FormPage from "./pages/FormPage";
import MapPage from "./pages/MapPage";
import DataPage from "./pages/DataPage";
import "./App.css";


const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/data" element={<DataPage />} />
        </Routes>
        <Footer />
      </Router>
    </GlobalProvider>
  );
};

export default App;
