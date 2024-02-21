import logo from "./logo.png";
// import friendsImg from "./friends.jpg";

import questions from "./Questions";
import { useEffect, useState } from "react";

export default function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [curQuestionsIndex, setCurQuestionIndex] = useState(0);
  const [curScore, setCurScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    // Retrieve the high score from local storage or set it to 0 if not found
    const savedHighScore = localStorage.getItem("highScore");
    return savedHighScore ? parseInt(savedHighScore, 10) : 0;
  });
  const [quizEnded, setQuizEnded] = useState(false);

  // Effect hook to update the high score in local storage if the current score exceeds it.
  useEffect(() => {
    // This function runs every time the current score updates
    if (curScore > highScore) {
      setHighScore(curScore); // Update the high score if the current score is higher
      localStorage.setItem("highScore", curScore.toString()); // Save the new high score in local storage
    }
  }, [curScore, highScore]);

  // Function to reset the quiz state and start over.
  function handleRestart() {
    setQuizStarted(true);
    setCurScore(0);
    setCurQuestionIndex(0);
    setQuizEnded(false);
  }

  if (!quizStarted) {
    // Renders the start button if the quiz hasn't started.
    return (
      <div>
        <Logo />
        <button className="start" onClick={() => setQuizStarted(true)}>
          Start
        </button>
      </div>
    );
  }

  if (!quizEnded) {
    // Renders the quiz questions and menu if the quiz is ongoing.
    return (
      <div>
        <Logo />
        <Quiz
          onScore={setCurScore}
          curQuestionsIndex={curQuestionsIndex}
          setCurQuestionIndex={setCurQuestionIndex}
          quizEnded={quizEnded}
          onQuizEnded={setQuizEnded}
        />
        <Menu
          score={curScore}
          highScore={highScore}
          handleRestart={handleRestart}
        />
      </div>
    );
  } else {
    // Renders the end screen once the quiz ends.
    return (
      <EndScreen
        score={curScore}
        highScore={highScore}
        handleRestart={handleRestart}
      />
    );
  }
}

function Logo() {
  return (
    <img
      className="logo"
      src={logo}
      alt="The one with all the questions logo"
    />
  );
}

// function Banner() {
//   return <img className="main-image" src={friendsImg} alt="Friends cast" />;
// }

function Quiz({
  onScore,
  curQuestionsIndex,
  setCurQuestionIndex,
  onQuizEnded,
}) {
  const curQuestion = questions[curQuestionsIndex];
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Handles answer selection and moves to the next question or ends the quiz.
  function handleAnswer(isCorrect, i) {
    setSelectedAnswer(i);
    if (curQuestionsIndex >= questions.length - 1) {
      onQuizEnded(true);
    }

    if (isCorrect) {
      onScore((prevScore) => prevScore + 1);
    }

    setTimeout(() => {
      setCurQuestionIndex(curQuestionsIndex + 1);
      setSelectedAnswer(null);
    }, 1500);
  }

  return (
    <div className="container">
      <span className="question">{curQuestion.question}</span>
      <ul className="answers">
        {curQuestion.answers.map((answer, i) => (
          <li
            onClick={() => handleAnswer(answer.correct, i)}
            key={i}
            className={
              selectedAnswer === i
                ? answer.correct
                  ? "answer-correct"
                  : "answer-wrong"
                : ""
            }
            // Reveal the correct answers
            // className={answer.correct ? "answer-correct" : "answer-wrong"}
          >
            {answer.answer}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Menu({ score, highScore, handleRestart }) {
  // Displays the current score, high score, and a restart button.
  return (
    <div className="menu">
      <span className="points">Score: {score}</span>
      <span className="highScore">High Score: {highScore}</span>
      <button onClick={handleRestart} className="restart">
        Restart
      </button>
      {/* <span>50:50</span> */}
    </div>
  );
}

function EndScreen({ score, highScore, handleRestart }) {
  const scoreMessage = getMessageForScore(score);

  return (
    // Shows a message based on the final score, displays the score and high score, and offers a restart option.

    <div className="end-screen">
      <span>{scoreMessage}</span>
      <span className="points">
        Score: <strong>{score}</strong>
      </span>
      <span className="highScore">
        High Score: <strong>{highScore}</strong>
      </span>
      <button className="start" onClick={handleRestart}>
        Try Again?
      </button>
    </div>
  );
}

function getMessageForScore(score) {
  if (score === 100) {
    return "Could YOU BE any more of a winner?";
  } else if (score > 75) {
    return "Good! But there is room for improvement 😉";
  } else if (score > 50) {
    return "Not good, not bad 😐";
  } else if (score > 25) {
    return "Not the worst, but close";
  } else if (score > 0) {
    return "Have you been watching the wrong show?";
  } else if (score === 0) {
    return "This is all a moo point...";
  }
}

// TODO
// Restart done
// Highscore done
// End screen done
// Update questions
// Fix iphone bottom covered by address done
