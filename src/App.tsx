import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import FullMenu from "./pages/FullMenu";
import PizzaMenu from "./pages/PizzaMenu";
import DessertsMenu from "./pages/DessertsMenu";
import DrinksMenu from "./pages/DrinksMenu";
import Contact from "./pages/Contact";
import LegalPage from "./pages/LegalPage";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu/full-menu" element={<FullMenu />} />
          <Route path="menu/pizza" element={<PizzaMenu />} />
          <Route path="menu/deserts" element={<DessertsMenu />} />
          <Route path="menu/drinks" element={<DrinksMenu />} />
          <Route path="contact" element={<Contact />} />
          <Route path="useful-pages/:slug" element={<LegalPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
