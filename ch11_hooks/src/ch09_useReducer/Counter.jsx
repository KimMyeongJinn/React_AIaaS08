import { useReducer } from "react";

//              (현재상태값, dispatch가 전송한 값)
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 }; // 변화한 새로운 상태값
    case "DECREMENT":
      return { value: state.value - 1 }; // 변화한 새로운 상태값
    default:
      return state;
  }
};

const Counter = () => {
  /*
    state : 변수/객체 저장 변수
    dispatch : 액션(선택값)전달함수
    reducer : 액션수신함수
              액션에 따라 변수/객체값 변화 함수
    {value : 0} : state의 초기값
                  상태를 관리하고 싶은 변수를 추가 가능
  */
  //    [변수, 변화함수] = useReducer(변화수신처리함수, 초기값)
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>++</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>--</button>
    </div>
  );
};

export default Counter;
