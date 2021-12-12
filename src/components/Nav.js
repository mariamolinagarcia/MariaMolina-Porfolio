
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
         <i class="fas fa-hamburger"></i>
      </div>

      <ul className={`nav__list ${burgerMenu} `}>
      <li className='nav__list--item'>
      <a href='#'><i class="fas fa-home"></i></a>
          </li>
          <li className='nav__list--item'>
            <a href='#aboutme'>Sobre mí</a>
          </li>
          <li className='nav__list--item'>
          <a href='#training'>Formación</a>
          </li>
          
          <li className='nav__list--item'>
          <a href='#skills'>Aptitudes</a>
          </li>
          <li className='nav__list--item'>
          <a href='#projects'>Proyectos</a>
          </li>
          
          <li className='nav__list--item'>
          <a href='#contact'>Contacto</a>
          </li>
        </ul>
      </nav>
  
        
    )
}

export default Sidebar;