import './Card.css'

function Card({
  nome,
  ano,
  pais,
  motor,
  descricao,
  imagem,
  favorito,
  aoFavoritar,
}) {
  function usarImagemPadrao(evento) {
    // evita loop caso a imagem padrao tambem falhe
    evento.currentTarget.onerror = null
    evento.currentTarget.src = '/images/placeholder.svg'
  }

  return (
    <article className="card">
      <div className="card__midia">
        <img
          className="card__imagem"
          src={imagem}
          alt={nome}
          onError={usarImagemPadrao}
        />
        <span className="card__ano">{ano}</span>
      </div>

      <div className="card__corpo">
        <h2 className="card__nome">{nome}</h2>
        <p className="card__descricao">{descricao}</p>

        <dl className="card__detalhes">
          <div className="card__detalhe">
            <dt>Motor</dt>
            <dd>{motor}</dd>
          </div>
          <div className="card__detalhe">
            <dt>Origem</dt>
            <dd>{pais}</dd>
          </div>
        </dl>

        <button
          type="button"
          className={`card__favoritar${favorito ? ' card__favoritar--ativo' : ''}`}
          onClick={aoFavoritar}
          aria-pressed={favorito}
          aria-label={`${favorito ? 'Remover dos favoritos' : 'Favoritar'}: ${nome}`}
        >
          <svg
            className="card__coracao"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            aria-hidden="true"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          {favorito ? 'Favoritado' : 'Favoritar'}
        </button>
      </div>
    </article>
  )
}

export default Card
