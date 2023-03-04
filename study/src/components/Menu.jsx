import React, { useState } from "react";

function Menu() {
  const [isClicked, setIsClicked] = useState(false);
  // const [메뉴, 메뉴변경] = useState("메뉴펼치기");
  const toggleMenu = (e) => {
    e.preventDefault();
    console.log(e.target, e.currentTarget);
    // 이벤트객체가 native가 아니라 호환을 위해 합성이벤트를 리턴한다. 리턴하는 객체 자체가 다ㅡㄹ다. 정보는 비슷하게 보이는데...
    // 버튼을 클릭해도 온클릭은 안나옴. 이벤트핸들러가 어딘가 다른 곳에 할당이 되었다는 뜻.  루트에 할당시켜놓고 이벤트 위임방식으로 실행시킨다. 이벤트 버블링을 통해 이벤트가 실행되도록 함.
  };
  const [menuNumber, setMenuNumber] = useState(null);
  const onClick = (e) => {
    setMenuNumber(e.target.id);
  };
  return (
    <div>
      <p>메뉴</p>

      {/* 화살표 함수를 {} 안에서 만들면 렌더링때마다 재정의되기때문에 로직이 복잡하면 위에서 정의한 걸 갖다쓰는 걸 추천 */}
      <div onClick={toggleMenu}>
        디브입니다
        <p onClick={toggleMenu}>p입니다</p>
      </div>

      <div onClick={onClick}>
        {menuNumber}
        <button id="2">메뉴2</button>
        <button id="1">메뉴1</button>
        <button id="3">메뉴3</button>
      </div>
    </div>
  );
}

export default Menu;
