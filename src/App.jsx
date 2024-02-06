import React from 'react'
import ShoppingItem from './components/Shopping';
import { Container, Row, Col } from 'react-bootstrap';
import daawatrozanasuper399 from './assets/daawatrozanasuper399.jpg'
import fortune110 from './assets/fortune110.jpg';
import nutralwallnut498 from './assets/nutralwallnut498.jpg'

const items = [
  { id: 1, name: 'Item 1', price: 10.99, image: daawatrozanasuper399 },
  { id: 2, name: 'Item 2', price: 19.99, image: fortune110 },
  { id: 3, name: 'Item 3', price: 14.99, image: nutralwallnut498 },
  // Add more items as needed
];
function App() {
  return (
    <Container>
      <h1>Shopping App</h1>
      <Row>
        {items.map((item) => (
          <Col key={item.id} lg={3} md={4} sm={6}>
            <ShoppingItem item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default App
