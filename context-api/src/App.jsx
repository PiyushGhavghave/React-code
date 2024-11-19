import { useState } from 'react'
import './App.css'
import UserContextProvider from './userContext/userContextProvider'
import Login from './component/login'
import Profile from './component/profile'

function App() {

  return(
    <>
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
    </>
  )
}

export default App
