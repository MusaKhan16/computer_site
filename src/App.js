import './App.css'
import './utils.css'
import Header from './header'
import Body from './body'
import axios from 'axios'
import { useState } from 'react'
//import Footer from './footer'

function App() {

  useState(() => {
    axios.post('/.netlify/functions/components', {
      title: "RTX 3090",
      description: "This graphics card hits harder than ever!\nIt is the latest and greatest!",
      specifications: {
        cudaCoreCount: 10164,
        clockSpeed: '10Mhgz'
      },
      price: 1700,
    }).then(data => console.log(data))
  })


  return (
    <div className="h-full">
      <Header />
      <Body />
    </div>
  )
}

export default App;
