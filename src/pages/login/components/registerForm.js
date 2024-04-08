
import { useAuthentication } from '../../../hooks/useAuthernticate';
import './registerForm.css';

import { useEffect, useState } from "react";

function RegisterForm() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const [error, setError] = useState("")

    const { createUser, error: authError, loading } = useAuthentication();

    async function handleSubmit(e) {
        e.preventDefault();

        setError("");

        const user = {
            name,
            email,
            pass
        }

        const res = await createUser(user);
        console.log(res);
    }

    useEffect(() => {
        if (authError) {
            setError(authError);
            console.log(authError);
        }
    }, [authError]);

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

        {loading && <button>LOADING...</button>}
        {!loading && <button>REGISTER</button>}

        {error && <p className='auth-error'>{authError}</p>}

    </form>

};

export default RegisterForm;