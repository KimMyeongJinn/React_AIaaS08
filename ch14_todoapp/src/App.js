import logo from "./logo.svg";
import "./App.css";
// import TodoTemplate from "./ex01_TodoTemplate/TodoTemplate";
// import TodoTemplate from "./ex02_TodoTemplate/TodoTemplate";
// import TodoTemplate from "./ex03_TodoInsert/TodoTemplate";
// import TodoInsert from "./ex03_TodoInsert/TodoInsert";
import TodoTemplate from "./ex04_TodoList/TodoTemplate";
import TodoInsert from "./ex04_TodoList/TodoInsert";
import TodoList from "./ex04_TodoList/TodoList";

function App() {
  /*
  return (
    <TodoTemplate>
      <div>TodoInsert</div>
      <div>TodoList</div>
    </TodoTemplate>
  );
  */
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
}

export default App;
