import { Link } from "react-router-dom";
import type { ProjetoType } from "../../types/ProjetoType"
import './CardProjeto.scss'

type CardProjetoProps = {
  projeto: ProjetoType;
};

const CardProjeto = ({projeto}:CardProjetoProps) => {
  return (
    <div className="card-projeto">
      <img src={projeto.imagemPrincipal} alt={projeto.title}/>
      <h3>{projeto.title}</h3>
      <p>{projeto.disc}</p>
      <Link to={`/projeto/${projeto.id}`}>
        <button>Ver mais</button>
      </Link>
    </div>
  )
}

export default CardProjeto