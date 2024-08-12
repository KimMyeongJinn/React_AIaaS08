import PropTypes from "prop-types";
import { Component } from "react";

//  컴포넌트 밖에 있던 제약조건을
//  클래스 컴포넌트 안으로 넣었다.

class MyComponent extends Component {
  static defaultProps = {
    name: "기본 이름",
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props;

    return (
      <>
        <div>제 이름은 {name}입니다.</div>
        <div>자식값은 {children}입니다.</div>
        <div>좋아하는 숫자는 {favoriteNumber}입니다.</div>
        <hr />
      </>
    );
  }
}

export default MyComponent;
