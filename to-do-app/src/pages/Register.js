import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import Button from '../components/Button';
import { FormContainer, ImageContainer, Input, InputContainer, Label, LabelFile, Title, Underline,Image, BottomForm } from '../components/Styled';
import { UserContext } from '../context/UserContext';
import { useInput } from '../hooks/useInput';


const Register = () => {
    const username = useInput("text","Write your username: ","username");
    const email = useInput("email","Write your e-mail: ","email");
    const password = useInput("password","Write your pasword: ","password");
    const avatar = useInput("file","","avatar");
    const {login} = useContext(UserContext);
    const history = useHistory()

    const handleClick = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('avatar', avatar.value);
        formData.append("username",username.value)
        formData.append("email",email.value)
        formData.append("password",password.value)
        fetch("http://localhost:3000/api/login/register",{
            method:"POST",
            body:formData
        }).then(res=>res.json()).then(res=>login(res.token)).finally(()=>history.replace("/home")).catch(err=>console.log(err));
    }

    return (
        <FormContainer>
            <Title>Welcome To <Underline>ToDo</Underline></Title>
            <InputContainer>
                <Label htmlFor={username.id}>Username:</Label>
                <Input type={username.type} id={username.id} value={username.value} onChange={username.onChange} placeholder={username.placeholder}/>
            </InputContainer>
            <InputContainer>
                <Label htmlFor={email.id}>E-Mail:</Label>
                <Input id={email.id} type={email.type} value={email.value} onChange={email.onChange} placeholder={email.placeholder}/>
            </InputContainer>
            <InputContainer>
                <Label htmlFor={password.id}>Password:</Label>
                <Input type={password.type} id={password.id} value={password.value} onChange={password.onChange} placeholder={password.placeholder} />
            </InputContainer>
            <BottomForm>
                <LabelFile htmlFor={avatar.id}>Choose Image To Avatar</LabelFile>
                <Input type={avatar.type} id={avatar.id} onChange={avatar.onChangeFile} style={{display:"none"}} multiple={false} accept="image/*"/>
                <ImageContainer>
                    {
                        avatar.value ? <Image src={avatar.src}/> : <h2>No file provided.</h2>
                    }
                </ImageContainer>
                <Button fill="fill" style={{width:"100%",margin:"10px 0"}} onClick={handleClick}>Create User</Button>
            </BottomForm>
        </FormContainer>
    )
}

export default Register
