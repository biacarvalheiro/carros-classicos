import { Link } from 'react-router-dom'
import './CategoriaLink.css'

function CategoriaLink({ titulo, descricao, quantidade, para }) {
  return (
    <Link to={para} className="categoria-link">
      <h2 className="categoria-link__titulo">{titulo}</h2>
      <p className="categoria-link__descricao">{descricao}</p>
      <span className="categoria-link__quantidade">
        {quantidade} {quantidade === 1 ? 'carro' : 'carros'}
      </span>
    </Link>
  )
}

export default CategoriaLink
