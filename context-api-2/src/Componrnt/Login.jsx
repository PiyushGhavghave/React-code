import React, {useContext, useState} from 'react'
import { UserContext } from '../UserContext/UserContextProvider'


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //consume context
    const {setUserData} = useContext(UserContext)

    function handleSubmit(e) {
        e.preventDefault()
        setUserData({username, password})
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

