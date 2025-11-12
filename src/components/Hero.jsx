import cvFile from '../assets/Mohamed_Aziz_Gamaoun_CV.pdf'
import photo from '../assets/pdf.jpg'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Salut, je suis <span className="highlight">Mohamed</span>
          </h1>
          <p className="hero-subtitle">
            Développeur Full Stack | React • Node.js • Créatif
          </p>
          <p className="hero-description">
            J'aime créer des applications web modernes et performantes avec une excellente expérience utilisateur.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              Voir mes projets
            </button>

            <a
              className="btn btn-secondary"
              href={cvFile}
              download
              rel="noopener noreferrer"
            >
              Télécharger CV
            </a>
          </div>
        </div>

        <div className="hero-photo-wrapper">
          <img src={photo} alt="Mohamed" className="hero-photo" />
          <div className="hero-decoration">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
