import { useState } from "react";
import Info from "./Info";

const ParentInfo = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          // visible을 true/false를 전환
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
};

export default ParentInfo;
