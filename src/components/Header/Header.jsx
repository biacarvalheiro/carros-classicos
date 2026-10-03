import { Link, NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
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
      </nav>
    </header>
  )
}

export default Header
