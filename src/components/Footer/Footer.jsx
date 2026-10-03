import './Footer.css'

const ano = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__texto">
        © {ano} Garagem Clássica. Projeto acadêmico feito com React.
      </p>
    </footer>
  )
}

export default Footer
