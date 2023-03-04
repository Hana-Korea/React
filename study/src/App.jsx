import { useState } from "react";
import { useRef } from "react";
import Menu from "./components/Menu";
import Handlers from "./components/Handlers";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [coffee, setCoffee] = useState([
    "아메리카노",
    "녹차라떼",
    "바닐라라떼",
    "홍차",
    "유자차",
  ]);
  const [좋아요, 좋아요변경] = useState([0, 0, 0, 0, 0]);
  const [title, setTitle] = useState([0, 1, 2, 3, 4]);
  const [modal, setModal] = useState(false);
  let [inputContent, inputContentChange] = useState("");

  function good(x) {
    let copy1 = [...좋아요];
    copy1[x] = 좋아요[x] + 1;
    좋아요변경(copy1);
  }

  return (
    <div className="App">
      <h2>리액트를 공부하는 곳입니다</h2>
      <div className="coffeeBox">
        {coffee.map((a, i) => {
          return (
            <>
              <div key={i}>
                <h4
                  onClick={(e) => {
                    good(i);
                    setTitle(i);
                    e.currentTarget.remove();
                  }}
                >
                  {a} <span>{좋아요[i]}</span>
                  <button
                    onClick={(e) => {
                      e.currentTarget.remove();
                    }}
                  >
                    삭제
                  </button>
                </h4>
              </div>
            </>
          );
        })}

        {/* onClick={} 중괄호 안에는 함수명을 적든 함수를 새로 만들든 함수자체를 넣어야 한다 */}
        {/* <button onClick={good}>좋아요버튼</button> */}
      </div>
      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        모달창 생기는 버튼
      </button>
      {modal == true ? (
        <Modal title={title} color={"yellow"} coffee={coffee} />
      ) : null}{" "}
      <input
        onInput={(e) => {
          inputContentChange(e.target.value);
          //지금 발생하는 이벤트에 관련한 여러 기능이 담겨있음. 보통 e라고 많이 작명함.
        }}
      ></input>
      <button
        onClick={() => {
          let copy11 = [...coffee];
          copy11.unshift(inputContent);
          setCoffee(copy11);
        }}
      >
        글게시
      </button>{" "}
    </div>
  );
}

function Modal(props) {
  const [singer, setSinger] = useState(["아이유", "태연", "백예린"]);
  return (
    <>
      <div>{singer[1]}</div>
      <div style={{ background: props.color }}>
        <div>{props.coffee[props.title]}</div>
      </div>
    </>
  );
}

export default App;
