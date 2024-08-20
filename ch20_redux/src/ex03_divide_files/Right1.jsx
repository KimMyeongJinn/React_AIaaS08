import Right2 from "./Right2";

const Right1 = ({ onIncrease }) => {
  return (
    <div>
      <h1>Right1</h1>
      <Right2 onIncrease={onIncrease} />
    </div>
  );
};

export default Right1;
