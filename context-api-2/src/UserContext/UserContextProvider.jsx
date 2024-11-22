// import React, { useState } from 'react'

// //create context
// const UserContext = React.createContext();


// //setup context 
// function UserContextProvider({children}) {
//     const [userdata, setUserData] = useState(null)
//     return (
//         <UserContext.Provider value={{userdata, setUserData}}>
//             {children}
//         </UserContext.Provider>
//     )
// }

// export  {UserContext, UserContextProvider}

// -------------------------------

import React, { createContext, useContext } from "react";

//create context
export const UserContext = createContext({
    userData : {
        username: '',
        password : ''
    },
    setUserData : () => {}
})

//export consumer
export const useUserContext = () => {
    return useContext(UserContext);
}

//export provider
export const ContextProvider = UserContext.Provider;