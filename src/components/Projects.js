import '../styles/projects.scss';
import rickAndMorty from '../images/RickandMorty.png'



const Projects = ()=>{


    return (
        <div className='projects' id='projects'>
            <h3><i class="fas fa-folder-open"></i> Proyectos</h3>
            
            <ul className='projects__grid'>
                <li className='projects__grid--item1'>{rickAndMorty}</li>
                <li className='projects__grid--item2'>2</li>
                <li className='projects__grid--item3'>3</li>
                <li className='projects__grid--item4'>4</li>
                <li className='projects__grid--item5'>5</li>
            </ul>

        </div>
    )
}

export default Projects;