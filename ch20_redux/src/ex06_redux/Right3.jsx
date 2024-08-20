import { useDispatch } from "react-redux";

const Right3 = () => {
  // 공유된 redux store로 이벤트 전달
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Right3</h1>
      <input
        type="button"
        value="+"
        onClick={() => dispatch({ type: "PLUS" })}
      />
    </div>
  );
};

export default Right3;
