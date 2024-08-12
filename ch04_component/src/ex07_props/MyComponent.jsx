const MyComponent = (props) => {
  return (
    <>
      <div>안녕하세요, 제 이름은 {props.name}입니다.</div>
      <div>포함된 값은 {props.children}입니다.</div>
    </>
  );
};

// 부모 컴포넌트에서  MyComponent에 name값을 전달하지 않으면
// 자동으로 아래의 값을 갖게 된다.
MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;
