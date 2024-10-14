import React, { useState } from 'react'
import HOC from './HOC'

function Person1({money,increaseFunc}) {
  return (
    <div>
      <p>Piyush is offering {money}</p>
      <button onClick={increaseFunc}>Increase</button>
    </div>
  )
}

export default HOC(Person1)
