
import './loginform.css';

import { useState, useEffect } from 'react';
import { useAuthentication } from '../../../hooks/useAuthernticate';

function LoginForm() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState("");

    const { login, error: authError, loading } = useAuthentication();

    useEffect(() => {
        if (authError) {
            setError(authError)
        }
    }, [authError]);

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        const user = {
            email: email,
            pass: pass
        };

        const res = await login(user);
    }

    return <form className='form login-form' onSubmit={handleSubmit}>

        <label><br /><br />
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

        {error && <p className='auth-error'>{authError}</p>}

        <button>SIGN IN</button>

    </form>

};

export default LoginForm;