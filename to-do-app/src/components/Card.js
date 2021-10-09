import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
background-color: #fff;
width:100%;
`

const CardTop = styled.div`
background: #FFFFFF;
box-shadow: 0px 0px 24px -1px rgba(0, 0, 0, 0.1);
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
`

const ImageContainer = styled.div`
margin-top:10px;
display:flex;
overflow-y: hidden;

& img:last-child{
    margin:0 !important;
}
`

const Description = styled.p`
font-size:18px;
font-weight:16px;
`

const ImageCard = styled.img`
max-width: clamp(240px,60.5vw,350px);
object-fit: cover;
margin: 0 10px 0 0;
border-radius: 3px;
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
const Card = ({author,thing}) => {
    return (
        <CardContainer>
            <CardTop>
                <Img src={author.avatar} />
                {thing.title}   -  {author.username}
            </CardTop>
            <CardBody>
                <Description>{thing.description}</Description>
                <ImageContainer>
                    {
                        thing.images.map((image,id)=>(
                            <ImageCard src={image.path} key={id}/>
                        ))
                    }
                </ImageContainer>
            </CardBody>
        </CardContainer>
    )
}

export default Card
