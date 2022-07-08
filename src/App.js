import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Smash from "./pages/Smash";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/smash" element={<Smash/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
