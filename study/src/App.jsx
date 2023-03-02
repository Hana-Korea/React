import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount((a) => a + 1);
  };
  const onDecrease = () => {
    setCount((b) => b - 1);
  };
  // state변경함수는 딱 한개만 쓸 수 있을 거라고 생각했는데,
  // 다른 함수안에다 집어넣어서 여러 형태로도 만들 수가 있구나
  return (
    <div className="App">
      <h2>리액트를 공부하는 곳입니다</h2>
      <button onClick={onIncrease}>+카운트</button>
      {count}

      <button onClick={onDecrease}>-카운트</button>
    </div>
  );
}

export default App;
