import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Categoria from './pages/Categoria/Categoria'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__conteudo">
        <Categoria />
      </main>
      <Footer />
    </div>
  )
}

export default App
