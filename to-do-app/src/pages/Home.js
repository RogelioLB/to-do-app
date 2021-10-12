import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Card from '../components/Card'
import TopBar from '../components/TopBar'
import { useThing } from '../hooks/useThings'


const Container = styled.div`
position:relative;
`

const AddButton = styled(Link)`
position:fixed;
bottom:30px;
right:40px;
background-color:#2563EB;
border-radius:50%;
width:50px;
height:50px;
display:flex;
justify-content: center;
align-items: center;
color:white;
text-decoration:none;
z-index:1;
`

const Home = () => {
    const {things,loading} = useThing();
    return (
        <>
            <TopBar />
            <Container>
                {
                    !loading && things && (
                        things.map((thing,id)=>(
                            <Card author={thing.user} key={id} thing={thing}/>
                        ))
                    )
                }
                <AddButton to="/add">A</AddButton>
            </Container>
        </>
    )
}

export default Home
