import { useState } from "react";
import BoilingVerdict from "./BolingVerdict";

const Calculator = (props) => {
  const [temperature, setTemperature] = useState("");

  const handleChange = (e) => setTemperature(e.target.value);

  return (
    <fieldset>
      <legend>섭씨 온도를 입력하세요</legend>
      <input value={temperature} onChange={handleChange} />
      <BoilingVerdict celsius={parseFloat(temperature)} />
    </fieldset>
  );
};

export default Calculator;
