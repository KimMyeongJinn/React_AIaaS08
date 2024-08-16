import { useState } from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BolingVerdict";

const Calculator = (props) => {
  // 2개의 <TemperatureInput>이 공유하도록 한다.
  const [temperature, setTemperature] = useState("");
  const handleChange = (value) => setTemperature(value);

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={temperature}
        onTemperatureChange={handleChange}
      />
      <TemperatureInput
        scale="f"
        temperature={temperature}
        onTemperatureChange={handleChange}
      />
      <BoilingVerdict celsius={parseFloat(temperature)} />
    </div>
  );
};

export default Calculator;
