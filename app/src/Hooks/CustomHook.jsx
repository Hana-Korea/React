// Hook 규칙
// #1. Hook은 무조건 최상위 레벨에서만 호출해야 한다.
// #2. Hook은 컴포넌트가 렌더링될 때마다 매번 같은 순서로 호출되어야 한다.
// #3. 리액트 함수 자바스크립트에서만 호출해야 한다.

//커스텀 훅
import React from "react";
import { useInput } from "./useInput";

function displayMsg(message) {
  alert(message);
}

function CustomHook() {
  const [inputValue, handleChange, handleSubmit] = useInput("안녕", displayMsg);

  return (
    <div>
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default CustomHook;
