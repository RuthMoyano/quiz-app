import React from 'react';

const Button = ({ answer }) => (
    <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow mb-4">
    {answer}
    </button>
);

const Questionaire = ({ data: {question, correct_answer, incorrect_answers }}) => (
    <div>
        <div className="bg-white text-purple-800 p-10
    rounded shadow-md">
    <h2 
        className="text-2xl" 
        dangerouslySetInnerHTML={{ __html: question }}>
    </h2>
    </div>
    <div className="grid grid-cols-2 gap-6 mt-6">
        <Button answer={correct_answer} />
        <Button answer={incorrect_answers[0]} />
        <Button answer={incorrect_answers[1]} />
        <Button answer={incorrect_answers[2]} />
    </div>
    </div>
)

export default Questionaire;