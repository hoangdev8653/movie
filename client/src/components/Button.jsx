// eslint-disable-next-line
function Button({ children, onClick, className }) {
  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  );
}

export default Button;
