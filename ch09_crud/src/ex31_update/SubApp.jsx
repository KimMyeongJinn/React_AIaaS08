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

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(e) => {
          //alert("submit");
          e.preventDefault(); // 기본동작(page reloading 막음)
          const title = e.target.title.value;
          const body = e.target.body.value;

          props.onCreate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="Create" />
        </p>
      </form>
    </article>
  );
}

function Update(props) {
  return (
    <article>
      <h2>Update</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.title.value;
          const body = e.target.body.value;

          props.onUpdate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="Update" />
        </p>
      </form>
    </article>
  );
}

function SubApp() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);

  // topics값이 변할 때 화면에 변화가 적용되야 하므로 useState로 전환
  const [topics, setTopics] = useState([
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ]);

  let content = null;
  let contextControl = null; // update 화면 태그

  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Web" />;
  } else if (mode === "READ") {
    let title = null;
    let body = null;
    for (let i = 0; i < topics.length; i++) {
      if (id === topics[i].id) {
        title = topics[i].title;
        body = topics[i].body;
        break;
      }
    }

    content = <Article title={title} body={body} />;
    contextControl = (
      <li>
        <a
          href={"/update/" + id}
          onClick={(e) => {
            e.preventDefault();
            setMode("UPDATE");
          }}
        >
          Update
        </a>
      </li>
    );
  } else if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(_title, _body) => {
          const newTopic = { id: nextId, title: _title, body: _body }; // 새 항목 생성
          const newTopics = [...topics]; // topics의 모든 항목을  newTopics에 복제
          newTopics.push(newTopic); // 새 리스트에 새 항목 추가
          setTopics(newTopics); // 새 리스트 저장 => React Hook 이벤트 발생 -> SubApp Re-Rendeing

          // 현재 추가한 항목을 보여주기 위해 모든 READ 전환
          setMode("READ");
          setId(nextId); // 현재 보여줄 항목의 id

          setNextId(nextId + 1);
        }}
      />
    );
  } else if (mode === "UPDATE") {
    //alert("UPDATE 모드 전환");
    content = (
      <Update
        onUpdate={(title, body) => {
          alert(title + ":" + body);
        }}
      />
    );
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
      <ul>
        <li>
          <a
            href="/create"
            onClick={(e) => {
              e.preventDefault();
              setMode("CREATE");
            }}
          >
            Create
          </a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}

export default SubApp;
