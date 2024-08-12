import { useState } from "react";

/*
값을 보관하기 위해서 => 변수 사용

(함수 내의) 지역 변수 : 1) 함수 내에 있으므로 코드 이동시 함수만 신경쓰면 된다.
                       2) 문제점 : 변화된 값을 React엔진이 감지못해서 rendering이
                                   일어나지 않는다.


(함수 밖의) 전역 변수 : 1) 문제점 : 함수 밖에 있으므로, 컴포넌트 설계가 무너진다.
                         만약 여러 개 컴포넌트가 동시 참조하면, 참조하는 모든 컴포넌트는
                         독립성을 잃어버리게 된다.
                       2) 문제점 : 변화된 값을 React엔진이 감지못해서 rendering이
                                  일어나지 않는다.

결국 기존의  지역/전역 변수로는 React엔진의 rerendering이 불가능하다.
그래서 탄생한 것이 state 이다.
1) 컴포넌트 내에 존재한다.
2) state가 변할 때  React 엔진이 감지하여(Hook), 컴포넌트를 reRendering한다.
3) state변수는 state함수를 통해서만 Hook가 처리된다.
*/

function Counter() {
  // state변수, state함수, 0은 number의 초기값
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        ++
      </button>
    </div>
  );
}

export default Counter;
