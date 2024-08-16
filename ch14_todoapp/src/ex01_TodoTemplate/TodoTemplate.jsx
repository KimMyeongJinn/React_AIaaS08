const TodoTemplate = ({ children }) => {
  return (
    <div>
      <div>일정 관리</div>
      <div>{children}</div>
    </div>
  );
};

export default TodoTemplate;
