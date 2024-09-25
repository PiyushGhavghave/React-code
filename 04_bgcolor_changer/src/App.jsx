import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShuffle} from '@fortawesome/free-solid-svg-icons';


function changeBG() {
  const [color, setColor] = useState("#77B6EA");

  function generate(){
    const colors = '0123456789abcdef';
    let myColor = '#'
    for(let i=0; i< 6;i++){
      let randomNum = Math.floor(Math.random() * 16);
      myColor += colors[randomNum];
    }
    return myColor;
  }

  const colorOptions = [
    { name: 'Red', value: 'red' },
    { name: 'Green', value: 'green' },
    { name: 'Yellow', value: 'yellow' },
    { name: 'Olive', value: 'olive' },
    { name: 'Orange', value: 'orange' },
    { name: 'Purple', value: 'purple' },
    { name: 'Blue', value: 'blue' }
  ];


  return (
    <>
      <div className="w-full h-screen flex justify-center items-center duration-300" style={{ backgroundColor: color }}>

        <div className=" flex bg-slate-200 flex-wrap justify-center gap-3 shadow-lg rounded-2xl px-3 py-2">
          
          {/* Generate colors buttons */}
          {colorOptions.map( (color) => (
            <button onClick={() => setColor(color.value)} className="outline-none rounded-2xl shadow-lg px-4 py-1 text-white" style={{backgroundColor: color.value}}>{color.name}</button>
          ))}

          <button onClick={() => setColor(generate())} className="outline-none rounded-2xl shadow-lg px-4 py-1 text-white" style={{backgroundColor:'gray'}}>Random <FontAwesomeIcon icon={faShuffle} /></button>

        </div>
      </div>
    </>
  );
}

export default changeBG;
