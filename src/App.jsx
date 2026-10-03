import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Categoria from './pages/Categoria/Categoria'
import NotFound from './pages/NotFound/NotFound'
import './App.css'

function App() {
  const [favoritos, setFavoritos] = useState([])

  function alternarFavorito(id) {
    setFavoritos((atuais) =>
      atuais.includes(id)
        ? atuais.filter((item) => item !== id)
        : [...atuais, id],
    )
  }

  return (
    <div className="app">
      <Header totalFavoritos={favoritos.length} />
      <main className="app__conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/categoria/:slug"
            element={
              <Categoria
                favoritos={favoritos}
                aoAlternarFavorito={alternarFavorito}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
