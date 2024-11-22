import { useState } from 'react'
import './App.css'
import {ContextProvider}  from './UserContext/UserContextProvider'
import Login from './Componrnt/Login'
import Profile from './Componrnt/Profile'

function App() {
  const [userData, setUserData] = useState(null)

  return (
    <>
      <ContextProvider value = {{userData, setUserData}}>
        <Login />
        <Profile />
      </ContextProvider>
    </>
  )
}

export default App
