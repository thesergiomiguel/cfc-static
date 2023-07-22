import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Homepage } from "./pages/homepage";
import { Registration } from "./pages/registration";
import "./assets/scss/index.scss";
import { useEffect } from "react";
import { init } from "./dom-scripts/on-dom-content-loaded";

// TODO:
// newsletter widget
// register sidebar
// logo sidebar toggle (spin + close)

export function App() {
  useEffect(() => {
    // This should be inside a <script /> element at the bottom of the page.
    init();
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
