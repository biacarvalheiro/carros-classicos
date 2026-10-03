import { useLocation, useNavigate } from 'react-router-dom'
import './BackButton.css'

function BackButton({ texto = 'Voltar' }) {
  const navigate = useNavigate()
  const location = useLocation()

  function voltar() {
    // key default = primeira pagina da sessao, sem historico para voltar
    if (location.key !== 'default') {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  return (
    <button type="button" className="back-button" onClick={voltar}>
      <svg
        className="back-button__icone"
        viewBox="0 0 16 16"
        width="16"
        height="16"
        aria-hidden="true"
      >
        <path
          d="M10 3L5 8l5 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {texto}
    </button>
  )
}

export default BackButton
