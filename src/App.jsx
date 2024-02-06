import React, { useState } from 'react';
import ShoppingItem from './components/Shopping';
import Cart from './components/Cart';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Make sure to import Routes

import daawatrozanasuper399 from './assets/daawatrozanasuper399.jpg';
import fortune110 from './assets/fortune110.jpg';
import nutralwallnut498 from './assets/nutralwallnut498.jpg';
import tatasalt from './assets/tatasalt18.jpg';

const itemsData = [
  { id: 1, title: 'Daawat Rozana Rice', price: 10.99, description: '1kg Rice with lots of fibers', image: daawatrozanasuper399, inCart: false },
  { id: 2, title: 'Fortune Oil', price: 19.99, description: '1Lt Bottle of Soya bean Oil', image: fortune110, inCart: false },
  { id: 3, title: 'Nutraj Wallnut', price: 14.99, description: '250g Walnut packet with vitamins', image: nutralwallnut498, inCart: false },
  { id: 4, title: 'Tata Salt', price: 5.99, description: '1kg Salt packet with iodine', image: tatasalt, inCart: false },
];

function App() {
  const [items, setItems] = useState(itemsData);

  const addToCart = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === itemId ? { ...item, inCart: true } : item))
    );
  };

  return (
    <Router>
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={Link} to="/">E-Commerce App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home items={items} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart items={items.filter((item) => item.inCart)} />} />
        </Routes>
      </Container>
    </Router>
  );
}

const Home = ({ items, addToCart }) => (
  <>
    <h1>Home Page</h1>
    <Row>
      {items.map((item) => (
        <Col key={item.id} lg={3} md={4} sm={6}>
          <ShoppingItem item={item} addToCart={addToCart} />
        </Col>
      ))}
    </Row>
  </>
);

export default App;
