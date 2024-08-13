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
            /*
            e.target.id는 string 형인데
            <SubApp>에서 비교하려면 Number타입과 비교해야 한다.
            그래서 매개변수를 전달할 때 string -> Number로 변환해서 전달한다.
            */
            props.onChangeMode(Number(e.target.id));
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
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);

  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ];

  let content = null;

  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Web"></Article>;
  } else if (mode === "READ") {
    console.log(id, typeof id);

    /*
    const temp = topics.filter((topic) => id === topic.id);
    const { title, body } = temp[0];
    */

    /*
    const { title, body } = topics.filter((topic) => id === topic.id)[0];
    */

    let title = null;
    let body = null;
    for (let i = 0; i < topics.length; i++) {
      console.log(topics[i].id, typeof topics[i].id);

      // id와 topics[i].id의 타입이 일치하지 않으므로, 조건을 제대로 검출하지 못했다.
      if (id === topics[i].id) {
        title = topics[i].title;
        body = topics[i].body;
        break;
      }
    }

    content = <Article title={title} body={body}></Article>;
  }

  return (
    <div>
      <Header
        title="WEB"
        onChangeMode={() => {
          setMode("WELCOME");
        }}
      />
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          setMode("READ");
          setId(id);
        }}
      />
      {content}
    </div>
  );
}

export default SubApp;
