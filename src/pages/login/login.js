import './login.css'

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

//components
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';

function Login() {

    const [signMenu, setSignMenu] = useState(true);
    const [changeForm, setChangeForm] = useState(true);
    const formMenuClass = signMenu ? 'form-menu' : 'form-menu form-menu-changed';

    const menuTitleText = signMenu ? <>DON'T <br /> HAVE ACCOUNT?</> : <>SHARE <br /> YOUR LIFE</>
    const menuSubTitle = signMenu ? <>Enter your details <br /> and register.</> : <>Tell Stories <br /> to the world.</>

    return <div className="container">

        <div className='sign-up-container'>

            <div className={formMenuClass}>
                <h2>{menuTitleText}</h2>
                <h3>{menuSubTitle}</h3>

                {signMenu && <button onClick={() => {
                    setSignMenu(false)
                    setTimeout(() => {
                        setChangeForm(false)
                    }, 300)
                }}>REGISTER NOW</button>}

                {!signMenu && <button onClick={() => {
                    setSignMenu(true)
                    setTimeout(() => {
                        setChangeForm(true)
                    }, 300)
                }}>SIGN IN</button>}

            </div>

            {changeForm && <LoginForm />}
            {!changeForm && <RegisterForm />}

        </div>

    </div>

};

export default Login; 