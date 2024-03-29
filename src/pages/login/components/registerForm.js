
import './registerForm.css';

import { useState } from "react";

function RegisterForm() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return <form className='form register-form'>

        <label>
            EMAIL ADRESS<br /><br />
            <input
                type="email"
                value={email}
                placeholder='EMAIL OF YOUR PREFERENCE:'
                onChange={(e) => { setEmail(e.target.value) }}
                required
            /><br />
        </label>

        <label>
            PASSWORD<br /><br />
            <input
                type="password"
                value={pass}
                placeholder='CREATE YOUR PASSWORD:'
                onChange={(e) => { setPass(e.target.value) }}
                required
            /><br />
        </label>

        <button>REGISTER</button>

    </form>

};

export default RegisterForm;