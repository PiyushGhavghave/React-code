import React, { useState } from 'react'

//create context
const UserContext = React.createContext();


//setup context 
function UserContextProvider({children}) {
    const [userdata, setUserData] = useState(null)
    return (
        <UserContext.Provider value={{userdata, setUserData}}>
            {children}
        </UserContext.Provider>
    )
}

export  {UserContext, UserContextProvider}
