
import './register.css';
import { useState } from 'react';

function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')


    return <div className='register-container'>

        <h1>Register</h1>
        <h3>Create your account and <span>share</span> your daily life</h3>

        <form className='form'>

            <label>
                <input type="text"
                    placeholder='Name:'
                    value={name}
                    name='name'
                    onChange={(e) => { setName(e.target.value) }}
                />
            </label><br />
            <label>
                <input type="email"
                    placeholder='E-mail'
                    value={email}
                    name='email'
                    onChange={(e) => { setEmail(e.target.value) }}
                />
            </label><br />
            <label>
                <input type="password"
                    placeholder='Password'
                    value={pass}
                    name='password'
                    onChange={(e) => { setPass(e.target.value) }}
                />
            </label><br />
            <label>
                <input type="password"
                    placeholder='Password'
                    value={pass}
                    name='password'
                    onChange={(e) => { setPass(e.target.value) }}
                />
            </label>

        </form>

    </div>

};

export default Register; 