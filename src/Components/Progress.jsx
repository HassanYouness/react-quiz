function Progress({ index, totalPoints, NumQuestion, maxPoints, answer }) {
  return (
    <header className="progress">
      <progress
        max={NumQuestion}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index}</strong> /{NumQuestion}
      </p>
      <p>
        {totalPoints}/{maxPoints} points
      </p>
    </header>
  );
}

export default Progress;
