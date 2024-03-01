import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Grommet } from 'grommet'
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

const theme = {
  global: {
    font: {
      family: 'Lexend, sans-serif',
      size: '18px', 
      height: '20px',
    },
    colors: {
      brand: '#38609d',
      background: '#d6d7db',
      'accent-1': '#9ca9e0',
      focus: '#38609d',
      border: {
        light: '#888888',
      },
      dark: '#000',
      'custom-hover': '#38609d', 
    },
    elevation: {
      light: {
        small: '0 2px 2px #888888', 
      },
    },
  },
};

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
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

export default App
