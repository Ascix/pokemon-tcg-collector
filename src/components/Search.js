import { useState } from 'react'
import Card from './Card'
import { Button, Container, TextField, Grid, Paper } from '@mui/material'
import { styled, createTheme } from '@mui/material/styles'
import './Search.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#F1F3DE',
    padding: theme.spacing(2),
    textAlign: 'center',
    boxShadow: 'none'
  }));

const CssTextField = styled(TextField)(() => ({
  root: {
    '& label.Mui-focused': {
      color: '#CD0A0A' 
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#CD0A0A',
      },
      '&:hover fieldset': {
        borderColor: '#CD0A0A',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#CD0A0A',
      },
    },
  },
}));

function CardSearch() {
    const [card, setCard] = useState('')
    const [results, setResults] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch(`https://api.pokemontcg.io/v2/cards?q=name:${card}`)
            .then(res => res.json())
            .then(data => {
                if (data.count !== 0) {
                    setCard('')
                    setResults(data.data)
                }
            })
    }

    return (
        <>
        <Container align='center'>
            <form onSubmit={handleSubmit}>
                <h1>
                    Pokemon TCG Database
                </h1>
                <CssTextField
                    InputProps={{ style: { backgroundColor: "#EB8F8F", color: "#CD0A0A" } }}
                    inputProps={{ style: { backgroundColor: "#EB8F8F", color: "#CD0A0A" } }}
                    style={{width: '50%'}}
                    id="filled-search"
                    label="Enter a Pokemon"
                    type="search"
                    variant="outlined"
                    value={card}
                    onChange={(e) => setCard(e.target.value)}
                />
                <br></br>
                <Button style ={{width: '50%'}} type="submit" variant="outlined">Submit</Button>
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
                    return <Item><Card setid={result.set.id} id={result.id} image={result.images.small} /></Item>
                })
                }
            </Grid>
        </Container>
        </>
    )
}

export default CardSearch