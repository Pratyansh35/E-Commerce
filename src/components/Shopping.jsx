import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ShoppingItem = ({ item, addToCart }) => {
  const { id, title, price, description, image, inCart } = item;

  const handleAddToCart = () => {
    addToCart(id);
  };

  return (
    <Card style={{ width: '12rem', margin: '10px' }}>
      <Card.Img variant="top" src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Description: {description}</Card.Text>
        <Card.Text>Price: ₹{price}</Card.Text>
        <Button variant="primary" onClick={handleAddToCart} disabled={inCart}>
          {inCart ? 'Go to Cart' : 'Add to Cart'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ShoppingItem;
