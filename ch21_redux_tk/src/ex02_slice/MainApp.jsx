import { Provider, useDispatch, useSelector } from "react-redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

// store에 포함될 slice 생성
const counterSlice = createSlice({
  name: "counterSlice",
  initialState: { value: 0, mValue: 0 },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.step;
    },
    down: (state, action) => {
      state.mValue = state.mValue - action.step;
    },
  },
});

// slice들을 저장할 store를 생성한다.
const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const mCount = useSelector((state) => state.counter.mValue);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch({ type: "counterSlice/up", step: 2 })}>
        +
      </button>
      <hr />
      <div>{mCount}</div>
      <button onClick={() => dispatch({ type: "counterSlice/down", step: 2 })}>
        +
      </button>
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
