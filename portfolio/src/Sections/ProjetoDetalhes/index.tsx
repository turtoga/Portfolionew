import { useParams, useHistory } from "react-router-dom";
import type { ProjetoType } from "../../types/ProjetoType";
import projetos from "../../data/projetos.json"; 
import { useEffect, useState } from "react";
import './ProjetosDetalhes.scss'
import SkillItem from "../../Components/SkillItem";

const ProjetosDetalhes = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const projeto: ProjetoType | undefined = projetos.find(
    (p) => p.id === Number(id)
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (!projeto) return;
    setCurrentIndex((prev) => 
      prev === 0 ? projeto.imagensCarrossel.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    if (!projeto) return;
    setCurrentIndex((prev) => 
      prev === projeto.imagensCarrossel.length - 1 ? 0 : prev + 1
    );
  };

  // Troca automática a cada 3 segundos
  useEffect(() => {
    if (!projeto) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [projeto, currentIndex]);

  useEffect(() => {
    if (!projeto) {
      history.replace("/");
    }
  }, [projeto, history]);

  if (!projeto) {
    return null; 
  }

  return (
    <section className="projeto-detalhes">
      <h1>{projeto.title}</h1>

      <div className="sobre-projeto">
        <div className="imagem-principal">
          <div className="carrossel">
            <img
              src={projeto.imagensCarrossel[currentIndex]}
              alt={`${projeto.title} ${currentIndex + 1}`}
            />
            <button className="prev" onClick={prevSlide}>&lt;</button>
            <button className="next" onClick={nextSlide}>&gt;</button>
          </div>

          <a 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>

        <div className="descricao">
  <h2>Sobre:</h2>
  {projeto.descricao.split("\n").map((line, index) => (
    <p key={index}>{line}</p>
  ))}
</div>

      </div>

      <div className="tecnologias">
        <h2>Tech Utilizada:</h2>
        <div className="lista-tech">
          {projeto.techUtilizadas.map((tech, index) => (
            <SkillItem key={index}>{tech}</SkillItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjetosDetalhes;
