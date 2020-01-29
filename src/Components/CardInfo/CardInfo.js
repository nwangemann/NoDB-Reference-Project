import React from 'react';
import './CardInfo.css'

function CardInfo(props){
    const { name, imageURL, age, breed, id } = props.pet
    return (
        <div className='card'>
            <h2>{name}</h2>
            <img src={imageURL} alt="petpic" />
            <p>age: {age}</p>
            <p>breed: {breed}</p>
            <button onClick={props.toggle}>Edit</button>
            <button onClick={() => props.delete(id)}>Delete</button>
        </div>

    )
}

export default CardInfo