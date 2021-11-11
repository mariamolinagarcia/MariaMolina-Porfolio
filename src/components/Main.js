import Name from './Name'
import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Training from './Training';
import Skills from './skills';
import '../styles/main.scss';

const Main = ()=>{


    return (
        <div className='main'>
            <Name />
            <AboutMe />
            <Training />

            <Experience />
            <Projects />
            <Skills />
            <Contact />

        </div>
    )
}

export default Main;