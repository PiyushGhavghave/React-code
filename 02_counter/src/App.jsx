import { useState } from 'react'
import './App.css'

function App() {
  // let count = 15;

  let [count,setCount] = useState(15)

  function increase(){
    if(count < 22){
      // count += 1;
      setCount(count + 1)
    }
  }
  const decrease = () => {
    if(count > 0){
      // count -= 1;
     setCount(count - 1)
    }
  }

  return(
    <>
    <h1>My counter</h1>
    <h3>Counter value {count} </h3>
    <button onClick={increase}>Increment</button>
    <button onClick={decrease}>Decrement</button>

    <footer>this is value of counter in footer {count}</footer>
    </>
  )
}

export default App
