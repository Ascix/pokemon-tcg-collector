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
      <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <div align='center' className='row'>
            <div className="image">
                <img className='card' src={detail.data.images.large} alt={detail.data.name}></img>
            </div>
            <React.Fragment>
                <CardContent >
                  <Typography
                    variant="h2" 
                    textAlign="center"
                    color="#EC0101"
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
                  {detail.data.tcgplayer.prices.normal ? <Typography 
                    variant="body2">
                      Market Price: ~${detail.data.tcgplayer.prices.normal.market.toFixed(2)}*
                  </Typography> 
                  : detail.data.tcgplayer.prices.holofoil ? <Typography 
                    variant="body2">
                      Market Price: ~${detail.data.tcgplayer.prices.holofoil.market.toFixed(2)}*
                  </Typography> 
                  : detail.data.tcgplayer.prices.unlimitedHolofoil ? <Typography 
                    variant="body2">
                      Market Price: ~${detail.data.tcgplayer.prices.unlimitedHolofoil.market.toFixed(2)}*
                  </Typography> 
                  : detail.data.tcgplayer.prices.unlimited ? <Typography 
                    variant="body2">
                      Market Price: ~${detail.data.tcgplayer.prices.unlimited.market.toFixed(2)}*
                  </Typography> : <Typography 
                    variant="body2">
                      Market Price: ~${detail.data.tcgplayer.prices.reverseHolofoil.market.toFixed(2)}*
                  </Typography> 
                  }
                  <br></br>
                  <Typography 
                    variant="body2">
                      * price last checked: {new Date(detail.data.tcgplayer.updatedAt).toLocaleDateString()}
                  </Typography>
                  <br></br>
                  <button><a href={detail.data.tcgplayer.url} >TCGplayer</a></button>
                </CardContent>
            </React.Fragment>
        </div>
        </>
    )
  }

  export default CardDetails