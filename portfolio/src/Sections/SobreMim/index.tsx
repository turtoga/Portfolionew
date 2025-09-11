import React, { useEffect, useState } from 'react'
import './SobreMim.scss'
import substituto from '../../assets/SubstitutoSobresvg.svg'

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

            </figure>
          </div>
        </div>
          </div>
        </aside>
        <article>
          <div className='dados'>
            <p>{`São paulo, ${horaSp}`}</p>
            <div className='links'>
              <a href="https://www.linkedin.com" target="_blank">Linkedin</a>
              <a href="https://github.com" target="_blank">Github</a>
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
            <h3>Educação</h3>
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