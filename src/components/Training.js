import '../styles/training.scss';

const Training = ()=>{


    return (
        <div className='training' id='training'>
           <h3><i class="fas fa-brain"></i> Formación / Training</h3>
            <h4>Adalab bootcamp desarrollo web - 2021</h4>
            <ul className='training__list'>
                <li>HTML5, CSS3, Flexbox, Grid, Bootstrap, SASS, Responsive Mobile First.</li>
                <li>JavaScript Vanilla, Node JS, Gulp, NPM, Zeplin.</li>
                <li>React JS: Components, Hooks, Router..</li>
                <li>Node JS, Express JS, SQLite, Postman.</li>
                <li>Trabajo en remoto, proyectos de equipo y pair programming, bajo la filosofía Agile y metodología Scrum.</li>
            </ul>
            <h4>Realización de audiovisuales y espectáculos - IES Luis García Berlanga 2008-2010</h4>

        </div>
    )
}

export default Training;