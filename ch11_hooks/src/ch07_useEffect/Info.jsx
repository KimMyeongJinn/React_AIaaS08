import { useState, useEffect } from "react";

/* 클래스 컴포넌트 : Life Cycle 메서드
   함수 컴포넌트 : useEffect를 사용해서 Life Cycle 시점 호출

   useEffect(() => {}) : render Update마다 등록된 함수가 계속 호출된다.
   useEffect(() => {}, []) : Mount시 최초 1번만 호출
   useEffect(() => {}, [name]) : name이 변경될 때 마다 호출된다.
   useEffect(() => {}, [name, nickname]) : name이나 nickname이 변경될 때 마다 호출된다.
 */

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log(`${name}, ${nickname} 둘 중에 어느 것이 변해도 호출`);
  }, [name, nickname]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  console.log("render()");

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
