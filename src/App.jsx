import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Categoria from './pages/Categoria/Categoria'
import NotFound from './pages/NotFound/NotFound'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/:slug" element={<Categoria />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
