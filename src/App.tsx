import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Homepage } from "./pages/homepage";
import { Registration } from "./pages/registration";
import "./assets/scss/index.scss";
import { useEffect } from "react";
import { setup } from "./dom-scripts/on-dom-content-loaded";

export function App() {
  useEffect(() => {
    // This should be inside a <script /> element at the bottom of the page.
    setup();
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
