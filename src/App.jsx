import Hero from "./components/Hero"
import Header from "./components/Header"
import Cards from "./components/Cards"
import Posts from "./components/Posts"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="relative">
      <Header />
      <Hero />
      <Posts />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
