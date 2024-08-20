import { createContext } from "react";
/*
리액트의 Context영역(모든 계층의 컴포넌트가 직접 접근 가능한 영역)에
theme1과 theme2를 저장함.

themeContext1과 themeContext2를 이용해서
어느 컴포넌트에서나 theme1과 theme2를 가져올 수 있다.

Context-API를 지나치게 사용하면 컴포넌트 설계의 독립성/모듈화를 방해한다.

하지만 지나치게 깊은 계층구조일 때 전역영역을 바로 접근하는 것은 
꼭 필요한 일이라고 볼 있다.
*/
const theme1 = { border: "10px solid gold" };
const themeContext1 = createContext(theme1);

const theme2 = { border: "10px solid blue" };
const themeContext2 = createContext(theme2);

export { themeContext1, themeContext2 };
