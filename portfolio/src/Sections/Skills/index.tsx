import SkillItem from '../../Components/SkillItem'
import './Skills.scss'

const Skills = () => {
  const tech = ['Java', 'JavaScript', 'TypeScript','Python', 'HTML/CSS','React/Native','SpringBoot','Node.js', 'MongoDB', 'SQL'];
  const habilidades = [
    "Criatividade",
    "Comunicação",
    "Trabalho em equipe",
    "Resolução de problemas",
    "Aprendizado rápido"
  ];

  const programa = [
    "Figma",
    "Git",
    "Pacote Office",
    "Adobe Photoshop",
    "Adobe Premiere",
    "Adobe After Effects",
    "Notion",
    "Trello",
    "Jira"
  ];

  return (
    <section className="skills" id='skills'>
      <h1>Skills</h1>
      <div className="skills-content">
        <div className='first'>
          <div className='habilidades'>
            <h2>Habilidades:</h2>
            <div className='tags'>
              {habilidades.map((item, index) => (
                <SkillItem key={index}>{item}</SkillItem>
              ))}
            </div>
          </div>

          <div className='tech'>
            <h2>Tech:</h2>
            <div className='tags'>
              {tech.map((item, index) => (
                <SkillItem key={index}>{item}</SkillItem>
              ))}
            </div>
          </div>
        </div>
        

        <div className='programas'>
          <h2>Programas:</h2>
          <div className='tags'>
            {programa.map((item, index) => (
              <SkillItem key={index}>{item}</SkillItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
