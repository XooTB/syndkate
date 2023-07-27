import { Route, Routes, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import useBackground from "./hooks/useBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import NavBar from "./sections/NavBar";
import Footer from "./sections/Footer";
import Search from "./pages/Search";

function App() {
  const queryClient = new QueryClient();
  const location = useLocation();
  const background = useBackground(location.pathname);

  return (
    <QueryClientProvider client={queryClient}>
      <div
        className="App bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      >
        <nav className="w-full">
          <NavBar />
        </nav>
        <div className="min-h-[calc(100vh-110px)] md:min-h-[calc(100vh-200px)]">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
        <div className="h-[100px]">
          <Footer />
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
