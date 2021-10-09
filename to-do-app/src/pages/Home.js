import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import TopBar from '../components/TopBar'
import { useThing } from '../hooks/useThings'


const Container = styled.div`
position:relative;
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
            </Container>
        </>
    )
}

export default Home
