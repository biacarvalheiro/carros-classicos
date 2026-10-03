import { useParams } from 'react-router-dom'
import BackButton from '../../components/BackButton/BackButton'
import Card from '../../components/Card/Card'
import NotFound from '../NotFound/NotFound'
import carros from '../../data/carros.json'
import categorias from '../../data/categorias.json'
import './Categoria.css'

function Categoria() {
  const { slug } = useParams()
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

  return (
    <section className="categoria">
      <div className="categoria__topo">
        <BackButton />
        <div className="categoria__cabecalho">
          <h1 className="categoria__titulo">{titulo}</h1>
          <p className="categoria__descricao">{descricao}</p>
        </div>
      </div>

      <div className="categoria__lista">
        {lista.map((carro) => (
          <Card
            key={carro.id}
            nome={carro.nome}
            ano={carro.ano}
            pais={carro.pais}
            motor={carro.motor}
            descricao={carro.descricao}
            imagem={carro.imagem}
          />
        ))}
      </div>
    </section>
  )
}

export default Categoria
