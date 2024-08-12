import PropTypes from "prop-types";
import { Component } from "react";

class MyComponent extends Component {
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

MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
