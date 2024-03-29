
import './loginform.css';

import { useState } from 'react';

function LoginForm() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return <form className='form login-form'>

        <label>
            EMAIL ADRESS<br /><br />
            <input
                type="email"
                value={email}
                placeholder='YOUR EMAIL ADRESS:'
                onChange={(e) => { setEmail(e.target.value) }}
                required
            /><br />
        </label>

        <label>
            PASSWORD<br /><br />
            <input
                type="password"
                value={pass}
                placeholder='YOUR PASSWORD:'
                onChange={(e) => { setPass(e.target.value) }}
                required
            /><br />
        </label>


        <button>SIGN IN</button>

    </form>

};

export default LoginForm;