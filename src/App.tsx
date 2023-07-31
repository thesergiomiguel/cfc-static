import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Homepage } from "./pages/homepage";
import { Registration } from "./pages/registration";
import "./assets/scss/index.scss";
import { useEffect } from "react";
import { init } from "./dom-scripts/on-dom-content-loaded";
import { NewsletterWidget } from "./components/NewsletterWidget";
import { LoginSidebar } from "./components/LoginSidebar";
import { Editorial } from "./pages/editorial";
import { Community } from "./pages/community";
import { ContactSidebar } from "./components/Contact";
import { About } from "./pages/About";

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
        <Route path="/community" element={<Community />} />
        <Route path="/editorial" element={<Editorial />} />
        <Route path="/about" element={<About />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>

      <Footer />

      <NewsletterWidget />
      <LoginSidebar />
      <ContactSidebar />

      <div className="Sidebar__backdrop" />
    </BrowserRouter>
  );
}
