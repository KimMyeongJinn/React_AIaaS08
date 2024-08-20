// import { createStore } from "redux";
import { legacy_createStore as createStore } from "redux";

const reducer = (currentState, action) => {
  // createStore(reducer함수, 초기상태값)를 사용하지 않고
  // 이곳에서 초기화 설정
  if (currentState === undefined) return { number: 1 };

  const newState = { ...currentState };
  if (action.type === "PLUS") newState.number++;
  return newState;
};

const numberStore = createStore(reducer);

export default numberStore;
