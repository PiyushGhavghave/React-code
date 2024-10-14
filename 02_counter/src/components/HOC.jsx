import React, { useState } from 'react'

function HOC(OldComponent) {
  function newComponent(){
    const [money, setMoney] = useState(10)
    const increaseFunc = ()=> {
      setMoney(money * 2);
    }
    return <OldComponent money= {money} increaseFunc= {increaseFunc}/>
  }
  return newComponent;
}

export default HOC;
