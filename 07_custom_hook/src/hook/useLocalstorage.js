import React,{useState, useEffect} from "react";

export default function useLocalstorage(key, initialData){
    // ***** initialData is only meant to set an initial value if there's no existing value in local storage. ******


    //initialization
    const [item, setItem] = useState(() => {
        return JSON.parse(localStorage.getItem(key)) ?? initialData;
    });
    
    //if 'item' changes... then save in local storage
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(item));
    }, [key, item]);

    return [item, setItem];

    
}
