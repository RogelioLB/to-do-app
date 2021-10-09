import React from 'react'
import styled from "styled-components"

const ContainerBtn = styled.button`
border:${props=>props.fill === "fill" ? "2px solid transparent" : "2px solid #2563EB"};
background-color: ${props=>props.fill === "fill" ? "#2563EB" : "#FFFFFF"};
padding:10px 15px;
font-size: 20px;
color:${props=>props.fill === "fill" ? "#fff" : "black"};
border-radius:28px;
cursor:pointer;
transition:.2s all;
&:hover{
    color:${props=>props.fill !== "fill" ? "#fff" : "black"};
    border:${props=>props.fill !== "fill" ? "2px solid transparent" : "2px solid #2563EB"};
    background-color: ${props=>props.fill !== "fill" ? "#2563EB" : "#FFFFFF"};
}
margin:0 5px;
`;
const Button = ({children,fill,onClick,style}) => {
    return (
        <ContainerBtn fill={fill} onClick={onClick} style={style}>{children}</ContainerBtn>
    )
}

export default Button
