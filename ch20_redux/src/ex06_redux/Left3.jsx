import { useSelector } from "react-redux";

const Left3 = () => {
  // dispatch로 action과 이벤트 전달 -> store 수신
  // -> useSelector에서 state와 이벤트 수신
  const number = useSelector((state) => state.number);

  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
};

export default Left3;
