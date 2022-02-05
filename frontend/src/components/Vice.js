import React from 'react'
import '../App.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Vice = (props) => {
  console.log(props)
  const { name, description, amount } = props

  return(
    <Card className="vice-card">
      <div className="vice-card__bg"></div>
      <div className="vice-card-content">
        <div className="vice-card__img-container">
          <img className="vice-card__img" src="logo192.png" />
        </div>
        <div className="vice-card__info">
          <h2 className="vice-card__name">{name}</h2>
          <p className="vice-card__desc">{description}</p>
        </div>
      </div>
      <div className="vice-card__price-btn-conatiner">
        <span className="vice-card__price"> ${amount} </span>
        <Button className="vice-card__btn" onClick={() => props.handleClick(props)} variant="info">Give this Up</Button>
      </div>
    </Card>

  )
}

export default Vice
