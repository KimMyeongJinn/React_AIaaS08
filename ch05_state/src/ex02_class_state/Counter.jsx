import { Component } from "react";

class Counter extends Component {
  // 생성자에서 state변수 설정한다.
  constructor(props) {
    super(props);
    // number는 state변수이다.
    this.state = {
      number: 0,
    };
  }

  render() {
    const { number } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            // number값 1 증가
            // React엔진에 state변화 통보
            // Counter컴포넌트 재 렌더링
            this.setState({ number: number + 1 });
          }}
        >
          ++
        </button>
      </div>
    );
  }
}

export default Counter;
