import Options from "./Options";
function Question({ questions, dispatch, answer }) {
  const { question, options, correctOption, points } = questions;
  const option=options.split(",");
  return (
    <div>
      <h3>{question}</h3>
      <Options
        options={option}
        correctOption={correctOption}
        dispatch={dispatch}
        answer={answer}
        points={points}
      />
    </div>
  );
}

export default Question;
