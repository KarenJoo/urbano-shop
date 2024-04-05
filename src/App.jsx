import { Route, Routes } from 'react-router-dom'
import { Grommet } from 'grommet'
import { theme } from './theme'
import Homepage from './pages/Homepage'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Layout from './components/Layout'
import RouteNotFound from './components/Errors/PageError'
import { store } from './store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Grommet theme={theme}>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path="*" element={<RouteNotFound />} />         
             </Routes>
        </Layout>
      </Provider>
    </Grommet>
  )
}

export default App
