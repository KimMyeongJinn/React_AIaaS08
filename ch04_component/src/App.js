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
// import Team from "./ex13_composition_component/Team";
import Comment from "./ex18_extraction_component/Comment";

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
  /*
   return <Team title="재능 기부 교류 서비스" />;
   */

  const author = {
    avatarUrl:
      "data:image/jpeg;base64,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",
    name: "강아지",
  };
  const text = "Thank You~";
  const date = "2024-08-12";

  return <Comment author={author} text={text} date={date} />;
}

export default App;
