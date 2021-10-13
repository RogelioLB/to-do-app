import React from 'react'
import styled from 'styled-components'
import { ImageCard,Wrapper} from './Styled'

const CardContainer = styled.div`
background-color: #fff;
width:100%;
border-bottom:1px solid rgb(239, 243, 244);
`

const CardTop = styled.div`
background: #FFFFFF;
border-bottom:1px solid rgb(239, 243, 244);
padding:10px;
display:flex;
align-items: center;
font-weight: 600;
font-size: 20px;
position: relative;
z-index:1;
`
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

const CardBody = styled.div`
background-color: #fff;
padding:5px;
border-bottom:1px solid rgb(239, 243, 244);
`

const Description = styled.p`
font-size:18px;
font-weight:16px;
`


const CardBottom = styled(CardTop)`
display:flex;
justify-content: flex-end;
align-items:center;
`

const Circle = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:${props=>props.state === "ACTIVE" ? "#2fd11a" : "#c21b1b"};
margin-right: 10px;
`

const Card = ({author,thing}) => {
    return (
        <CardContainer>
            <CardTop>
                <Img src={author.avatar} />
                {thing.title}   -  {author.username}
            </CardTop>
            <CardBody>
                <Description>{thing.description}</Description>
                <ImageWrapper>
                    {
                        thing.images.map((image,id)=>(
                            <ImageCard src={image.path} key={id}/>
                        ))
                    }
                </ImageWrapper>
            </CardBody>
            <CardBottom>
                {thing.state === "ACTIVE" ? <Circle state={thing.state}/> : <></>}{thing.state}
            </CardBottom>
        </CardContainer>
    )
}

export default Card
