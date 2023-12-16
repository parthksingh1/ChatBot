import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import New from "./pages/New";
// import Donation from "./pages/donation";
import Gallery from "./pages/gallery";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<New />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/donation" element={<Donation />} /> */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
