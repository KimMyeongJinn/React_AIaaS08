function Avatar(props) {
  const { avatarUrl, name } = props.author;
  return <img className="avatar" src={avatarUrl} alt={name} />;
}

function UserInfo(props) {
  const { author } = props;
  return (
    <div className="user-info">
      <Avatar author={author} />
      <div className="user-info-name">{author.name}</div>
    </div>
  );
}

function CommentText(props) {
  const { text } = props;
  return <div className="comment-text">{text}</div>;
}

function CommentDate(props) {
  const { date } = props;

  function formatDate(date) {
    <div>날짜: {date}</div>;
  }

  return <div className="comment-date">{formatDate(date)}</div>;
}

function Comment(props) {
  const { author, text, date } = props;

  return (
    <div className="comment">
      <UserInfo author={author} />
      <CommentText text={text} />
      <CommentDate date={date} />
    </div>
  );
}

export default Comment;

// export { Comment, Avatar, UserInfo, CommentText, CommentDate };
