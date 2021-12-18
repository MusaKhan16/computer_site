import Header from './header.js'
import Footer from './footer.js'
import Body from './body.js'

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
