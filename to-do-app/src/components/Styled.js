import styled from "styled-components"

export const FormContainer = styled.form`
width:100%;
display:flex;
flex-direction: column;
min-height: 100%;
background-color: #fff;
padding:25px;
@media (min-width:768px){
    width:600px;
    margin:0 auto;
}
`

export const Title = styled.h1`
margin-bottom:20px;
font-size:45px;
font-weight:800;
`

export const Underline = styled.span`
text-decoration: underline #2563EB;
color:#2563EB;
`

export const InputContainer = styled.div`
display:flex;
flex-direction: column;
margin:10px 0;
`

export const Label = styled.label`
color:#2563EB;
font-weight:500;
`

export const Input = styled.input`
padding:5px;
outline:none;
border:1px solid black;
border-radius: 2px;
margin:10px 0;
font-size:18px;
box-shadow:0px 0px 10px rgba(0,0,0,.1);
&:focus{
    border:1px solid #2563EB;
}
`;

export const LabelFile = styled.label`
display:flex;
justify-content:center;
border:none;
background-color: #2563EB;
padding:10px 15px;
font-size: 20px;
color:#fff;
border-radius:28px;
cursor:pointer;
transition:.2s all;
margin:0 5px;
`

export const ImageContainer = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
margin-top:20px;
`

export const Image = styled.img`
width:100%;
@media (min-width: 768px){
    width:50%;
}
object-fit:cover;
`

export const BottomForm = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
flex:1;
`;

export const TextArea = styled.textarea`
padding:5px;
outline:none;
border:1px solid transparent;
border-radius: 2px;
margin:10px 0;
font-size:18px;
min-height:150px;
max-height:150px;
max-width:100%;
min-width:100%;
&:focus{
    border:1px solid #2563EB;
}
`

export const ImageCard = styled.img`
max-width: clamp(240px,60.5vw,350px);
object-fit: cover;
margin: 0 10px 0 0;
border-radius: 3px;
max-height:280px;
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

export const ImageWrapper = styled.div`
margin-top:10px;
display:flex;
overflow-y: hidden;

& img:last-child{
    margin:0 !important;
}
`