import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Styling
import './index.css'
import './App.css'
import './utils.css'

// Pages
import Homepage from './homepage'
import CpuPage from './cpu_page'
import GpuPage from './gpu-page'
import RamPage from './ram_page'
import About from './about'
import NotFound from './not_found'
import ProductPage from './product_page'
import AllProducts from './all_products'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/products' element={<AllProducts />} />
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

