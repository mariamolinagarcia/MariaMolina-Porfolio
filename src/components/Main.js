import Name from './Name'
import AboutMe from './AboutMe';

import Projects from './Projects';
import Contact from './Contact';
import Training from './Training';
import Skills from './skills';
import '../styles/main.scss';

const Main = ()=>{


    return (
        <div className='main'>
            
            <AboutMe />
            <Training />
            
            <Skills />
            <Projects />
            <Contact />

        </div>
    )
}

export default Main;