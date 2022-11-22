import {useState} from "react";
export default function useToggle (){
    const [value, setValue] = useState(false)
    const changeValue = () => setValue(!value);
    return [value, changeValue]
}