import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Card from "./components/Cards";

function App() {

  const myCards =[
    {
      info : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quae ut architecto iure quisquam molestias? Quas vel veniam temporibus distinctio similique aut ratione illum.",
      btnText : "Visit me"
    },
    {
      info : "hello ipsum dolor sit amet consectetur, adipisicing elit. Saepe quae ut architecto iure quisquam molestias? Quas vel veniam temporibus distinctio similique aut ratione illum.",
    }
  ]

  return (
    <>
      {myCards.map((data) => (
        <Card mydata={data} hashtag = {["Games","Travel","Science"]} />
      ))}
      
    </>
  );
}

export default App;
