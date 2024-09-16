import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'


function MyApp(){
  return(
    <a href="https://google.com" target='_blank'>click me to open google using jsx function</a>
  )
}

//method 1
const AnotherElement = (
  <a href="https://google.com" target='_blank'>click me</a>
)

//method 2
const reactElement = React.createElement(
  'a',
  {
    href : 'https://google.com',
    target : '_blank'
  },
  'Click me to open google'
)



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
)
