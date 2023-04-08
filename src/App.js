import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Nav, Navbar } from "react-bootstrap/";
import backImage from "./img/bg.png";
import { useState } from "react";
import shoesData from "./data";
import Product from "./card";

function App() {
  let [shoes, setShoes] = useState(shoesData);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CakeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Main</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + backImage + ")" }}
      ></div>
      <div className="container">
        <div className="row">
          {console.log(typeof shoes)}
          {shoes.map((shoes, index) => {
            return <Product shoes={shoes} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
