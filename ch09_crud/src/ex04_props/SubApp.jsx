function Header(props) {
  return (
    <header>
      <h1>
        <a href="/">{props.title}</a>
      </h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">css</a>
        </li>
        <li>
          <a href="/read/3">js</a>
        </li>
      </ol>
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
  return (
    <div>
      <Header title="WEB" />
      <Nav />
      <Article title="Welcome" body="Hello, Web" />
    </div>
  );
}

export default SubApp;
