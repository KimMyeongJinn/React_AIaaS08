import logo from "./logo.svg";
import "./App.css";
// import TodoTemplate from "./ex01_TodoTemplate/TodoTemplate";
// import TodoTemplate from "./ex02_TodoTemplate/TodoTemplate";
import TodoTemplate from "./ex03_TodoInsert/TodoTemplate";
import TodoInsert from "./ex03_TodoInsert/TodoInsert";

function App() {
  return (
    <TodoTemplate>
      <TodoInsert />
      <div>TodoList</div>
    </TodoTemplate>
  );
}

export default App;
