import { useEffect, useState } from "react"
import ProjetoDados from '../../data/projetos.json'
import CardProjeto from "../../Components/CardProjeto"
import type { ProjetoType } from "../../types/ProjetoType"
import './Projeto.scss'

const Projeto = () => {

  const [projetos, setProjetos] = useState<ProjetoType[]>([])

  useEffect(()=> {
    setProjetos(ProjetoDados)
  }, [])

  return (
    <section className="projeto" id='projetos'>
      <h1>Projetos</h1>
      <div className="projeto-grid">
        {projetos.map((projeto) => (
          <CardProjeto key={projeto.id} projeto={projeto} />
        ))}
      </div>
    </section>
  )
}

export default Projeto