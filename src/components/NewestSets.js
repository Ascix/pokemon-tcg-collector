import { Button } from '@mui/material'
import pokemon from 'pokemontcgsdk'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import './NewestSets.css'
import PlaceholderCards from './PlaceHolderCards'
pokemon.configure({apiKey: '0903cfaf-97d3-42cb-84cf-c142627e9438'})

function NewestSets() {
    const [sets, setSets] = useState([])
    const [cards, setCards] = useState([])
    const [cards2, setCards2] = useState([])
    const [cards3, setCards3] = useState([])

    useEffect(() => {
        pokemon.set.all({ orderBy:"-releaseDate"})
            .then((sets) => {
                setSets(sets)
                pokemon.card.where({ q: `set.id:${sets[0].id}` })
                .then(result => {
                        setCards(result.data)
                    })
                pokemon.card.where({ q: `set.id:${sets[1].id}` })
                .then(result => {
                        setCards2(result.data)
                    })
                pokemon.card.where({ q: `set.id:${sets[2].id}` })
                .then(result => {
                        setCards3(result.data)
                    })
  })
    },[])

    return (
        <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>
            Latest Sets
        </h1>
        <div className="container">
            <div className="setName row">
                <div className="title row">
                    <img src={sets[0]?.images.logo} alt="logo"></img>
                </div>
                    <h1>
                        {sets[0]?.name}
                    </h1>
                <div className="button">
                    <Link to={`/set/${sets[0]?.id}`}><Button variant="text" sx={{
                    backgroundColor: "#EB8F8F",
                    color:"#CD0A0A",
                    borderColor: "#EC0101",
                    "&:hover": {
                      backgroundColor: "#EB8F8F",
                      color:"#CD0A0A",
                      borderColor: "#EC0101"
                    }
                }}>
                        See all >
                    </Button></Link>
                </div>
            </div>
            <div className="row">
                { cards[0] ? 
                cards.slice(0,5).map((card) => {
                    return <div className='card'><Card key={card.id} setid={card.set.id} id={card.id} image={card.images.small} /></div>
                }) : <PlaceholderCards />
                }
            </div>
        </div>
        <div className="container">
            <div className="setName row">
                <div className="title row">
                    <img src={sets[1]?.images.logo} alt="logo"></img>
                </div>
                    <h1>
                        {sets[1]?.name}
                    </h1>
                <div className="button">
                <Link to={`/set/${sets[1]?.id}`}><Button variant="text" sx={{
                    backgroundColor: "#EB8F8F",
                    color:"#CD0A0A",
                    borderColor: "#EC0101",
                    "&:hover": {
                      backgroundColor: "#EB8F8F",
                      color:"#CD0A0A",
                      borderColor: "#EC0101"
                    }
                }}>
                        See all >
                    </Button></Link>
                </div>
            </div>
            <div className="row">
                { cards[1] ? 
                cards2.slice(0,5).map((card) => {
                    return <div className='card'><Card key={card.id} setid={card.set.id} id={card.id} image={card.images.small} /></div>
                }) : <PlaceholderCards />
                }
            </div>
        </div>
        <div className="container">
            <div className="setName row">
                <div className="title row">
                    <img src={sets[2]?.images.logo} alt="logo"></img>
                </div>
                    <h1>
                        {sets[2]?.name}
                    </h1>
                <div className="button">
                <Link to={`/set/${sets[2]?.id}`}><Button variant="text" sx={{
                    backgroundColor: "#EB8F8F",
                    color:"#CD0A0A",
                    borderColor: "#EC0101",
                    "&:hover": {
                      backgroundColor: "#EB8F8F",
                      color:"#CD0A0A",
                      borderColor: "#EC0101"
                    }
                }}>
                        See all >
                    </Button></Link>
                </div>
            </div>
            <div className="row">
                { cards[2] ? 
                cards3.slice(0,5).map((card) => {
                    return <div className='card'><Card key={card.id} setid={card.set.id} id={card.id} image={card.images.small} /></div>
                }) : <PlaceholderCards />
                }
            </div>
        </div>
        
        </>
    )
}

export default NewestSets