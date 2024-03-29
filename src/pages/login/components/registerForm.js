
import { useAuthentication } from '../../../hooks/useAuthernticate';
import './registerForm.css';

import { useState } from "react";

function RegisterForm() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const { createUser, error: authError, loading } = useAuthentication();

    async function handleSubmit(e) {

        e.preventDefault();

        const user = {
            name,
            email,
            pass
        }

        const res = await createUser(user);

        console.log(res);

    }

    return <form className='form register-form' onSubmit={handleSubmit}>

        <label>
            NAME<br /><br />
            <input
                type="text"
                value={name}
                placeholder='INSERT YOUR FIRST NAME:'
                onChange={(e) => { setName(e.target.value) }}
                required
            /><br />
        </label>

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