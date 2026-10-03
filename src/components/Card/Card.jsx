import './Card.css'

function Card({ nome, ano, pais, motor, descricao, imagem }) {
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
      </div>
    </article>
  )
}

export default Card
