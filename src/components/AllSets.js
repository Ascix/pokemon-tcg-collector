import { styled } from '@mui/material/styles'
import { Grid, Paper } from '@mui/material'
import { Container } from '@mui/system'
import pokemon from 'pokemontcgsdk'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './AllSets.css'
pokemon.configure({apiKey: '0903cfaf-97d3-42cb-84cf-c142627e9438'})

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#F1F3DE',
    padding: theme.spacing(2),
    textAlign: 'center',
    boxShadow: 'none'
  }));

function AllSets() {
    const [sets, setSets] = useState([])

    useEffect(() => {
        pokemon.set.all({ orderBy:"releaseDate"})
            .then((sets) => {
                setSets(sets)
      })
    },[]) 

    return (
        <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div align='center' className='row'>
            <Container align='center' spacing={2}>
                <Grid 
                  className="grid"
                  container 
                  alignItems="center"
                  justifyContent="center"
                  >
                {
                  sets.map(set => {
                    return (
                        <Item><Link to={`/set/${set.id}`}>
                                <img src={set.images.logo} alt={set.name}></img>
                                <h5 >
                                  {set.name}
                                </h5>
                        </Link></Item>

                    )
                })
                } 
                </Grid>
            </Container>
        </div>
        </>
    )
}

export default AllSets