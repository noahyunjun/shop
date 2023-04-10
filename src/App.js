import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap/";
import backImage from "./img/bg.png";
import { useState } from "react";
import shoesData from "./component/data";
import Product from "./component/card";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import DetailView from "./routes/detailView";

function App() {
  let [shoes, setShoes] = useState(shoesData);

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CakeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Main
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Details
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="main-bg"
                style={{ backgroundImage: "url(" + backImage + ")" }}
              ></div>
              <div className="container">
                <div className="row">
                  {shoes.map((shoes, index) => {
                    return <Product shoes={shoes} index={index} />;
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail" element={<DetailView />} />
        {/* nested route ; about관련한 접근은 이렇게 about 내부로 빼서 작업하면 좋음  상위 컴포넌트와 하위 컴포넌트 두개가 동시에 보인다*/}
        {/* 하위 컴포넌트가 상위 컴포넌트에 어디 들어갈지를 작성해줘야 한다. */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>member</div>} />
          <Route path="location" element={<div>location</div>} />
        </Route>

        <Route path="*" element={<div>404 Not Found</div>}></Route>
      </Routes>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <h4>information</h4>
      {/* Outlet으로 하위 컴포넌트의 위치를 잡아준다 */}
      <Outlet></Outlet>
    </div>
  );
};

export default App;
