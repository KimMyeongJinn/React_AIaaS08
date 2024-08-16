import logo from "./logo.svg";
import "./App.css";
// import TodoTemplate from "./ex01_TodoTemplate/TodoTemplate";
// import TodoTemplate from "./ex02_TodoTemplate/TodoTemplate";
/*
import TodoTemplate from "./ex03_TodoInsert/TodoTemplate";
import TodoInsert from "./ex03_TodoInsert/TodoInsert";
*/
/*
import TodoTemplate from "./ex04_TodoList/TodoTemplate";
import TodoInsert from "./ex04_TodoList/TodoInsert";
import TodoList from "./ex04_TodoList/TodoList";
*/
/*
import TodoTemplate from "./ex05_TodoList/TodoTemplate";
import TodoInsert from "./ex05_TodoList/TodoInsert";
import TodoList from "./ex05_TodoList/TodoList";
import { useState } from "react";
*/
import TodoTemplate from "./ex06_TodoInsert/TodoTemplate";
import TodoInsert from "./ex06_TodoInsert/TodoInsert";
import TodoList from "./ex06_TodoInsert/TodoList";
import { useState, useRef, useCallback } from "react";

function App() {
  /*
  return (
    <TodoTemplate>
      <div>TodoInsert</div>
      <div>TodoList</div>
    </TodoTemplate>
  );
  */
  /*
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
  */

  /*
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트의 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링 해보기",
      checked: true,
    },
    {
      id: 3,
      text: "일정 관리 앱 만들어 보기",
      checked: false,
    },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
  */

  //ex07_onInsert
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트의 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링 해보기",
      checked: true,
    },
    {
      id: 3,
      text: "일정 관리 앱 만들어 보기",
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  // const onInsert = (text) => {
  //   const todo = {
  //     id: nextId.current,
  //     text,
  //     checked: false,
  //   };
  //   setTodos(todos.concat(todo));
  //   nextId.current += 1;
  // }

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
