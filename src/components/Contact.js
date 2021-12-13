import '../styles/contact.scss';

const Contact = ()=>{


    return (
        <div id='contact'>
            <h3><i class="fas fa-address-card"></i> Contacto</h3>
            <div className='contact__div'>
            <form className='contact__form'
            action="https://formspree.io/f/xpzbzlrw"
            method="POST">
                <label>
                    Tu nombre:
                <input type="text" name="name" />
                </label>
                <label>
                    Tu email:
                <input type="email" name="_replyto" required />
                </label>
                <label>
                Tu mensaje:
                <textarea name="message" />
                </label>
  
                 <button type="submit">Enviar</button>
            </form>
             
            <ul className='contact__div--icons'>
                <li><h5>Otras formas de contacto:</h5></li>
                <li><a href='mailto:mariquillamolina@gmail.com' alt='mariquillamolina@gmail.com' target="_blank" rel="noopener noreferrer"><i class="fas fa-envelope"></i></a></li>
                <li><a href='https://github.com/mariamolinagarcia' alt='github' target="_blank" rel="noopener noreferrer"><i class="fab fa-github-alt"></i></a></li>
                <li><a href='https://twitter.com/MomoHorror' alt='MomoHorror' target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a></li>

            </ul>

            
            </div>

        </div>
    )
}

export default Contact;