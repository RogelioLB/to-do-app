import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import Button from '../components/Button';
import {BottomForm, FormContainer, Input, InputContainer, Label, Title, Underline} from "../components/Styled"
import { UserContext } from '../context/UserContext';
import { useInput } from '../hooks/useInput'

const Login = () => {
    const email = useInput("email","Write your email","email");
    const password = useInput("password","Write your password","password");
    const {login} = useContext(UserContext);
    const history = useHistory();

    const handleClick = (e) =>{
        e.preventDefault();
        fetch("http://localhost:3000/api/login",{
            method:"POST",
            body:JSON.stringify({email:email.value,password:password.value}),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json()).then(res=>{
            if(res.status === "Success") return login(res.token);
            throw new Error(res.message)
        }).then(()=>history.replace("/home")).catch(err=>console.log(err))
    }

    return (
        <FormContainer>
            <Title>LogIn to <Underline>ToDo</Underline></Title>
            <InputContainer>
                <Label htmlFor={email.id}>E-mail: </Label>
                <Input id={email.id} value={email.value} onChange={email.onChange} placeholder={email.placeholder} type={email.type}/>
            </InputContainer>
            <InputContainer>
                <Label htmlFor={password.id}>Password: </Label>
                <Input id={password.id} value={password.value} onChange={password.onChange} placeholder={password.placeholder} type={password.type}/>
            </InputContainer>
            <BottomForm>
                <Button fill="fill" style={{width:"100%"}} onClick={handleClick}>LogIn</Button>
            </BottomForm>
        </FormContainer>
    )
}

export default Login
