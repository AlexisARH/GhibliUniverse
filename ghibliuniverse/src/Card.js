import { render } from '@testing-library/react'
import React from 'react'
import "./styles/card.css"

function Card(props){
    return (
        <div className="card">
            <h2 className="title">{ props.movie.title }</h2>
            <h3 className="originalTitle">{ props.movie.original_title } | {props.movie.original_title_romanised}</h3>
            <p className="description">{ props.movie.description }</p>
            <ul className="infos">
                <li className="director">By {props.movie.director}</li>
                <li className="year">Released in {props.movie.release_date}</li>
            </ul>
        </div>
    )
}

export default Card;