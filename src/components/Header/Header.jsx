import { Link, NavLink } from 'react-router-dom'
import './Header.css'

function Header({ totalFavoritos }) {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        Garagem Clássica
      </Link>

      <nav className="header__nav" aria-label="Principal">
        <NavLink to="/" end className="header__link">
          Início
        </NavLink>
        <NavLink to="/categoria/todos" className="header__link">
          Todos os carros
        </NavLink>
        <span className="header__favoritos">
          Favoritos
          <span className="header__contador" aria-live="polite">
            {totalFavoritos}
          </span>
        </span>
      </nav>
    </header>
  )
}

export default Header
