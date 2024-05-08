function NextButton({ index, NumQuestion, dispatch }) {
  return (
    <div>
      <button
        className="btn btn-ui"
        onClick={() =>
          dispatch({
            type: `${index === NumQuestion - 1 ? "finish" : "next"}`,
          })
        }
      >
        {index === NumQuestion - 1 ? "Finish" : "Next"}
      </button>
    </div>
  );
}

export default NextButton;
