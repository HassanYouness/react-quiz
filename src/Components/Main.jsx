import { useEffect, useReducer } from "react";
import StartScreen from "./StartScreen";
import Loader from "./Loader";
import Error from "./Error";
import Question from "./Question";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import getQuestions from "../services/Questionsapi";


const SEC_PER_QUESTION = 30;
const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  totalPoints: 0,
  highScore: 0,
  secondsRemaining: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataRecived": {
      return { ...state, questions: action.payload, status: "ready" };
    }
    case "restart": {
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
        highScore: state.highScore,
      };
    }
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SEC_PER_QUESTION,
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finish" : state.status,
      };
    case "dataFailed":
      return { ...state, status: "error" };
    case "next":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finish",
        highScore:
          state.totalPoints > state.highScore
            ? state.totalPoints
            : state.highScore,
      };
    case "newAnswer":
      return {
        ...state,
        answer: action.payload[0],
        totalPoints: state.totalPoints + Number(action.payload[1]),
      };
    default:
      throw new Error("Known");
  }
}
function Main() {
  const [
    {
      questions,
      status,
      index,
      answer,
      totalPoints,
      highScore,
      secondsRemaining,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const NumQuestion = questions.length;
  const maxPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  useEffect(function () {
    async function question() {
      const data = await getQuestions();
      console.log(data)
      dispatch({ type: "dataRecived", payload: data });
    }

    question();
  }, []);
  return (
    <main className="main">
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && (
        <StartScreen dispatch={dispatch} NumQuestion={NumQuestion} />
      )}
      {status === "active" && (
        <>
          <Progress
            index={index}
            totalPoints={totalPoints}
            NumQuestion={NumQuestion}
            maxPoints={maxPoints}
            answer={answer}
          />

          <Question
            questions={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />

          <Footer
            index={index}
            NumQuestion={NumQuestion}
            dispatch={dispatch}
            answer={answer}
            secondsRemaining={secondsRemaining}
          />
        </>
      )}
      {status === "finish" && (
        <FinishScreen
          points={totalPoints}
          maxPossiblePoints={maxPoints}
          dispatch={dispatch}
          highscore={highScore}
        />
      )}
    </main>
  );
}

export default Main;
