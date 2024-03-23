import './navBar.css';

import { NavLink } from 'react-router-dom';

function NavBar() {

    return <nav>
        <ul>
            <li><NavLink to='/' className='nav-link'>HOME</NavLink></li>
            <li><NavLink to='/about' className='nav-link'>ABOUT</NavLink></li>
            <li><NavLink to='/login' className='nav-link'>LOGIN</NavLink></li>
        </ul>
    </nav>

};

export default NavBar; 