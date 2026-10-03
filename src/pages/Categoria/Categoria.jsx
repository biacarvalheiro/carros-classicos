import Card from '../../components/Card/Card'
import carros from '../../data/carros.json'
import './Categoria.css'

function Categoria() {
  return (
    <section className="categoria">
      <h1 className="categoria__titulo">Todos os carros</h1>

      <div className="categoria__lista">
        {carros.map((carro) => (
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
