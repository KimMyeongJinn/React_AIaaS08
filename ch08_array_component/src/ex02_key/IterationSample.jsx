/* React는 <li>와 같은 동일한 자식 엘리먼트를 여러 개 포함할 때
이것을 구분하는 정보를 원한다.
그것을 key라고 한다.
만약 이것을 부여하지 않으면 console창에 Warning을 표시한다.
배열내에 id가 있다면 id를 key로 전달하면 되지만
없을 때는 그 대안으로 index를 준다.
 */
const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  console.log(nameList);
  return <ul>{nameList}</ul>;
};

export default IterationSample;
