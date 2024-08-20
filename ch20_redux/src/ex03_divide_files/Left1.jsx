import Left2 from "./Left2";

const Left1 = ({ number }) => {
  return (
    <div>
      <h1>Left1 : {number}</h1>
      <Left2 number={number} />
    </div>
  );
};

export default Left1;
