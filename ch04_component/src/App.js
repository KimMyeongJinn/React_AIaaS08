import logo from "./logo.svg";
import "./App.css";
// import MyComponent from "./ex05_props/MyComponent";
// import MyComponent from "./ex03_props/MyComponent";
// import MyComponent from "./ex06_props/MyComponent";
// import MyComponent from "./ex07_props/MyComponent";
import MyComponent from "./ex08_destructing/MyComponent";
// import Library from "./ex04_props/Library";
// import Child from "./ex01_function/Child";
// import Child from "./ex02_class/Child";

function App() {
  // return <Child />;
  /*
  return (
    <>
      <MyComponent />
      <MyComponent name="리액트" />
      <MyComponent name="React" />
    </>
  );
  */
  /*
  return (
    <>
      <Library title="유학" />
      <hr />
      <Library title="조선 선비들의" />
    </>
  );
  */

  /*
  return (
    <>
      <MyComponent name="java" />
      <MyComponent name="javascript" />
    </>
  );
  */

  /*
  return (
    <>
      <MyComponent />
      <MyComponent name="javascript" />
    </>
  );
  */

  return (
    <>
      <MyComponent name="리액트">React Programming</MyComponent>
      <MyComponent name="React, Vue">Component 제작</MyComponent>
    </>
  );
}

export default App;
