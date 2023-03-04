import React, { useState } from "react";

function Handlers() {
  const [number, setNumber] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const changeHandler = () => {
    setNumber(10);
  };
  const KeyHandler = (e) => {
    if (e.key === "Enter") {
      alert("눌렀씁니다!");
    }
  };
  const MouseOverHandler = () => {
    setIsHovering(true);
  };
  const MouseOutHandler = () => {
    setIsHovering(false);
  };
  return (
    <div>
      <button
        onClick={() => {
          alert("안녕");
        }}
      ></button>
      <input onChange={changeHandler}></input>
      <input onKeyDown={KeyHandler}></input>
      <p>{number}</p>
      <div>
        <p onMouseOver={MouseOverHandler} onMouseOut={MouseOutHandler}>
          마우스를 올려보세요
        </p>
        <p>{isHovering ? "마우스가 들어옴" : "마우스빠잉"}</p>
      </div>
    </div>
  );
}

export default Handlers;
