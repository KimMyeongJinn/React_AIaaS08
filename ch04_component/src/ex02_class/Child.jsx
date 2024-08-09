import "./Child.css";
import { Component } from "react";

// 클래스 컴포넌트
class Child extends Component {
  // 클래스에서 render()메서드에서  jsx표현식을 사용한다.
  render() {
    const name = "React";
    return <div className="react">{name}</div>;
  }
}

export default Child;
