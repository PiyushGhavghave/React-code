import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Card from "./components/Cards";

function App() {

  const myCards =[
    {
      info : "If the sentence is the essential soul to express oneself in their own way, then the paragraph is the virtual body of it. The Text Generator is an intelligent tool that creates random text incorporated with random thoughts. This smart tool is a virtual friend of yours that can talk to you in multidimensional thinking",
      btnText : "Visit me"
    },
    {
      info : "hello ipsum dolor sit amet consectetur, adipisicing elit. Saepe quae ut architecto iure quisquam molestias? Quas vel veniam temporibus distinctio similique aut ratione illum ut architecto iure quisquam molestias? Quas vel veniam temporibus distinctio similique aut ratione illum.",
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
