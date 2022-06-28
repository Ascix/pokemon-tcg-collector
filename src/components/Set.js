import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Card from './Card'
import { Paper, Container, Grid, Typography } from '@mui/material'
import { styled, } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#F1F3DE',
    padding: theme.spacing(2),
    textAlign: 'center',
    boxShadow: 'none'
  }));

function Set() {
    const params = useParams()
    const [set, setSet] = useState(null)
  
    const getSet = () => {
        fetch(`https://api.pokemontcg.io/v2/sets/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setSet(data)
                })
            }
  
    useEffect(() => {
      getSet()
    }, [])
    if (!set) {
      return null
    }

    let cards = []
    for (let i = 1; i <= set.data.total; i++) {
        if (set.data) {
            cards.push(<Item><Card id={`${set.data.id}-${i}`} image={`https://images.pokemontcg.io/${set.data.id}/${i}.png`} /></Item>)
        }
        else if (set.error.code === 404) {
            return
        }

    }
  
    return (
    <div>
          <Typography 
          variant="h2" 
          textAlign="center"
          gutterBottom>
            {set.data.name}
        </Typography>
        <div align='center' className='row'>
            <Container align='center' sx={{ m: 2 }}>
                <Grid 
                  className="grid"
                  container 
                  spacing={1}
                  alignItems="center"
                  justifyContent="center"
                  >
                    {cards}    
                </Grid>
            </Container>
        </div>
    </div>
    )
  }

  export default Set