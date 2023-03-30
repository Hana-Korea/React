// UseMemo 훅과 비슷하지만 값이 아닌 함수를 리턴한다.
//
import React from "react";
import { useState, useCallback, useEffect } from "react";
function UseCallback() {
  const [number, setNumber] = useState(0);
  // const someFunction = () => {
  //   console.log(`someFunc:number:${number}`);
  // };
  // useEffect(() => {
  //   console.log("변경됨");
  // }, [someFunction]);
  //number state가 변해 재렌더링되면서 someFunction 함수가 새로 생성되며 초기화되고, 메모리 주소값 역시 새롭게 할당된다.
  //그래서 의존성배열은 [someFunction]일지라도 number만 변경해도 console에 글자가 출력되는 것이다.

  const someFunction = useCallback(() => {
    console.log(`someFunc:number:${number}`);
  }, [number]);
  useEffect(() => {
    console.log("변경됨");
  }, [someFunction]);
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button onClick={someFunction}>call someFunc</button>
    </div>
  );
}

export default UseCallback;
