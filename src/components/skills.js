import '../styles/skills.scss';

const Skills = ()=>{


    return (
        <div className='skills' id='skills'>
            <h3><i class="fas fa-code"></i> Aptitudes / Skills</h3>
            
            <h4>Desarrollo web</h4>
            <ul>
                <li>HTML5, CSS3, Flexbox, Grid, Bootstrap, SASS, Responsive Mobile First.</li>
                <li>JavaScript Vanilla, Gulp, NPM, Zeplin.</li>
                <li>React JS: Components, Hooks, Router..</li>
                <li>Node JS, Express JS, SQLite, Postman.</li>
                <li>Trabajo en remoto, proyectos de equipo y pair programming, bajo la filosofía Agile y metodología Scrum.</li>
            </ul>
            <ul className='skills__list'>
                <li><i class="fab fa-html5"></i></li>
                <li><i class="fab fa-css3-alt"></i></li>
                <li><i class="fab fa-sass"></i></li>
                <li>
                    <ul className='skills__list--responsive'>
                        <li><i class="fas fa-mobile"></i> </li><li><i class="fas fa-tablet"></i></li> <li><i class="fas fa-laptop"></i></li>
                        
                        </ul>
                        
                        </li>
                
                <li><i class="fab fa-js"></i></li>
                <li><i class="fab fa-react"></i></li>
                <li><i class="fab fa-node"></i></li>
                <li><i class="fab fa-gulp"></i></li>
                <li><i class="fab fa-npm"></i></li>
                
            </ul>

            
            

        </div>
    )
}

export default Skills;