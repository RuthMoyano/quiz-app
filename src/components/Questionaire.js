import React from 'react';

const Button = ({ answer }) => (
    <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow mb-4">
    {answer}
    </button>
);

const Questionaire = ({handleAnswer, data: {question, correct_answer, incorrect_answers }}) => {
    const shuffledAnswer = [correct_answer, ...
    incorrect_answers];
    return (
    <div>
        <div className="bg-white text-purple-800 p-10
    rounded shadow-md">
    <h2 
        className="text-2xl" 
        dangerouslySetInnerHTML={{ __html: question }}>
    </h2>
    </div>
    <div className="grid grid-cols-2 gap-6 mt-6">
        <Button onCLick={() => handleAnswer(shuffledAnswer[0])} answer={shuffledAnswer[0]} />
        <Button onCLick={() => handleAnswer(shuffledAnswer[1])} answer={shuffledAnswer[1]} />
        <Button onCLick={() => handleAnswer(shuffledAnswer[2])} answer={shuffledAnswer[2]} />
        <Button onCLick={() => handleAnswer(shuffledAnswer[3])} answer={shuffledAnswer[3]} />
    </div>
    </div>
    )
}


export default Questionaire;