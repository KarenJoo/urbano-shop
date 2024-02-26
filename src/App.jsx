import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<CheckoutSuccess />} />
        </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
