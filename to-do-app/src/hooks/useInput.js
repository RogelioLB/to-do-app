import {useState} from "react"
export const useInput = (type,placeholder,id,multiple) =>{
    const [value,setValue] = useState("");
    const [src,setSrc] = useState("");
    const [files,setFiles] = useState([]);

    const onChange = (e) =>{
        setValue(e.target.value)
    }

    const onChangeFile = (e) =>{
        if(!multiple){
            setValue(e.target.files[0]);
            const fileReader = new FileReader();
            fileReader.onload = () => setSrc(fileReader.result)
            fileReader.readAsDataURL(e.target.files[0]);  
        } 
        const filesArray = Array.from(e.target.files);
        filesArray.forEach(e=>{
            const fileReader = new FileReader();
            fileReader.onload = () =>setFiles(prev=>[...prev,...[{src:fileReader.result,file:e}]]);
            fileReader.readAsDataURL(e)
        })
    }

    return {type,placeholder,value,onChange,id,onChangeFile,src,multiple,files};
}