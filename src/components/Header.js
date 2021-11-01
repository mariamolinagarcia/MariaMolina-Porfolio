import imgMaría from '../images/MaríaMolinaFoto.jpg';
import '../styles/header.scss';
const Header = ()=>{


    return (
        <div>
            <div>
            <h1>María Molina García</h1>
            <h2>FrontEnd developer</h2>
            </div>
            <div>
                <img src={imgMaría} alt="" title="" width="200px"/>
            </div>

        </div>
    )
}

export default Header;