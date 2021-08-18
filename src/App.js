import React, { useState, useEffect } from 'react';

const API_URL = 'https://opentdb.com/api.php?amount=15&category=10&difficulty=easy'

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then((res) => res.json()) 
    .then((data) => {
      setQuestions(data.results);
      console.log(data);
    });
  }, []);

  return questions.length > 0 ? ( 
  <div className="container">
    <div class="bg-white text-purple-800 p-10
    rounded-lg shadow-md">
    <h2 className="text-2xl">{questions[0].question}
    </h2>
    </div>
    <div className="grid grid-cols-2 gap-6 mt-6">
      <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow mb-4">{questions[0].correct_answer}</button>
      <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow mb-4">{questions[0].incorrect_answer[0]}</button>
      <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow">{questions[0].incorrect_answer[1]}</button>
      <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow">{questions[0].incorrect_answer[2]}</button>
    </div>
    </div>
  ) : (
    <h1>sorry ... loadinggg ...</h1>
  )}


export default App;