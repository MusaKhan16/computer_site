import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Styling
import './index.css'
import './App.css'
import './utils.css'

// Pages
import Homepage from './homepage.js'
import CpuPage from './cpu_page.js'
import GpuPage from './gpu-page.js'
import RamPage from './ram_page.js'
import About from './about.js'
import NotFound from './not_found.js'
import ProductPage from './product_page.js'
import DynamicProductPage from './dynamic.js'
import AllProducts from './all_products.js'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/products' element={<AllProducts />} />
        <Route exact path='/products/:type/:title' element={<DynamicProductPage />} />
        {/* Try to add a dynamic route such that ProductPage will work with any product two paramters*/}
        <Route exact path='/processors' element={<CpuPage />} />
        <Route exact path='/video-cards' element={<GpuPage />} />
        <Route exact path='/ram' element={<RamPage />} />
        <Route exact path='/processors/:title' element={<ProductPage type='cpu' />} />
        <Route exact path='/video-cards/:title' element={<ProductPage type='gpu' />} />
        <Route exact path='/ram/:title' element={<ProductPage type='ram' />} />
        <Route exact path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

