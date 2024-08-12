import Comment from "./Comment";

/* REST api 서버로부터 json데이터로 받아와서 댓글을 동적으로 출력하도록 해야 한다.
  하지만, 아직 서버가 없으므로 
  서버로부터 데이터를 읽어서  json배열 객체로 가지고 있는 것을 출력하는 것을 가정한다.
*/

const comments = [
  {
    name: "Albert",
    comment: "나의 컴포넌트입니다.",
  },
  {
    name: "Alex",
    comment: "Our 컴포넌트입니다.",
  },
  {
    name: "Mike",
    comment: "나의 HotDog입니다.",
  },
  {
    name: "차돌바위",
    comment: "나의 Money입니다.",
  },
  {
    name: "머털도사",
    comment: "모든 것은 마음먹기에 달려있습니다.",
  },
  {
    name: "John",
    comment: "Life is full of ups and downs.",
  },
];

function CommentList(props) {
  return (
    <div>
      {
        /* comments는 배열객체
           map함수는 배열을 1개씩 순서대로 접근한다.
           elem에는 배열을 접근할 때마다 각 배열의 요소 객체를 저장한다.
         */
        /* 결과적으로 comments내의 배열 개수만큼 Commnet 컴포넌트가 생성된다.
         */
        comments.map((elem) => {
          const { name, comment } = elem;
          return <Comment name={name} comment={comment} />;
        })
      }
    </div>
  );
}

export default CommentList;
