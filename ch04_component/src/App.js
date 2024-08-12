import logo from "./logo.svg";
import "./App.css";
// import MyComponent from "./ex05_props/MyComponent";
// import MyComponent from "./ex03_props/MyComponent";
// import MyComponent from "./ex06_props/MyComponent";
// import MyComponent from "./ex07_props/MyComponent";
// import MyComponent from "./ex08_destructing/MyComponent";
// import MyComponent from "./ex09_prop_types/MyComponent";
// import MyComponent from "./ex10_prop_required/MyComponent";
// import MyComponent from "./ex11_prop_class/MyComponent";
// import MyComponent from "./ex12_prop_class/MyComponent";
// import Library from "./ex04_props/Library";
// import Child from "./ex01_function/Child";
// import Child from "./ex02_class/Child";
import Team from "./ex13_composition_component/Team";

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

  /*
  return (
    <>
      <MyComponent name="리액트">React Programming</MyComponent>
      <MyComponent name="React, Vue">Component 제작</MyComponent>
    </>
  );
  */
  /*
  return (
    <>
      <MyComponent name={10}>React Programming</MyComponent>
      <MyComponent name="React, Vue">Component 제작</MyComponent>
    </>
  );
*/
  /*
  return (
    <>
      <MyComponent favoriteNumber={10} />
      <MyComponent name="리액트">React Programming</MyComponent>
      <MyComponent name="React, Vue" favoriteNumber={3}>
        Component 제작
      </MyComponent>
    </>
  );
  */

  /*
  return (
    <>
      <MyComponent name="js" favoriteNumber={10}>
        javascript
      </MyComponent>
      <MyComponent name="리액트" favoriteNumber={7}>
        React Programming
      </MyComponent>
      <MyComponent name="React, Vue" favoriteNumber={3}>
        Component 제작
      </MyComponent>
    </>
  );
  */

  return <Team title="재능 기부 교류 서비스" />;
}

export default App;
