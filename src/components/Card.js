import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import './Card.css'



function Card(props) {
    const { id, image } = props
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch(image)
        .then(res => {
            if (res.status == 404) {
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
        <Link to={`/card/${id}`}><img src={image} alt="pic"></img></Link>
    )
}

export default Card