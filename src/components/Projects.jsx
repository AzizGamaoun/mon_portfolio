
export default function Projects() {
  // Vous pouvez ajouter vos projets ici plus tard
  const projects = [
    {
      id: 1,
      title: 'Projet 1',
      description: 'Ajouter votre premier projet ici',
      image: '🚀',
      tags: ['React', 'CSS'],
      link: '#',
    },
    {
      id: 2,
      title: 'Projet 2',
      description: 'Ajouter votre deuxième projet ici',
      image: '💻',
      tags: ['Node.js', 'MongoDB'],
      link: '#',
    },
    {
      id: 3,
      title: 'Projet 3',
      description: 'Ajouter votre troisième projet ici',
      image: '✨',
      tags: ['Full Stack', 'API'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Mes Projets</h2>
        <p className="section-subtitle">Quelques projets sur lesquels j'ai travaillé</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">{project.image}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                Voir le projet →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
