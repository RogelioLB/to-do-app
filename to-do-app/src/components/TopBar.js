import styled from "styled-components";
import Button from "./Button";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const TopBar = () => {
    const {user,logOut} = useContext(UserContext);

    const Bar = styled.div`
    background-color:#FFFFFF;
    display:flex;
    justify-content: space-between;
    padding:10px;
    box-shadow: 0px 2px 24px 1px rgba(0, 0, 0, 0.1);
    position:relative;
    z-index:2;
    `

    const RightSide = styled.div`
    display: flex;
    align-items: center;
    `;

    const Title = styled.h1`
    color:black;
    font-size:38px;
    font-weight:700;
    `;

    const Img = styled.img`
    width: 52px;
    height: 52px;
    margin-right: 10px;
    object-fit: cover;
    border:none;
    border-radius: 50%;
    animation:skeleton 1s infinite alternate;
    @keyframes skeleton{
        0%{
            background-color: hsl(200,20%,70%);
        }
        100%{
            background-color: hsl(200,20%,95%);
        }
    }
    `
    return (
        <Bar>
            <Title>ToDo</Title>
            <RightSide>
                {
                    user ? (<><Img src={user.avatar}/><Button fill="fill" onClick={()=>logOut()} >LogOut</Button></>) : (
                    <>
                        <Link to="/register">
                            <Button fill="no">Register</Button>
                        </Link>
                        <Link to="/login">
                            <Button fill="fill">Login</Button>
                        </Link>
                    </>
                    )
                }
            </RightSide>
        </Bar>
    )
}

export default TopBar
