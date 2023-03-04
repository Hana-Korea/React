import React, { useRef, useState } from "react";
// import { useState } from "react";

//useRef
// 1. document.getElementById => react에서도 비슷하게 쓰기 위함
// 2. 렌터링에 상관없이 변수로서 값을 저장하고 싶을 때
function Login() {
  const userId = useRef();
  //userId.current
  // const [userInput, setUserInput] = useState({ id: "", pw: "" });
  const onChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  // const [userId, setUserId] = useState();
  // const [userPassword, setUserPassword] = useState();
  // const onUserIdChange = (e) => {
  //   setUserId(e.target.value);
  // };
  // const onUserPasswordChange = (e) => {
  //   setUserPassword(e.target.value);
  // };
  // const onKeyDown = (e) => {
  //   if (e.key === "Enter") {
  //     login();
  //   }
  // };
  const login = () => {
    alert(userId.current.value);
  };
  return (
    <div>
      <input placeholder="아이디" name="id" ref={userId} />
      <input
        type="password"
        placeholder="비밀번호"
        // onKeyDown={onKeyDown}
        name="password"
      />
      <button onClick={login}>로그인</button>
    </div>
  );
}

export default Login;
