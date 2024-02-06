import React from 'react';
import CartLayout from './CartLayout';
import { Container, Row, Col } from 'react-bootstrap';

function Cart({ items, removeFromCart }) {
  return (
    <>
      <h1>In Cart</h1>
      <Row>
        {items.map((item) => (
          <Col key={item.id} lg={3} md={4} sm={6}>
            <CartLayout item={item} removeFromCart={removeFromCart} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Cart;
