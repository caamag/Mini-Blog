import './navBar.css';

import { useAuthentication } from '../hooks/useAuthernticate';
import { useAuthValue } from '../context/authcontext';

import { NavLink } from 'react-router-dom';

function NavBar() {

    const { user } = useAuthValue();
    const { logOut } = useAuthentication();

    return <nav>
        <ul>
            <li><NavLink to='/' className='nav-link'>HOME</NavLink></li>
            <li><NavLink to='/about' className='nav-link'>ABOUT</NavLink></li>
            {user && <>
                <li><NavLink to='/post/create' className='nav-link'>NEW POST</NavLink></li>
                <li><NavLink to='/dashboard' className='nav-link'>DASHBOARD</NavLink></li>
            </>}
            {!user && <li><NavLink to='/login' className='nav-link'>LOGIN</NavLink></li>}
            {user && <li><button onClick={() => { logOut() }}>SIGN OUT</button></li>}
        </ul>
    </nav>

};

export default NavBar; 