import Timer from "./Timer";
import NextButton from "./NextButton";
function Footer({ answer, index, NumQuestion, dispatch, secondsRemaining }) {
  return (
    <footer>
      {answer !== null && (
        <NextButton
          index={index}
          NumQuestion={NumQuestion}
          dispatch={dispatch}
        />
      )}
      {answer !== null && (
        <Timer secondsRemaining={secondsRemaining} dispatch={dispatch} />
      )}
    </footer>
  );
}

export default Footer;
