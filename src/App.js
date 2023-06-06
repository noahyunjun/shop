import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap/";
import backImage from "./img/bg.png";
import { useEffect, useState } from "react";
import shoesData from "./component/data";
import Product from "./component/card";
import LateProducts from "./component/lateProducts";
import { Routes, Route, useNavigate } from "react-router-dom";
import DetailView from "./routes/DetailView";
import Event from "./component/event";
import axios from "axios";
import Cart from "./routes/Cart";
import { useQuery } from "@tanstack/react-query";
function App() {
  // redux-persist 라는 Lib쓰면 모든 state를 localStorage에 자동 저장하게 할수 있다.
  useEffect(() => {
    if (localStorage.getItem("watched") === null) {
      localStorage.setItem("watched", JSON.stringify([]));
    }
  }, []);
  let shoes2 = JSON.parse(localStorage.getItem("watched"));

  let [shoes, setShoes] = useState(shoesData);
  let [lateShoes] = useState(shoes2);

  let navigate = useNavigate();
  let [ClickedMore, setClickMore] = useState(2);

  let userName = useQuery(["userName"], () => {
    axios.get("https://codingapple1.github.io/userdata.json").then((a) => {
      return a.data;
    });
  });

  // userName.data -> ajax 요청이 완료 된 뒤 data 값
  // userName.isLoading -> 요청 중일시에 true 값
  // userName.error -> error 발생시 true 값
  // useQuery 사용.
  // 장점1. 성공/실패/로딩중 쉽게 파악 가능

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
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
          <Nav className="mx-auto">
            {userName.isLoading && "loading"}
            {userName.error && "error"}
            {userName.data && userName.name}
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
                  <div>
                    최근에 본 항목
                    {lateShoes.map((id) => {
                      return <LateProducts id={id} />;
                    })}
                  </div>
                  <div>
                    {shoes.map((shoes, id) => {
                      return <Product shoes={shoes} id={id} />;
                    })}
                  </div>
                </div>
                <button
                  className="btn btn-success"
                  onClick={() => {
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

        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>404 Not Found</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
