import imgMaria from '../images/MariaMolinaFoto.jpg';
import '../styles/header.scss';
const Header = ()=>{


    return (
        <div className='header'>
            <div className='header__image'>
                <img className='header__image--photo' src={imgMaria} alt="" title="" width="200px"/>
            </div> 
            <div className='header__titles'>
                <h1>María Molina García</h1>
                <div className='header__titles--h2'>
                <h2>Front-End developer</h2>
                </div>
            </div>
           

        </div>
    )
}

export default Header;