import Right3 from "./Right3";

const Right2 = ({ onIncrease }) => {
  return (
    <div>
      <h1>Right2</h1>
      <Right3 onIncrease={onIncrease} />
    </div>
  );
};

export default Right2;
