import { Link } from 'react-router-dom'
import CategoriaLink from '../../components/CategoriaLink/CategoriaLink'
import carros from '../../data/carros.json'
import categorias from '../../data/categorias.json'
import './Home.css'

function Home() {
  return (
    <section className="home">
      <div className="home__apresentacao">
        <h1 className="home__titulo">Carros que marcaram época</h1>
        <p className="home__texto">
          Uma coleção de {carros.length} clássicos, dos nacionais que rodaram
          pelo Brasil aos esportivos que viraram lenda. Escolha uma categoria
          para começar.
        </p>
      </div>

      <div className="home__categorias">
        {categorias.map((categoria) => (
          <CategoriaLink
            key={categoria.slug}
            titulo={categoria.titulo}
            descricao={categoria.descricao}
            quantidade={
              carros.filter((carro) => carro.categoria === categoria.slug)
                .length
            }
            para={`/categoria/${categoria.slug}`}
          />
        ))}
      </div>

      <Link to="/categoria/todos" className="home__todos">
        Ver todos os carros
      </Link>
    </section>
  )
}

export default Home
