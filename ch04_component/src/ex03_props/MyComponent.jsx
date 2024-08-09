// props는 관습적으로 사용하는 단어
// 부모에서 자식한테 데이터를 전달할 때 사용되는 객체이다.
// props를 통해서 name을 전달
function MyComponent(props) {
  return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
}

export default MyComponent;
