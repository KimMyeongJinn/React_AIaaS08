import PropTypes from "prop-types";

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <>
      <div>안녕하세요, 제 이름은 {name}입니다.</div>
      <div>children = {children}입니다.</div>
      <div>제가 좋아하는 숫자는 {favoriteNumber}입니다.</div>
    </>
  );
};

// favoriteNumber은 number타입이고,
// 값을 생략하지 맑고 꼭 입력해줘~
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
