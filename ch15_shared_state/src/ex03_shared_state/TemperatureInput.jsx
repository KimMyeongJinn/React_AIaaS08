const TemperatureInput = (props) => {
  console.log(props);
  const { scale, temperature, onTemperatureChange } = props;

  const handleChange = (e) => {
    onTemperatureChange(e.target.value);
  };

  const scaleNames = {
    c: "섭씨",
    f: "화씨",
  };

  return (
    <fieldset>
      <legend>온도를 입력하세요(단위:{scaleNames[scale]}):</legend>
      <input value={temperature} onChange={handleChange} />
    </fieldset>
  );
};

export default TemperatureInput;
