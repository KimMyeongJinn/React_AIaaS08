import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./ex03_props/MyComponent";
// import Child from "./ex01_function/Child";
// import Child from "./ex02_class/Child";

function App() {
  // return <Child />;

  return (
    <>
      <MyComponent />
      <MyComponent name="리액트" />
      <MyComponent name="React" />
    </>
  );
}

export default App;
