import React from 'react';

const API_URL = 'https://opentdb.com/api.php?amount=15&category=10&difficulty=easy'

function App() {
  return ( 
  <div className="container">
    <div class="bg-white text-purple-800 p-10
    rounded-lg shadow-md">
    <h2 className="text-2xl">
      question
    </h2>
    </div>
    <div className="flex flex-wrap mt-4 justify-around">
      <button className="bg-white w-2/5 p-4 text-purple-800 font-semibold rounded shadow mb-4">answer 1</button>
      <button className="bg-white w-2/5 p-4 text-purple-800 font-semibold rounded shadow mb-4">answer 2</button>
      <button className="bg-white w-2/5 p-4 text-purple-800 font-semibold rounded shadow">answer 3</button>
      <button className="bg-white w-2/5 p-4 text-purple-800 font-semibold rounded shadow">answer 4</button>
    </div>
    </div>
  );
}

export default App;