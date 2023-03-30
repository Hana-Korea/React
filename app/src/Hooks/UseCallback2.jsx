import React from "react";
import { useCallback, useEffect, useState } from "react";
function UseCallback2() {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);
  const createStyle = useCallback(() => {
    return {
      width: `${size}px`,
      height: `${size}px`,
      background: "red",
    };
  }, [size]);
  useEffect(() => {
    console.log(123);
  }, [size]);
  return (
    <div style={{ background: isDark ? "black" : "white" }}>
      <input
        type="number"
        value={size}
        onChange={(e) => {
          setSize(e.target.value);
        }}
      />
      <Box createStyle={createStyle} />
      <button
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        버튼
      </button>
    </div>
  );
}
function Box({ createStyle }) {
  const [style, setStyle] = useState({});
  useEffect(() => {
    console.log(222);
    setStyle(createStyle());
  }, [createStyle]);
  return (
    <div>
      <div style={style}></div>
    </div>
  );
}
export default UseCallback2;
