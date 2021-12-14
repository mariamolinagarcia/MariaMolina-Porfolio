

import '../styles/projects.scss';




const Projects = ()=>{


    return (
        <div className='projects' id='projects'>
            <h3><i class="fas fa-folder-open"></i> Proyectos</h3>
           
           <div className='projects__container'>
            <ul className='projects__grid'>
                <li className='projects__grid--item1'>
                <div className='projects__grid--text'>
                    <h4>Rick y Morty </h4>
                    <p>Proyecto hecho con React, utilizando components, hooks y API.</p>
                    <button><a href='https://mariamolinagarcia.github.io/modulo-3-evaluacion-final-mariamolinagarcia/#/' alt='' title='' target="_blank" rel="noopener noreferrer">Ver página</a></button>
                    <button><a href='https://github.com/mariamolinagarcia/modulo-3-evaluacion-final-mariamolinagarcia' alt='' title='' target="_blank" rel="noopener noreferrer">Ver proyecto</a></button>

                </div>
                
                </li>
                <li className='projects__grid--item2'><div className='projects__grid--text'>
                    <h4>Awesome Profile </h4>
                    <p>Proyecto en equipo, de JS a React, código heredado. Servidor con Express y SQLite.</p>
                    <button><a href='https://react-machines.herokuapp.com/#/' alt='' title='' target="_blank" rel="noopener noreferrer">Ver página</a></button>
                    <button><a href='https://github.com/mariamolinagarcia/project-promo-n-module-3-team-3' alt='' title='' target="_blank" rel="noopener noreferrer">Ver proyecto</a></button>

                </div></li>
                <li className='projects__grid--item3'><div className='projects__grid--text'>
                    <h4>TVShows List </h4>
                    <p>Proyecto en JS Vanila. Llamada a una API, búsqueda y favoritos en Local Storage. </p>
                    <button><a href='https://mariamolinagarcia.github.io/modulo-2-evaluacion-final-mariamolinagarcia/' alt='' title='' target="_blank" rel="noopener noreferrer">Ver página</a></button>
                    <button><a href='https://github.com/mariamolinagarcia/modulo-2-evaluacion-final-mariamolinagarcia' alt='' title='' target="_blank" rel="noopener noreferrer">Ver proyecto</a></button>

                </div></li>
                <li className='projects__grid--item4'><div className='projects__grid--text'>
                    <h4>Awesome Profile en JS </h4>
                    <p>Proyecto hecho en equipo con JS Vanila. Generador de tarjetas de visita. Maquetación con CSS y SASS.</p>
                    <button><a href='https://mariamolinagarcia.github.io/project-promo-n-module-2-team-1/' alt='' title='' target="_blank" rel="noopener noreferrer">Ver página</a></button>
                    <button><a href='https://github.com/mariamolinagarcia/project-promo-n-module-2-team-1' alt='' title='' target="_blank" rel="noopener noreferrer">Ver proyecto</a></button>

                </div></li>
                <li className='projects__grid--item5'><div className='projects__grid--text'>
                    <h4>Landing</h4>
                    <p>Proyecto hecho con HTML, CSS y SASS. Resposive, Mobile First.</p>
                    <button><a href='https://mariamolinagarcia.github.io/modulo-1-evaluacion-final-mariamolinagarcia/' alt='' title='' target="_blank" rel="noopener noreferrer">Ver página</a></button>
                    <button><a href='https://github.com/mariamolinagarcia/modulo-1-evaluacion-final-mariamolinagarcia' alt='' title='' target="_blank" rel="noopener noreferrer">Ver proyecto</a></button>

                </div></li>
            </ul>
            </div>
        </div>
    )
}

export default Projects;