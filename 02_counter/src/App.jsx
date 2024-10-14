import { useState } from 'react'
import './App.css'
import Person1 from './components/Person1'
import Person2 from './components/Person2'

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
    <div>
      <h2 style={{color:'skyblue'}}>Higher Order Component Example</h2>
      <Person1/>
      <Person2/>
      
    </div>
    </>
  )
}

export default App
