/*
'비구조화 할당(destructing assignment)'
== '구조 분해 문법'
 props내의 name과 children이 각각 전달된다.
 {name, children} = props;
*/

const MyComponent = ({ name, children }) => {
  return (
    <>
      <div>안녕하세요, 제 이름은 {name}입니다.</div>
      <div>children = {children}입니다.</div>
    </>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;
