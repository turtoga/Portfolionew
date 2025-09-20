import { useEffect, useState } from 'react'
import './SobreMim.scss'
import substituto from '../../assets/SubstitutoSobresvg.svg'
import Draggable from 'react-draggable'
import novo from  '../../assets/GabrielNovo.png'
import velho from  '../../assets/GabrielVelho.png'
import arte from  '../../assets/GabrielArte.png'

const imagens =[
  { src: novo, alt: 'Gabriel Novo', x: 45, y: -36 },
  { src: velho, alt: 'Gabriel Velho', x: 61, y: 173 },
  { src: arte, alt: 'Gabriel Arte', x: -152, y: 2 },
]

const SobreMim = () => {

  const [horaSp, setHoraSP] = useState('')

  useEffect(() => {
  const atualizarHora = () => {
    const data = new Date();
    const hora = data.toLocaleTimeString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
    setHoraSP(hora);
  };

  atualizarHora(); 
  const interval = setInterval(atualizarHora, 60000);

  return () => clearInterval(interval);
}, []);

  return (
    <section className='sobre-mim' id='sobre'>
      
      <div className='sobre-content'>
        <aside>
          <div className='title'>
        <h1>SobreMim</h1>
        <div className='text'>
          <p>
            Gabriel A.<br/>
            Desenvolvedor de Software
          </p>
          <div className='img'>
            <figure>
              <img src={substituto} alt="Substituto" className="sobre-substituto" />
              {imagens.map((img, i) => (
                <Draggable key={i} defaultPosition={{ x: img.x, y: img.y }}>
                  <img
                    draggable="false"
                    src={img.src}
                    alt={img.alt}
                    className="icon"
                    style={{ position: 'absolute', cursor: 'grab' }}
                  />
                </Draggable>
              ))}
            </figure>
          </div>
        </div>
          </div>
        </aside>
        <article>
          <div className='dados'>
            <p>{`São Paulo, ${horaSp}`}</p>
            <div className='links'>
              <a href="https://www.linkedin.com/in/almeidagabrielferreira/" target="_blank">Linkedin</a>
              <a href="https://github.com/turtoga" target="_blank">Github</a>
            </div>
          </div>
          <div className='sobre'>
            <p>
              Sou um <strong>desenvolvedor de software</strong><br/>
              paulista que gosta bastante de criar<br/>
              coisas e está sempre atrás de um novo<br/>
              projeto. Gosto de sempre usar o meu lado<br/>
              mais <strong>criativo</strong> e de <strong>desafiar</strong> a minha<br/>
              capacidade.<br/>
            </p>
          </div>
          <div className='educacao'>
            <h3>Educação:</h3>
            <p>
              Tecnólogo em Desenvolvimento de<br/>
              Software Multiplataforma<br/>
              (Fatec Zona Leste - Em Curso)
            </p>
          </div>
          <div className='interesse'>
            <p>
              Interesado em trabalhar comigo?<br/>
              Mande um email para <strong>bielalmeida.dev@gmail.com</strong>
            </p>
          </div>
        </article>
      </div>
      
    </section>
  )
}

export default SobreMim