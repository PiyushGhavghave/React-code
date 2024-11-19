import { useState } from 'react'
import './App.css'
import { UserContextProvider } from './UserContext/UserContextProvider'
import Login from './Componrnt/Login'
import Profile from './Componrnt/Profile'

function App() {

  return (
    <>
      <UserContextProvider >
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
