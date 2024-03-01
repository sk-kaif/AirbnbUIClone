import Cards from "./components/Cards/Cards"
import Header from "./components/Header/Header"
import Category from "./components/category/Category"
import { list2 } from "./assets/cardsList"

const App = () => {
  return (
    <div className="App">
      <Header />
      <Category />
      <Cards list2={list2} />
    </div>
  )
}

export default App