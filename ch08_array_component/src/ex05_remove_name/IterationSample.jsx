import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    // id값과 입력값을 기존 names배열에 추가해라
    /*
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    */
    const nextNames = [
      ...names,
      {
        id: nextId,
        text: inputText,
      },
    ];
    setNames(nextNames);
    setNextId(nextId + 1);
    setInputText("");
  };
  const onRemove = (id) => {
    // 조건에 일치하는 것만 추출
    // id에 해당하지 않는 항목은 nextNames에 추가해라.
    // id에 해당하는 항목은 제외시켜라.
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  console.log(nameList);
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
