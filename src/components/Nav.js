import burger from '../images/menu-icon.png';
import '../styles/nav.scss';
import { useState } from 'react';
const Sidebar = ()=>{

  

   const [burgerMenu, setBurgerMenu ] = useState('');

   const showBurgerMenu =()=>{
     if(burgerMenu === 'active'){
       setBurgerMenu('');

     }else{
       setBurgerMenu('active');
     }
   }
  

    return (
    
     
      <nav className='nav'>
         <div className='nav__burger' onClick={showBurgerMenu}>
        <img className='nav__burger--img' src={burger} alt='menu burger' title='menu burger' />
      </div>

      <ul className={`nav__list ${burgerMenu} `}>
          
          <li className='nav__list--item'>
            Sobre mí
          </li>
          <li className='nav__list--item'>
          Experiencia
          </li>
          <li className='nav__list--item'>
          Formación
          </li>
          <li className='nav__list--item'>
          Aptitudes
          </li>
          <li className='nav__list--item'>
          Proyectos
          </li>
          
          <li className='nav__list--item'>
          Contacto
          </li>
        </ul>
      </nav>
  
        
    )
}

export default Sidebar;