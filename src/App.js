import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

function App() {
  return (
      <Router>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/" element={<ProductPage />} />
        <Route exact path="/" element={<About />} />
        <Route exact path="/" element={<Contact />} />
        <Route exact path="/" element={<Cart />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
