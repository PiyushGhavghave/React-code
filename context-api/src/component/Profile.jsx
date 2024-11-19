import React, { useContext, useState } from 'react'
import userContext from '../userContext/UserContext';

function Profile() {
    const [username, setUsername] = useState('');
    const {user} = useContext(userContext)
    return (
        user?.username ? <h2>welcome {user.username} </h2> : <h2>please login</h2>
    )
}

export default Profile
