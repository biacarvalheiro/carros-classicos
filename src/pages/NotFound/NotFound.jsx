import { Link } from 'react-router-dom'
import BackButton from '../../components/BackButton/BackButton'
import './NotFound.css'

function NotFound() {
  return (
    <section className="nao-encontrada">
      <BackButton />
      <h1 className="nao-encontrada__titulo">Página não encontrada</h1>
      <p className="nao-encontrada__texto">
        O endereço que você abriu não existe nesta garagem.
      </p>
      <Link to="/" className="nao-encontrada__link">
        Ir para o início
      </Link>
    </section>
  )
}

export default NotFound
