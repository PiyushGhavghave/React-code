import React, { useState } from 'react'
import HOC from './HOC'

function Person2({money,increaseFunc}) {
  return (
    <div>
      <p>Aniket is offering {money}</p>
      <button onClick={increaseFunc}>Increase</button>
    </div>
  )
}

export default HOC(Person2)
