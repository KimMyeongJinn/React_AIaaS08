import { useState } from "react";

/*
1개의 이벤트 메서드로
여러 개의 요소의 이벤트를 처리하는 방식
*/

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  //  비구조할당 문법으로 각각 변수에 객체내의 변수값을 꺼내어 초기화 전달
  const { username, message } = form;

  /*
  {
    username: "aa",
    message: "bbb",
    username: "aaa"  => username의 값은 새로운 값으로 대체
  }
  */
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존값,  spread연산자(객체내의 값들을 모두 나열하라)
      [e.target.name]: e.target.value, // spread된 변수를 덮어쓴다.
    };

    // 새로운 객체를 만들어서 넣어야, React가 리렌더링이 발생한다
    // 객체의 참조값이 변경되었다고 인식한다. => 리렌더링
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ":" + message);
    setForm({
      username: "",
      message: "",
    });
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") onClick();
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
