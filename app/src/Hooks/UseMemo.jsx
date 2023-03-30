//useMemo: memoized value를 리턴
//memoizaiton: 최적화를 위해 사용하는 개념; 연산량이 많은 함수의 결과값을 기억해두었다가 같은 입력값으로 함수를 호출하면 저장해둔 그 결과값을 리턴하는 것
// 장점: 불필요한 연산 없애고, 시간도 단축될 수 있다는 장점
// 특징: 렌더링이 일어나는 동안 작동한다. 그러므로 useEffect에서 사용해야 할 side effect, 서버에서 받아오는 데이터 같은 내용은 적지 않기
// 주의: 분별하게 남용하지 말것. 메모리를 소비해서 따로 값을 저장하는 것이므로 불필요한 값들까지 저장하면 성능악화될 수 있음.
import React from "react";
import { useState, useMemo, useEffect } from "react";
function UseMemo() {
  const [date, setDate] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // const location = { country: isKorea ? "한국" : "외국" };
  // useEffect(() => {
  //   console.log("재렌더링!");
  // }, [location]);
  // location 말고 date만 변경되어도 콘솔에 글자가 출력됨.
  // Why? 참조타입의 비교는 메모리 주소를 비교한다. 재렌더링하면 location 객체는 초기화되므로, 새로운 메모리 주소를 할당받음. -> 리액트 관점에서는 변경된 거임.

  // useMemo를 활용해 값을 저장해보자
  const location = useMemo(() => {
    console.log(1);
    return { country: isKorea ? "한국" : "외국" };
  }, [isKorea]);

  return (
    <div>
      <h3> 오늘은 며칠인가요?</h3>
      <input
        type="number"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <h3>어느 나라에 있으세요?</h3>
      <h4>{location.country}</h4>
      <button
        onClick={() => {
          setIsKorea(!isKorea);
        }}
      >
        나라변경
      </button>
    </div>
  );
}

export default UseMemo;
