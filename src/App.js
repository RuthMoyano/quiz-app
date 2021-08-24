import React, { useState, useEffect } from 'react';

import { Questionaire } from './components';

const API_URL = 
"https://opentdb.com/api.php?amount=15&category=10&difficulty=easy&type=multiple";

function App () {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = 
  useState(0);
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
        setCurrentQuestions(data.results[0])
      });
  }, []);

  const handleAnswer = (answer) => {
  //check for answer 
  const newIndex = currentIndex + 1
  setCurrentIndex(newIndex);

  if (answer === questions[currentIndex].currentIndex) {
    setScore(score + 1);
  }

  if(newIndex>= questions.length) {
    setGameEnded(true);
  }
  };

  return gameEnded ? (
    <h1 className='text-3xl text-white font-bold'>Your final score: {score}</h1>
  ) : questions.length > 0 ? (
    <div className="container">
      {currentQuestion && (
      <Questionaire data=
      {questions[currentIndex]} handleAnswer={handleAnswer} />
      )}
    </div>
  ) : (
    <h2 className="text-2xl text-white font-bold">Loading...</h2>
  );
}


export default App;