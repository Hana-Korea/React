import { useState } from "react";
import "./App.css";
import MainPage from "./Components/mainPage";

import DetailPage from "./Components/detailPage";
import Event from "./Components/event";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  let [food, setFood] = useState(["우동", "김밥", "돈까스"]);
  const [좋아요, 좋아요변경] = useState([0, 0]);
  const [title, setTitle] = useState(0);

  let navigate = useNavigate();
  let [data, setData] = useState();
  return (
    <div className="App">
      <Nav>
        <Nav.Link
          className="links"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Nav.Link>
        <Nav.Link
          className="links"
          onClick={() => {
            navigate("/detail");
          }}
        >
          상세페이지
        </Nav.Link>
      </Nav>
      {food.map((a, i) => {
        return (
          <div>
            <h4
              onClick={() => {
                setTitle(i);
              }}
            >
              {a}
            </h4>
          </div>
        );
      })}
      {<FoodModal color="yellow" setFood={setFood} food={food} title={title} />}
      <button
        onClick={() => {
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((res) => {
              let copy = { ...food, ...res.data };
              console.log(copy);
            })
            .catch(() => {
              console.log("실패해쪄");
            });
        }}
      >
        버튼일세
      </button>
      {좋아요.map((a, i) => {
        return (
          <h4
            onClick={() => {
              console.log();
              let copy8 = [...좋아요];
              copy8[i] = 좋아요[i] + 1;
              좋아요변경(copy8);
            }}
          >
            {좋아요[i]}
          </h4>
        );
      })}
      {data == true ? <Data /> : null}
    </div>
  );
}

function FoodModal(props) {
  return (
    <div>
      <h4>{props.food[props.title]}</h4>
    </div>
  );
}
function Data() {
  return (
    <div>
      <h4>title</h4>
      <p>content</p>
      <h5>price</h5>
    </div>
  );
}
export default App;
