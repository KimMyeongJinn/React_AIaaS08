import { useState } from "react";
import Article from "./Article";
import Header from "./Header";
import Nav from "./Nav";
import Create from "./Create";
import Update from "./Update";

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
      <>
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
        <li>
          <input
            type="button"
            value="Delete"
            onClick={() => {
              const newTopics = topics.filter((topic) => id !== topic.id);
              setTopics(newTopics);
              setMode("WELCOME");
            }}
          />
        </li>
      </>
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
    const { title, body } = topics.filter((topic) => id === topic.id)[0];

    content = (
      <Update
        title={title}
        body={body}
        onUpdate={(_title, _body) => {
          //alert(_title + ":" + _body);
          const updatedTopic = { id: id, title: _title, body: _body };
          const newTopics = [...topics];
          for (let i = 0; i < newTopics.length; i++) {
            // 수정할 위치의 값을 찾아서, 수정된 값으로 덮어쓰기
            if (newTopics[i].id === id) {
              newTopics[i] = updatedTopic;
              break;
            }
          }
          setTopics(newTopics);

          setMode("READ");
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
