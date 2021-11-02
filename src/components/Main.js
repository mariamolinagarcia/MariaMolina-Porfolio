import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import '../styles/main.scss';

const Main = ()=>{


    return (
        <div className='main'>
            <AboutMe />
            <Experience />
            <Experience />
            <Projects />
            <Contact />

        </div>
    )
}

export default Main;