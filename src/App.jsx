import Hero from "./components/Hero"
import Header from "./components/Header"
import Cards from "./components/Cards"
import Posts from "./components/Posts"
import Footer from "./components/Footer"
import ModalSearch from "./components/ModalSearch"
import { useEffect, useState } from "react"

function App() {
  const [value, setValue] = useState('')

  const [defaultCategories, setDefaultCategories] = useState([])

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    defaultCategories.length && setShowModal(true)
  }, [defaultCategories])

  return (
    <div className="relative">
      <Header />
      <Hero setShowModal={setShowModal} value={value} setValue={setValue} />
      <Posts setDefaultCategories={setDefaultCategories} />
      <Cards setDefaultCategories={setDefaultCategories} />
      <Footer />
      {showModal && <ModalSearch searchValue={value} setValue={setValue} onClose={setShowModal} defaultCategories={defaultCategories} />}
    </div>
  )
}

export default App
