import "./style.css";
import Left1 from "./Left1";
import Right1 from "./Right1";
import { Provider } from "react-redux";
import numberStore from "./numberStore";

const MainApp = () => {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        {/* 아래 계층에서 numberStore를 공유한다 */}
        <Provider store={numberStore}>
          <Left1 />
          <Right1 />
        </Provider>
      </div>
    </div>
  );
};

export default MainApp;
