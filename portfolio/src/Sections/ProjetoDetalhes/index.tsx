import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import projetos from "../../data/projetos.json";
import "./ProjetosDetalhes.scss";
import SkillItem from "../../Components/SkillItem";

const ProjetosDetalhes: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  interface ProjetoType {
  id: number;
  title: string;
  disc: string;
  descricao: string;
  techUtilizadas: string[];
  imagemPrincipal: string;
  imagensCarrossel: string[];
  link:
    | string
    | {
        front?: string;
        back?: string;
        mobile?: string;
      };
  }


  const projeto: ProjetoType | undefined = projetos.find(
    (p) => p.id === Number(id)
  );

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

  if (!projeto) return null;

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
            <button className="prev" onClick={prevSlide}>
              &lt;
            </button>
            <button className="next" onClick={nextSlide}>
              &gt;
            </button>
          </div>

          <div className="links">
            {projeto.link && typeof projeto.link === "object" ? (
              <>
                {projeto.link.front && (
                  <a
                    href={projeto.link.front}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Frontend
                  </a>
                )}
                {projeto.link.back && (
                  <a
                    href={projeto.link.back}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Backend
                  </a>
                )}
                {projeto.link.mobile && (
                  <a
                    href={projeto.link.mobile}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mobile
                  </a>
                )}
              </>
            ) : typeof projeto.link === "string" ? (
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            ) : null}
          </div>
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
