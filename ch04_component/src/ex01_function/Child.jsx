import "./Child.css";

/*
[리액트 컴포넌트]
1. 함수 컴포넌트
   현재 많이 쓰는 방식
   Hook의 새로운 문법들이 등장하면서
   클래스만 할 수 있던 것들을 함수컴포넌트로도 할 수 있게 되었다.
   아무래도 리액트 개발자 == js 개발자 ==  함수 선호
   최근 트렌드 '함수형 프로그래밍' 방식

2. 클래스 컴포넌트
   이전에 많이 쓰던 방식
   지금은 잘 안쓴다.
   단, 이미 만들어진 클래스 컴포넌트는 많이 있다.
*/

// 함수 컴포넌트
function Child() {
  const name = "리액트";
  return <div className="react">{name}</div>;
}

export default Child;
