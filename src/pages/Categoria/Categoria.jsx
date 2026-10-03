import { useState } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../../components/BackButton/BackButton'
import Card from '../../components/Card/Card'
import NotFound from '../NotFound/NotFound'
import carros from '../../data/carros.json'
import categorias from '../../data/categorias.json'
import './Categoria.css'

function Categoria({ favoritos, aoAlternarFavorito }) {
  const { slug } = useParams()
  const [somenteFavoritos, setSomenteFavoritos] = useState(false)

  const mostrarTodos = slug === 'todos'
  const categoria = categorias.find((item) => item.slug === slug)

  if (!mostrarTodos && !categoria) {
    return <NotFound />
  }

  const titulo = mostrarTodos ? 'Todos os carros' : categoria.titulo
  const descricao = mostrarTodos
    ? 'A coleção completa, de todas as categorias.'
    : categoria.descricao
  const lista = mostrarTodos
    ? carros
    : carros.filter((carro) => carro.categoria === slug)
  const listaVisivel = somenteFavoritos
    ? lista.filter((carro) => favoritos.includes(carro.id))
    : lista

  return (
    <section className="categoria">
      <div className="categoria__topo">
        <BackButton />
        <div className="categoria__cabecalho">
          <h1 className="categoria__titulo">{titulo}</h1>
          <p className="categoria__descricao">{descricao}</p>
        </div>
      </div>

      <div className="categoria__barra">
        <p className="categoria__contagem">
          {listaVisivel.length} {listaVisivel.length === 1 ? 'carro' : 'carros'}
        </p>
        <button
          type="button"
          className={`categoria__filtro${somenteFavoritos ? ' categoria__filtro--ativo' : ''}`}
          onClick={() => setSomenteFavoritos(!somenteFavoritos)}
          aria-pressed={somenteFavoritos}
        >
          Só favoritos
        </button>
      </div>

      {listaVisivel.length === 0 ? (
        <p className="categoria__vazio">
          Você ainda não favoritou nenhum carro aqui. Use o botão Favoritar
          nos cards para montar sua lista.
        </p>
      ) : (
        <div className="categoria__lista">
          {listaVisivel.map((carro) => (
            <Card
              key={carro.id}
              nome={carro.nome}
              ano={carro.ano}
              pais={carro.pais}
              motor={carro.motor}
              descricao={carro.descricao}
              imagem={carro.imagem}
              favorito={favoritos.includes(carro.id)}
              aoFavoritar={() => aoAlternarFavorito(carro.id)}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Categoria
