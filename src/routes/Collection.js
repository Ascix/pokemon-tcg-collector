
import { Container, Grid, Paper, styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#F1F3DE',
    padding: theme.spacing(2),
    textAlign: 'center',
    boxShadow: 'none'
  }));

function Collection() {
    const cards = useSelector(state => state.ownedCards)
  return (
    <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    <Container>
        <Grid 
              className="grid"
              container 
              spacing={1}
              alignItems="center"
              justifyContent="center"
              >
            {
                cards.map(card => {
                    return <Item><Card key={card.id} setid={card.set.id} id={card.id} image={card.images.small} /></Item>
                })
            }
        </Grid>
    </Container>
    </>
  )
}

export default Collection