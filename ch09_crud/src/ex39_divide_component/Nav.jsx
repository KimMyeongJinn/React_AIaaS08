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

export default Nav;
