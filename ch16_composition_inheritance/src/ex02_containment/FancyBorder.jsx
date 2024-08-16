// 이미 만들어진 컴포넌트
const FancyBorder = (props) => {
  return (
    <div style={{ border: `${props.npx}px solid ${props.color}` }}>
      {props.children}
    </div>
  );
};

export default FancyBorder;
