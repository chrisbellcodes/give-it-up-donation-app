import React from 'react'
import '../App.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const Vice = (props) => {
  const { name, amount } = props

  return(
    <Card bg="dark" text="light" style={{ "min-width": '200px' }} as={Col} xs={2} className="mx-2 my-4">
      <Card.Img as={Image} variant="top" src="logo192.png" />
      <Card.Body>
        <Card.Title className="cardtext">{name}</Card.Title>
      </Card.Body>
      <Card.Footer>
      <Card.Text className="cardtext"> ${amount} </Card.Text>
      <Button onClick={() => props.handleClick(props)} variant="info">Give this Up</Button>
      </Card.Footer>
    </Card>

  )
}

export default Vice
