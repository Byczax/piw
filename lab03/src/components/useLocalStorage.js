import {useState, useEffect} from "react";

const useLocalStorage = (key, initValue) => {
    const [value, setValue] = useState( () => {
        return localStorage.getItem(key) || initValue;
    });
    
    useEffect(() => {
        localStorage.setItem(key, value);
    }
    , [key, value]);
    return [value, setValue];
}

export default useLocalStorage;