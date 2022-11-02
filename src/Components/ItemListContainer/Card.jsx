import React from 'react'
import "./Card.css";
import ClickCounter from './ClickCounter';

function Card(props) {
  return (
    <div className='card'>
    {props.title}
    <div className='card-img'>
    <img src= {props.imgurl} alt="" />
    </div>
    <ClickCounter  color={props.color} stock={4} title="agregar"/>
    </div>
  )
}

export default Card