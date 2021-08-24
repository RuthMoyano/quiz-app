import React, { useState, useEffect } from 'react';

import { Questionaire } from './components';

const API_URL = 
"https://opentdb.com/api.php?amount=15&category=10&difficulty=easy&type=multiple";

function App () {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = 
  useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

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
  if (!showAnswers) {
    //prevent double answers

  if (answer === questions[currentIndex].currentIndex) {
    setScore(score + 1);
  }
}

setShowAnswers(true);

  return questions.length ? (
    <div className="container">
      {currentQuestion >= questions.length ? (
        <h1 className='text-3xl text-white font-bold'>
          Your final score: {score}
          </h1>
      ) : (
      <Questionaire 
      data={questions[currentIndex]} 
      handleAnswer={handleAnswer} 
      />
      )}
    </div>
  ) : (
    <h2 className="text-2xl text-white font-bold">Loading...</h2>
  );
}


export default App;