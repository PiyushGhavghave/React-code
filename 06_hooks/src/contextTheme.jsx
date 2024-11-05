import React, { useContext } from 'react';
import { themeContext } from './App';

function MyComponent(){
    const theme = useContext(themeContext);

    const myStyle = {
        backgroundColor : theme? '#333' : '#ccc',
        height : '100px',
        width : '100px',
        

    }

    return(
        <div style={myStyle}></div>
    )
}
export default MyComponent;