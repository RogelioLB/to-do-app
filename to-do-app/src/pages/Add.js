import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router';
import Button from '../components/Button';
import { BottomForm, FormContainer, ImageCard, ImageContainer, ImageWrapper, Input, InputContainer, Label, LabelFile, TextArea, Title, Underline } from '../components/Styled'
import { UserContext } from '../context/UserContext';
import { useInput } from '../hooks/useInput'

const Add = () => {
    const title = useInput("text","Title for yout task.","title");
    const desc = useInput("text","Description for your task. (Max char 255)","desc");
    const file = useInput("file","","file",true)
    const history = useHistory();

    const {token} = useContext(UserContext)

    const UploadPost = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("title",title.value);
        formData.append("description",desc.value)
        file.files.forEach(f=>{
            console.log(f)
            formData.append("files",f.file);
        });
        formData.append("state","1");
        fetch("/api/things",{
            method:"POST",
            body:formData,
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json()).then(res=>history.replace("/home"));
    }

    return (
        <FormContainer>
            <Title>Create new <Underline>Task</Underline></Title>
            <InputContainer>
                <Label htmlFor={title.id}>Title:</Label>
                <Input {...title} />
            </InputContainer>
            <InputContainer>
                <Label htmlFor={desc.id}>Description: </Label>
                <TextArea {...desc} minLength={1} maxLength={255}/>
                <ImageWrapper>
                    {
                        !file.files.length ? <></> : file.files.map((image,id)=><ImageCard src={image.src}key={id}/>)
                    }
                </ImageWrapper>
            </InputContainer>
            <BottomForm style={{flexDirection:"row",justifyContent:"space-between",alignItems:"end"}}>
                <LabelFile style={{padding:"10px"}} htmlFor={file.id}><FontAwesomeIcon icon={faImage}/></LabelFile>
                <Input {...file} style={{display:"none"}} accept="image/*" onChange={file.onChangeFile}/>
                <Button fill="fill" onClick={UploadPost}>Post</Button>
            </BottomForm>
        </FormContainer>
    )
}

export default Add
