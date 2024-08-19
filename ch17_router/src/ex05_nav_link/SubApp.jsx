import Contact from "./Contact";
import Home from "./Home";
import Topics from "./Topics";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import "./SubApp.css";

const SubApp = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Hello React Router DOM</h1>

        {/* <NavLink/> = <Link/>기능 + class='active' 추가 */}

        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/topics">Topics</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
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
