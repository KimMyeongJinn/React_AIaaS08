import Sub2 from "./Sub2";
import { themeContext1 } from "./themeContext";
import { useContext } from "react";

const Sub1 = () => {
  // 이것을 꺼낼 때는 처음에 정해준  {border: "10px solid gold"}가 꺼내어진다.
  const theme1 = useContext(themeContext1);

  return (
    // 이 계층 이하에서 themeContext1에서 객체를 꺼낼 때는 아래 값이 적용된다.
    <themeContext1.Provider value={{ border: "5px dotted skyblue" }}>
      <div style={theme1}>
        <h1>Sub1</h1>
        <Sub2 />
      </div>
    </themeContext1.Provider>
  );
};

export default Sub1;
