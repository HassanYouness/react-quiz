function Options({ options, dispatch, correctOption, answer, points }) {
  const hasAnswer = answer !== null;

  return (
    <div className="options">
      {options.map((e, index) => (
        <button
          className={`btn btn-option ${answer === index ? "answer" : ""}
             ${
               hasAnswer ? (index === correctOption ? "correct" : "wrong") : ""
             }`}
          key={e}
          disabled={hasAnswer}
          onClick={() =>
            dispatch({
              type: "newAnswer",
              payload: [index, correctOption === index ? points : 0],
            })
          }
        >
          {e}
        </button>
      ))}
    </div>
  );
}

export default Options;
