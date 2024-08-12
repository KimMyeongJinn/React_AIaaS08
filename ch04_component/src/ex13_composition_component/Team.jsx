import Student from "./Student";

// [컴포넌트 합성]
// Bottom-Up
// 기본 컴포넌트 먼저 생성 -> 상위 컴포넌트 조립

function Team(props) {
  return (
    <>
      <h1>프로젝트 주제는 {props.title}입니다.</h1>
      <Student name="Mike" work="팀장" />
      <Student name="Steve" work="BackEnd" />
      <Student name="John" work="React" />
      <Student name="홍길동" work="DB설계" />
      <Student name="임꺽정" work="클라우드설계" />
      <Student name="차돌바위" work="CI/CD" />
    </>
  );
}

export default Team;
