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
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ];

  return (
    <div>
      {/* 
      Header컴포넌트에 onChangeMode라는 이름의 props요소로 함수(객체)가 전달
      이 함수는 내부 이벤트시 호출된다.
      함수를 바깥에서 전달하는 이유는 로직을 고정하지 않고,
      상황에 따라 컴포넌트를 사용하는 개발자가 유연한 로직을 작성하도록 하기 위함이다.
      이렇게 외부에서 전달하는 함수를 '콜백함수(Callback Function)'이라고 한다.
       */}
      <Header
        title="WEB"
        onChangeMode={() => {
          alert("Header");
        }}
      />
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          alert(id);
        }}
      />
      <Article title="Welcome" body="Hello, Web" />
    </div>
  );
}

export default SubApp;
