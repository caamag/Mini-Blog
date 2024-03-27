import './login.css'

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Login() {

    const [signMenu, setSignMenu] = useState(true);
    const formMenuClass = signMenu ? 'form-menu' : 'form-menu form-menu-changed';

    const menuTitleText = signMenu ? <>DON'T <br /> HAVE ACCOUNT?</> : <>SHARE <br /> YOUR LIFE</>
    const menuSubTitle = signMenu ? <>Enter your details <br /> and register.</> : <>Tell Stories <br /> to the world.</>

    return <div className="container">

        <div className='sign-up-container'>

            <div className={formMenuClass}>
                <h2>{menuTitleText}</h2>
                <h3>{menuSubTitle}</h3>

                {signMenu && <button onClick={() => { setSignMenu(false) }}>REGISTER NOW</button>}
                {!signMenu && <button onClick={() => { setSignMenu(true) }}>SIGN IN</button>}

            </div>

        </div>

    </div>

};

export default Login; 