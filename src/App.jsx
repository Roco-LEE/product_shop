import './App.css'
import Header from './layouts/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './layouts/Main'
import ProductList from './pages/ProductList'
import ProductInfo from './pages/ProductInfo'
import AddProduct from './pages/AddProduct'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Header></Header>
          {/* <Main></Main> */}
          <Routes>
            <Route path='/' element={<Main></Main>} />
            <Route path='/products' element={<ProductList></ProductList>} />
            <Route path='/products/:id' element={<ProductInfo></ProductInfo>}/>
            <Route path='/add-product' element={<AddProduct></AddProduct>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
