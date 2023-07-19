import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Homepage } from "./pages/homepage";
import { Registration } from "./pages/registration";

export function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
