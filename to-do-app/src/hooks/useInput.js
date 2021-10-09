import {useState} from "react"
export const useInput = (type,placeholder,id) =>{
    const [value,setValue] = useState("");
    const [src,setSrc] = useState("");

    const onChange = (e) =>{
        setValue(e.target.value)
    }

    const onChangeFile = (e) =>{
        setValue(e.target.files[0]);
        const fileReader = new FileReader();
        fileReader.onload = (e) => setSrc(fileReader.result)
        fileReader.readAsDataURL(e.target.files[0]);   
    }

    return {type,placeholder,value,onChange,id,onChangeFile,src};
}