const Button = ({ onClick, state }) => {
  return (
    <div className="text-center">
      <button className="btn btn-warning" onClick={onClick}>
        {state ? "Hide Product Bar" : "Show Product Bar"}
      </button>
    </div>
  );
};

export default Button;
