import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ShoppingItem = ({ item }) => {
  const { id, name, price, image } = item;

  const addToCart = () => {
    // Implement your logic to add item to the cart
    console.log(`Item ${id} added to cart`);
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={image} alt={name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Price: ₹{price}</Card.Text>
        <Button variant="primary" onClick={addToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ShoppingItem;