import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { addItem } from "../store";
import { useDispatch } from "react-redux";

// class Details extends React.Component {
//   componentDidMount() {
//     // mount
//   }
//   componentDidUpdate() {
//     // update
//   }
//   componentWillUnmount() {
//     // unmount
//   }
// }

const DetailView = (props) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      setView(false);
    }, 2000);
    return () => {
      // useEffect가 실행되기 전에 실행되는 코드 부분 입니다.
      clearTimeout(timer);
    };
  }, []);

  let [view, setView] = useState(true);
  let [tab, setTab] = useState(0);
  let [fadeView, setFadeView] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFadeView("end");
    }, 200);
    return () => {
      setFadeView("");
    };
  }, []);

  //localStorage Part
  useEffect(() => {
    let legacyStorage = JSON.parse(localStorage.getItem("watched"));

    const storageData = [...legacyStorage, productId.id];
    const set = new Set(storageData);
    const storeData = [...set];

    localStorage.setItem("watched", JSON.stringify(storeData));
  });

  let { id } = useParams();
  let productId = props.shoes.find((x) => x.id == id);
  let dispatch = useDispatch();

  return (
    <div className={"container start" + fadeView}>
      <div className="row">
        <div className="col-md-6">
          {view ? (
            <div className="alert alert-warning">2초이내 구매시 할인</div>
          ) : (
            ""
          )}
          <img src={productId.src} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{productId.title}</h4>
          <p>{productId.content}</p>
          <p>{productId.price}</p>

          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(addItem({ id: 1, name: "Red kint", count: 1 }));
            }}
          >
            주문하기
          </button>
        </div>
      </div>
      <br />
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              setTab(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              setTab(1);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              setTab(2);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab}></TabContent>
      {/* <div>
        <input
          type="text"
          placeholder="Only Number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
      </div> */}
    </div>
  );
};

const TabContent = (props) => {
  let [fade, setFade] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 10);

    return () => {
      setFade("");
    };
  }, [props.tab]);
  if (props.tab === 0) {
    return <div className={"start " + fade}>0</div>;
  } else if (props.tab === 1) {
    return <div className={"start " + fade}>1</div>;
  } else if (props.tab === 2) {
    return <div className={"start " + fade}>2</div>;
  }
};

export default DetailView;
