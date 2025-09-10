
import './Home.scss'
import personagem from '../../assets/personagem.svg'
import monitor from '../../assets/pc.svg'
import dino from '../../assets/dino.svg'
import camera from '../../assets/camera.svg'
import gato from '../../assets/gato.svg'
import pato from '../../assets/pato.svg'
import teclado from '../../assets/teclado.png'
import Draggable from 'react-draggable'
import substituto from '../../assets/substituto.svg'
import { useEffect, useState } from 'react'

const imagens = [
  { src: pato, alt: 'Pato', x: -450, y: -75 },
  { src: monitor, alt: 'Monitor', x: -379, y: 180 },
  { src: teclado, alt: 'Teclado', x: -194, y: -242 },
  { src: dino, alt: 'Dinossauro', x: 188, y: -183 },
  { src: camera, alt: 'Camera', x: 412, y: -99 },
  { src: gato, alt: 'Gato', x: 360, y: 172 }
]

const Home = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 990)
    checkMobile() // verifica na montagem
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section id="home" className="home">
      {isMobile ? (
        <img src={substituto} alt="Substituto" className="home-substituto" />
      ) : (
        <>
          <div className="home-content">
            <h1>Prazer!<br/>Sou Gabriel</h1>
            <h2>(Software Developer)</h2>
          </div>

          <img src={personagem} alt="Personagem" className="icon icon-personagem" />
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
        </>
      )}
    </section>
  )
}

export default Home
