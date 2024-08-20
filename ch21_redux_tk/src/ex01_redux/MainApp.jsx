import { legacy_createStore as createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

const reducer = (state, action) => {
  if (action.type === "up")
    return { ...state, value: state.value + action.step };
  return state;
};

// 명시적으로 state값을 초기화 해줌
const initialState = { value: 0 };
const store = createStore(reducer, initialState);

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.value);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch({ type: "up", step: 2 })}>+</button>
    </div>
  );
};
const MainApp = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
};

export default MainApp;
