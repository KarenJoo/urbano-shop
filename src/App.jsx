import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Grommet } from 'grommet'
import { theme } from './theme'
import Homepage from './pages/Homepage'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import CheckoutSuccess from './pages/CheckoutSuccess'
import Navbar from './components/Header'
import Footer from './components/Footer'
import Layout from './components/Layout'
import { store } from './store/store'
import { Provider } from 'react-redux'



function App() {
  return (
    <Grommet theme={theme} full style={{ backgroundImage: "url('/assets/images/bg.jpg')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      <Provider store={store}>
        <Router>
          <div className='App'>
            <Layout>
              <Routes>
                <Route exact path='/' element={<Homepage />} />
                <Route path='/product' element={<ProductDetails />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/success' element={<CheckoutSuccess />} />
              </Routes>
            </Layout>
          </div>
        </Router>
      </Provider>
    </Grommet>
  );
}

export default App;
