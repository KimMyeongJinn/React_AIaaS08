import { useState } from "react";
import Button from "./ui/Button";
import TextInput from "./ui/TextInput";

const MiniBlogApp = () => {
  const [ival0, setIval0] = useState("");
  const [ival1, setIval1] = useState("");

  return (
    <>
      <Button
        title="Test버튼"
        onClick={(e) => {
          console.log(e);
          alert(e.target.innerText);
        }}
      />
      <TextInput
        height={20}
        value={ival0}
        onChange={(e) => {
          setIval0(e.target.value);
        }}
      />
      <TextInput
        height={80}
        value={ival1}
        onChange={(e) => {
          setIval1(e.target.value);
        }}
      />
    </>
  );
};

export default MiniBlogApp;
