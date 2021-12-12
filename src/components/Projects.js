import rickAndMorty from '../images/RickandMorty.png';
import reactMigration from '../images/Migracion-React-servidor-express.png';
import buscadorSeries from '../images/JS-Vanila-Buscador_de_series-detalle.png';
import landingAwesome from '../images/Landing-Awesome_profile-cards.png';
import evaluacionMaquetacion from '../images/Módulo_1_Evaluación_final.png'


import '../styles/projects.scss';




const Projects = ()=>{


    return (
        <div className='projects' id='projects'>
            <h3><i class="fas fa-folder-open"></i> Proyectos</h3>
            <p></p>
            <ul className='projects__grid'>
                <li className='projects__grid--item1'>
                <img className='projects__grid--item1__photo' src={rickAndMorty} alt='' title='' />
                </li>
                <li className='projects__grid--item2'><img className='projects__grid--item2__photo' src={reactMigration} alt='' title='' /></li>
                <li className='projects__grid--item3'><img className='projects__grid--item3__photo' src={buscadorSeries} alt='' title='' /></li>
                <li className='projects__grid--item4'><img className='projects__grid--item4__photo' src={landingAwesome} alt='' title='' /></li>
                <li className='projects__grid--item5'><img className='projects__grid--item5__photo' src={evaluacionMaquetacion} alt='' title='' /></li>
            </ul>

        </div>
    )
}

export default Projects;