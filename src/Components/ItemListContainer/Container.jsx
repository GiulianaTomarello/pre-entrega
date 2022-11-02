import React from 'react'
import Card from './Card'
import "./Container.css";

function Container() {
  return (
    <div className='container'>
        <Card
        title="Bandolera"
        color="#C38477"
        imgurl="/cartera1.jpeg"
        />
        <Card
        title="Cartera"
        color="#D0724E"
        imgurl="/cartera2.jpeg"
        />
        <Card
        title="Mochila"
        color="#D99AA8"
        imgurl="/mochila1.jpeg"
        />
        <Card
        title="Rinonera"
        color="#853038"
        imgurl="/rinonera1.jpeg"
        />
    </div>
  )
}

export default Container