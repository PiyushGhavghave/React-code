import { useState ,useEffect} from "react";
import useLocalstorage from "./hook/useLocalstorage";

export default function App() {
  //we will use new hook instead of useState()... which will work same but saves data in local storage;
  // useLocalstorage(key,value)

  const [name, setName] = useLocalstorage('name' , '');

  function handleChange(e){
    setName(e.target.value)
  }

  return (
    <>
      <label htmlFor="name"></label>
      <input type="text" name="name" id="name" value={name} onChange={handleChange}/>
      <h2> {name} </h2>
      <button onClick={() => localStorage.clear()}>clear local storage</button>
    </>
  );
}


