
export default function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML/CSS', 'Responsive Design'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
    { category: 'Outils', items: ['Git', 'VSCode', 'Figma', 'REST API'] },
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">À Propos</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Bienvenue sur mon portfolio! Je suis un développeur passionné avec plusieurs années
              d'expérience dans la création d'applications web modernes et performantes.
            </p>
            <p>
              Je m'épanouis en transformant des idées complexes en solutions simples et élégantes.
              Mon objectif est de créer une expérience utilisateur exceptionnelle tout en maintenant
              un code propre et maintenable.
            </p>
          </div>

          <div className="skills-section">
            <h3>Compétences</h3>
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-group">
                  <h4>{skillGroup.category}</h4>
                  <div className="skill-items">
                    {skillGroup.items.map((skill, i) => (
                      <span key={i} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
