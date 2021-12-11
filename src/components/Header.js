
import '../styles/header.scss';
import Name from './Name';
import Nav from'./Nav';
const Header = ()=>{


    return (
        <div className='header'>
           
           <Nav />
            <Name /> 
            
           

        </div>
    )
}

export default Header;