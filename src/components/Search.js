import { useState } from 'react'
import Card from './Card'
import { Container, Grid, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import './Search.css'
import pokemon from 'pokemontcgsdk'
pokemon.configure({apiKey: '0903cfaf-97d3-42cb-84cf-c142627e9438'})

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#F1F3DE',
    padding: theme.spacing(2),
    textAlign: 'center',
    boxShadow: 'none'
  }));

function CardSearch() {
    const [card, setCard] = useState('')
    const [results, setResults] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        pokemon.card.where({ q: `name:${card}`, orderBy:"set.releaseDate" })
            .then(data => {
                setCard('')
                setResults(data.data)
            })
    }

    return (
        <>
        <Container align='center'>
            <form onSubmit={handleSubmit}>
                <h1>
                    Pokemon TCG Database
                </h1>
                <input type="text" id="card" name="card" placeholder="Search a card"></input><br></br>
                <br></br>
                <button type="submit" variant="outlined">Submit</button>
            </form>
        </Container>
        <Container sx={{ m: 2 }}>
            <Grid 
                className="grid"
                container 
                spacing={1}
                alignItems="center"
                justifyContent="center"
                >
                {
                results.map(result => {
                    return <Item><Card key={result.id} setid={result.set.id} id={result.id}  image={result.images.small} /></Item>
                })
                }
            </Grid>
        </Container>
        </>
    )
}

export default CardSearch