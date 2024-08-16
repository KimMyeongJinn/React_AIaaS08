import { useState } from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BolingVerdict";

const Calculator = (props) => {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c"); // 섭씨인지 화씨인지 판단

  const toCelsius = (fah) => ((fah - 32) * 5) / 9; // 화씨 -> 섭씨로 변환
  const toFahrenheit = (cel) => (cel * 9) / 5 + 32; // 섭씨 -> 화씨로 변환

  //                 (온도, 변환함수)
  const tryConvert = (temp, convert) => {
    const input = parseFloat(temp);
    if (Number.isNaN(input)) return ""; // 숫자가 입력인지 판단
    const output = convert(input); // 변환
    const rounded = Math.round(output * 1000) / 1000; // 반올림
    return rounded.toString(); // 문자열 변환
  };

  const handleCelsiusChange = (temp) => {
    setTemperature(temp);
    setScale("c"); // 섭씨가 입력되었다.
  };
  const handleFahrenheitChange = (temp) => {
    setTemperature(temp);
    setScale("f"); // 화씨가 입력되었다.
  };

  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheight =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheight}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
};

export default Calculator;
