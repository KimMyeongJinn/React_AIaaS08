import { useParams } from "react-router-dom";

const Topic = ({ contents }) => {
  // 부모 컴포넌트의 <Route>에서 /:topic_id로 전달한 변수를 꺼낸다
  const params = useParams();
  const topic_id = params.topic_id;

  let selected_topic = {
    title: "Sorry",
    description: "Not Found",
  };

  // contents배열을 하나씩 꺼내서 검사하여 조건과 일치하는 배열요소를 리턴한다.
  selected_topic = contents.find((content) => content.id === Number(topic_id));

  console.log(selected_topic);

  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  );
};

export default Topic;
