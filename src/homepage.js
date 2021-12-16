import './App.css'
import './utils.css'
import Header from './header'
import Footer from './footer'
import Body from './body'

function Homepage() {
  return (
    <div className="wrap h-full grid-body">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default Homepage;
