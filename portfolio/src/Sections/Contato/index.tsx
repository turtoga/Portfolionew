import './Contato.scss'
import desenho from '../../assets/personagem.svg'

const Contato = () => {
  return (
    <section className='contato' id='contato'>
      <h1>Contato</h1>
      <div className='contato-card'>
        <div className='text-container'>
          <h2>Gabriel Almeida</h2>
          <h3>Email</h3>
          <a href="mailto:Bielallmeida.dev@gmail.com">Bielalmeida.dev@gmail.com</a>
          <h3>Redes</h3>
          <div className='contato-redes'>
            <a href="https://www.linkedin.com/in/almeidagabrielferreira/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/turtoga" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <h3>Mais</h3>
          <a href="/curriculo.pdf" download>Baixe meu Currículo</a>
        </div>
        <div className='img-container'>
          <img src={desenho} alt="Ilustração de Gabriel Almeida" className='desenho'/>
        </div>
      </div>
    </section>
  )
}

export default Contato
