import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ProductDetails from "./Pages/ProductDetails";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import CheckoutSuccess from "./Pages/CheckoutSuccess";
import Navbar from "./components/Header/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<CheckoutSuccess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
