import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Typography, CardContent } from '@mui/material'
import './CardDetails.css'



function CardDetails() {
    const params = useParams()
    const [detail, setDetail] = useState(null)
  
    const getDetail = () => {
        fetch(`https://api.pokemontcg.io/v2/cards/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setDetail(data)
                })
            }
  
    useEffect(() => {
      getDetail()
    }, [])
    if (!detail) {
      return null
    }
  
    return (
        <div align='center' className='row'>
            <div>
                <img src={detail.data.images.small}></img>
            </div>
            <React.Fragment>
                <CardContent >
                  <Typography 
                    variant="h5" 
                    color="text.primary" 
                    gutterBottom>
                      {detail.data.name}
                  </Typography>
                  <Typography 
                    sx={{ mb: 1.5 }} 
                    color="text.secondary">
                      Set: <Link to={`/set/${detail.data.set.id}`}>{detail.data.set.name}</Link> <img className='logo' src={detail.data.set.images.symbol}></img>
                  </Typography>
                  <Typography 
                    variant="body2">
                      Release Date: {new Date(detail.data.set.releaseDate).toLocaleDateString()}
                  </Typography>
                  <Typography 
                    variant="body2">
                      Market Price: ${(detail.data.cardmarket.prices.averageSellPrice * 1.06).toFixed(2)}
                  </Typography>
                </CardContent>
            </React.Fragment>
        </div>
    )
  }

  export default CardDetails