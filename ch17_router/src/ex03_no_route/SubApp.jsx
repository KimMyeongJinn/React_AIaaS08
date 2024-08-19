import Contact from "./Contact";
import Home from "./Home";
import Topics from "./Topics";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const SubApp = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Hello React Router DOM</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/topics">Topics</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
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
