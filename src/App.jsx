import { Routes, Route } from "react-router-dom";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Home from "./routes/home/Home";
import Header from "./components/header/Header";
import Partner from "./routes/partner/Partner";
import ProductView from "./routes/productView/ProductView";
import Footer from "./components/footer/Footer";
import MainCaterogy from "./components/mainCaterogy/MainCaterogy";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/maincategory/:categoryname" element={<MainCaterogy/>} />
        <Route path="/productView/:id" element={<ProductView />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
