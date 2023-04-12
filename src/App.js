import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap/";
import backImage from "./img/bg.png";
import { useState } from "react";
import shoesData from "./component/data";
import Product from "./component/card";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import DetailView from "./routes/detailView";
import Event from "./component/event";
import axios from "axios";
function App() {
  let [shoes, setShoes] = useState(shoesData);

  let navigate = useNavigate();
  let [ClickedMore, setClickMore] = useState(2);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">ShoseShop</Navbar.Brand>
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
                  {shoes.map((shoes, id) => {
                    return <Product shoes={shoes} id={id} />;
                  })}
                </div>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    alert("Loading data");
                    if (ClickedMore < 4) {
                      axios
                        .get(
                          "https://codingapple1.github.io/shop/data" +
                            ClickedMore +
                            ".json"
                        )
                        .then((result) => {
                          let copyShoes = [...shoes, ...result.data];
                          setShoes(copyShoes);
                          setClickMore(ClickedMore + 1);
                        })
                        .catch(() => {
                          alert("fail data download");
                        });
                    } else alert("No more data in server");
                    //  post, get 요청 방식
                    // Promise.all([axios.get("/url"), axios.get("/url2")]).then(
                    //   () => {}
                    // );
                    // axios.post("/set", { name: "ham" });
                  }}
                >
                  Show More
                </button>
              </div>
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={<DetailView shoes={shoes} />}
        ></Route>
        {/* nested route ; about관련한 접근은 이렇게 about 내부로 빼서 작업하면 좋음  상위 컴포넌트와 하위 컴포넌트 두개가 동시에 보인다*/}
        {/* 하위 컴포넌트가 상위 컴포넌트에 어디 들어갈지를 작성해줘야 한다. */}
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>

        <Route path="*" element={<div>404 Not Found</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
