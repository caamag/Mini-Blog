import './footer.css';
import linkedin from './imgs/linkedin.png';
import github from './imgs/github.png';
import wpp from './imgs/whatsapp-icon.png';

function Footer() {

    return <footer className='footer'>

        <div className='contacts'>
            <a href="https://www.linkedin.com/in/caio-lopes-programador/" target='blank'>
                <img src={linkedin} alt="" />
            </a>

            <a href="https://github.com/caamag">
                <img src={github} alt="" />
            </a>

            <a href="tel:+5511966197683" target='blank'>
                <img src={wpp} alt="" />
            </a>
        </div><br /><br />

        <p>&copy; 2024 Caio Magalhães. Todos os direitos reservados.</p>

    </footer>

};

export default Footer; 