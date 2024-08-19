import Contact from "./Contact";
import Home from "./Home";
import Topics from "./Topics";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const SubApp = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Hello React Router DOM</h1>

        {/* <a/>태그의 기본 기능은 '서버로 주소 이동 요청' + 화면 Refresh(F5키)이다 
            그래서 화면의 Refresh가 필요없을 때
            js에서 preventDefault()로 Refresh를 종종 막는다.
            js를 사용하지 않고 보다 편리하게 다른 컴포넌트로 이동하되
            Refresh를 막기 위해 <Link/>를 사용할 수 있다.
        */}

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/contact" element={<Contact />} />

          {/* 위의 주소를 제외한 나머지는 다 여기서 처리한다 */}
          <Route path="/*" element={"Not Found"} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default SubApp;
