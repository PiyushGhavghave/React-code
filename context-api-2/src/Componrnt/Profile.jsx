import React, { useContext } from 'react'
import { UserContext } from '../UserContext/UserContextProvider'


function Profile() {
    //consume context
    const {userdata} = useContext(UserContext)
    return (
        userdata?.username ? <h2>Welcome! {userdata.username} </h2> : <h2>Please login !...</h2>
    )
}

export default Profile


