import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import New from "./pages/New";
import Donation from "./pages/Donation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<New />} />
          <Route path="/home" element={<Home />} />
          <Route path="/donation" element={<Donation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
