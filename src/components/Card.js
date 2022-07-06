import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import './Card.css'
import { useDispatch, useSelector } from 'react-redux';
import { addCard, removeCard } from '../redux/collection/actions';

function Card(props) {
    const { id, image } = props
    const dispatch = useDispatch()
    const cards = useSelector(state => state.ownedCards)
    const alreadyAdded = cards?.some(card => card.id === id)

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const handleAdd = () => {
        dispatch(addCard({
            id,
            images: {small:image},
            set: {id}
        }))
    }
    const handleRemove = () => {
        dispatch(removeCard({
            id
        }))
    }

    useEffect(() => {
        fetch(image)
        .then(res => {
            if (res.status === 404) {
                setError(true)
            }
            setLoading(false)
        })
    },[image])
    if (error) {
        return null
    }
    if (loading) {
        return <CircularProgress  style={{ color: "#EB8F8F" }}/>
    }

    return (
        <div className="contain">
            <Link to={`/card/${id}`}>
                    <img src={image} alt="pic"></img>
            </Link>
            {
                alreadyAdded ? <button onClick={() => handleRemove()} className="btn">-</button> : 
                <button onClick={() => handleAdd()} className="btn">+</button>
}   
        </div>
    )
}

export default Card