import imgMaria from '../images/MariaMolinaFoto.jpg';
import '../styles/header.scss';
const Header = ()=>{


    return (
        <div className='header'>
            <div className='header__image'>
                <img className='header__image--photo' src={imgMaria} alt="" title="" width="200px"/>
            </div> 
            
           

        </div>
    )
}

export default Header;