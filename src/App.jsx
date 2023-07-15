import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import NavBar from "./sections/NavBar";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="">
      <nav className="w-full">
        <NavBar />
      </nav>
      <div className="min-h-[calc(100vh-110px)] md:min-h-[calc(100vh-200px)] md:px-[100px]">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
      <div className="h-[100px]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
