import { useEffect } from "react";
import styled from "styled-components";
import style from "../Components/DetailPage.module.css";
let YellowBtn2 = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;
let YellowBtn = styled.button`
  background-color: yellow;
  padding: 10px;
  color: #fff;
`;

function DetailPage() {
  useEffect(() => {
    console.log("안ㄴ여");
  });
  return (
    <div className="container">
      <button className={style.redBtn}>나는 버튼이야</button>
      <YellowBtn>버튼이당!</YellowBtn>
      /* <YellowBtn bg="orange">버튼이당!</YellowBtn> */
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
export default DetailPage;
