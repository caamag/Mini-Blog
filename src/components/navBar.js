import './navBar.css';

import { useAuthentication } from '../hooks/useAuthernticate';
import { useAuthValue } from '../context/authcontext';
import { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import { clearIndexedDbPersistence } from 'firebase/firestore';

import NavMenuClose from './imgs/menu-close.png';
import NavMenuOpen from './imgs/menu-open.png';

function NavBar() {

    const [confirmSignOut, setConfirmSignOut] = useState(false);

    const { user } = useAuthValue();
    const { logOut } = useAuthentication();

    const [navigate, setNavigate] = useState(false);
    const windowWidth = window.innerWidth;

    const navigateClass = navigate ? 'navigate' : 'navigate navigate-mobile-invisible';

    const links = document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            setNavigate(false)
        })
    })


    return <nav className={navigateClass}>

        {!navigate && <button className='nav-menu-btn' onClick={() => { setNavigate(true) }}>
            <img src={NavMenuOpen} className='nav-menu' />
        </button>}

        {navigate && <button className='nav-menu-btn' onClick={() => { setNavigate(false) }}>
            <img src={NavMenuClose} className='nav-menu' />
        </button>}

        <ul>
            {user && <li><NavLink to='/' className='nav-link'>HOME</NavLink></li>}
            <li><NavLink to='/about' className='nav-link'>ABOUT</NavLink></li>
            {user && <>
                <li><NavLink to='/post/create' className='nav-link'>NEW POST</NavLink></li>
                <li><NavLink to='/dashboard' className='nav-link'>DASHBOARD</NavLink></li>
            </>}
            {!user && <li><NavLink to='/login' className='nav-link'>LOGIN</NavLink></li>}
            {user && <li><button onClick={() => { setConfirmSignOut(true) }}>SIGN OUT</button></li>}
        </ul>

        {confirmSignOut && <>
            <div className='logout-confirm'>
                <h2>Would you like to sign out?</h2>
                <div>
                    <button onClick={() => {
                        logOut()
                        setConfirmSignOut(false)
                    }}>SIGN OUT</button>
                    <button onClick={() => { setConfirmSignOut(false) }}>NO</button>
                </div>
            </div>
        </>}
    </nav>

};

export default NavBar; 