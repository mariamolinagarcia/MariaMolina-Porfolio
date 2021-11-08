import burger from '../images/menu-icon.png';
import '../styles/sidebar.scss';
import { useState } from 'react';
const Sidebar = ()=>{

  const [burgerMenu, setBurgerMenu ] = useState('hidden');

  const showBurgerMenu =()=>{
    if(burgerMenu === 'hidden'){
      setBurgerMenu('');

    }else{
      setBurgerMenu('hidden');
    }
  }

    return (
    <div className='sidebar'>
      <div className='sidebar__burger' onClick={showBurgerMenu}>
        <img className='sidebar__burger--img' src={burger} alt='menu burger' title='menu burger' />
      </div>
      <nav className={`sidebar__nav ${burgerMenu}`}>
        <ul>
          Sobre mí
          <li>
          </li>
          <li>
          Experiencia
          </li>
          <li>
          Formación
          </li>
          <li>
          Aptitudes
          </li>
          <li>
          Proyectos
          </li>
          <li>
          Sobre mí
          </li>
          <li>
          Contacto
          </li>
        </ul>
      </nav>
  </div>  
        
    )
}

export default Sidebar;