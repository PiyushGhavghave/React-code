import React, { createContext, useContext, useEffect, useState } from "react";
import "./App.css"
import MyComponent from "./contextTheme";

function App() {
  const [myResource, setResource] = useState("post");

  const themeContext = React.createContext();

  useEffect(()=> {
    console.log('resource changed')
  }, [myResource])

  return (
    <>
      <div id="main">
        <div id="r1" onClick={() => setResource("post")}>
          post
        </div>
        <div id="r2" onClick={() => setResource("comment")}>
          comment
        </div>
        <div id="r3" onClick={() => setResource("like")}>
          like
        </div>
      </div>
      <h2>{myResource}</h2>

      <button >Change Theme</button>
    </>
  );
}
// export default App;



//------------------------ useContext 

export const themeContext = createContext();

function ContextHook(){
  const [dark, setDark] = useState(true);

  return(
    <themeContext.Provider value={dark}>
      <button onClick={() => setDark((theme) => !theme)}>{dark ? 'Dark' : 'Light'} </button>
      <MyComponent />
    </themeContext.Provider>

  )
}
export default ContextHook;
