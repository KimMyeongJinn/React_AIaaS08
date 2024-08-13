import { useState } from "react";

function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault(); // <a>태그의 기능을 정지

            // props로 전달된 함수를 호출하도록 한다.
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  // props로부터 받은 topics를 가공해서 <li>요소로 만들어서 lis에 저장할 예정임.
  //const lis = props.topics.map((topic) => <li>{topic.title}</li>);

  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={"/read/" + t.id}
          onClick={(e) => {
            e.preventDefault();
            props.onChangeMode(e.target.id);
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }

  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h1>{props.title}</h1>
      {props.body}
    </article>
  );
}

function SubApp() {
  /* <Header>와 <Nav>를 선택할 때 mode변수 값이 각각 바뀌지만
     React 엔진은 해당 사항을 알 수가 없어서
     Re-Rendering이 일어나지 않는다.
     그러므로 content 의 내용의 변경이 일어나지 않고
     return문 내의 html 영역도 변경이 일어나지 않는다.

     => useState를 사용해야 한다.
     1) 값을 변경/저장
     2) 값이 변경되었을 경우 React 엔진에 해당 컴포넌트의 Re-Redering 처리
   */
  //let mode = "WELCOME";
  const [mode, setMode] = useState("WELCOME");

  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ];

  let content = null;

  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Web"></Article>;
  } else if (mode === "READ") {
    content = <Article title="Welcome" body="Hello, Read"></Article>;
  }

  return (
    <div>
      <Header
        title="WEB"
        onChangeMode={() => {
          //mode = "WELCOME";
          setMode("WELCOME");
        }}
      />
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          //mode = "READ";
          setMode("READ");
        }}
      />
      {content}
    </div>
  );
}

export default SubApp;
