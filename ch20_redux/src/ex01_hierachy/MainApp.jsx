import { useState } from "react";
import "./style.css";

const MainApp = () => {
  const [number, setNumber] = useState(1);
  return (
    <div id="container">
      <h1>Root : {number}</h1>
      <Left1 number={number} />
    </div>
  );
};
const Left1 = ({ number }) => {
  return (
    <div>
      <h1>Left1 : {number}</h1>
      <Left2 number={number} />
    </div>
  );
};
const Left2 = ({ number }) => {
  return (
    <div>
      <h1>Left2 : {number}</h1>
      <Left3 number={number} />
    </div>
  );
};
const Left3 = ({ number }) => {
  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
};

export default MainApp;
