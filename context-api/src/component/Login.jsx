import React, { useState, useContext } from 'react'
import userContext from '../userContext/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(userContext);

    function handleSubmit(e) {
        e.preventDefault();
        setUser({username, password});
    }
    return (
        <div>
            <h2>Login here</h2>
            <input type="text" name="username" id="username"  placeholder='Enter username' 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <input type="password" name="password" id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
