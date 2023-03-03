import { useState } from "react";
import { useRef } from "react";
import Menu from "./components/Menu";
import Handlers from "./components/Handlers";
import Login from "./components/Login";
import "./App.css";

function App() {
  let [커피, 커피변경] = useState(["아메리카노", "돌체라떼", "녹차라떼"]);
  let [좋아요1, 좋아요변경1] = useState([0, 0, 0]);
  const [count, setCount] = useState(0);
  const [coffee, setCoffee] = useState([
    "아메리카노",
    "녹차라떼",
    "바닐라라떼",
    "홍차",
    "유자차",
  ]);
  const [좋아요, 좋아요변경] = useState([0, 0, 0, 0, 0]);

  const [modal, setModal] = useState(false);
  function good(x) {
    let copy1 = [...좋아요];
    copy1[x] = 좋아요[x] + 1;
    좋아요변경(copy1);
  }

  return (
    <div className="App">
      <h2>리액트를 공부하는 곳입니다</h2>

      <div className="coffeeBox">
        {커피.map(function (c, i) {
          return (
            <div>
              <h4
                key={i}
                onClick={() => {
                  let copy = [...좋아요1];
                  copy[i] = 좋아요1[i] + 1;
                  좋아요변경1(copy);
                }}
              >
                {c}
              </h4>
              <span>{좋아요1[i]}</span>
            </div>
          );
        })}

        {coffee.map((a, i) => {
          return (
            <>
              <div key={i}>
                <h4
                  onClick={() => {
                    good(i);
                  }}
                >
                  {a}
                </h4>
                <span>{좋아요[i]}</span>
              </div>
            </>
          );
        })}

        {/* onClick={} 중괄호 안에는 함수명을 적든 함수를 새로 만들든 함수자체를 넣어야 한다 */}
        {/* <button onClick={good}>좋아요버튼</button> */}
        <button
          onClick={() => {
            좋아요변경(좋아요 + 1);
          }}
        >
          좋아요버튼
        </button>
        <span>{좋아요}</span>
      </div>

      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        모달창 생기는 버튼
      </button>

      {modal == true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  const [singer, setSinger] = useState(["아이유", "태연", "백예린"]);
  return (
    <div>
      {singer.map((a, i) => {
        return <h4 key={i}>{singer[i]} </h4>;
      })}
    </div>
  );
}

export default App;
