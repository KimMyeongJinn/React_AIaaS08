import { useCallback, useState } from "react";
import { MdAdd, MdAddCircleOutline } from "react-icons/md";
import "./TodoInsert.scss";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  //const onChange = (e) => setValue(e.target.value);
  const onChange = useCallback((e) => setValue(e.target.value), []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");

      e.preventDefault(); // onSubmit은 '브라우저 새로 고침'이 있어서 그것을 막음
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
