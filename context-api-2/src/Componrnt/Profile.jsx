import React, { useContext } from 'react'
// import { UserContext } from '../UserContext/UserContextProvider'
import { useUserContext } from '../UserContext/UserContextProvider'



function Profile() {
    //consume context
    const {userData} = useUserContext();
    return (
        userData?.username ? <h2>Welcome! {userData.username} </h2> : <h2>Please login !...</h2>
    )
}

export default Profile


