import { BrowserRouter,Routes,Route } from 'react-router'
import RootLayOut from './RootLaout/RootLayOut'
import Home from './Page/Home'
import Products from './Page/Products'
import Contact from './Page/Contact'
import About from './Page/About'
import ProductDetail from './Page/ProductDetail'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootLayOut />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/abouts' element={<About />}></Route>
            <Route path='/productDetail/:id' element={<ProductDetail />}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>


  )
}

export default App
