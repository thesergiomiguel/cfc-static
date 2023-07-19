import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Homepage } from "./pages/homepage";
import { Registration } from "./pages/registration";
import "./assets/scss/index.scss";
import { useEffect } from "react";
import { setupSidebars } from "./dom-scripts/sidebars";

export function App() {
  useEffect(() => {
    // Once React gets removed, these should go inside a listener for DOMContentLoaded.
    setupSidebars();
  }, []);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>

      <Footer />
      <div className="Sidebar__backdrop" />
    </BrowserRouter>
  );
}
