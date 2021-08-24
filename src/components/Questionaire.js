import React from 'react';

const Questionaire = ({
    showAnswers,
    handleAnswer, 
    handleNextQuestion,
    data: { question, correct_answer, 
    incorrect_answers },
}) => {
    const shuffledAnswers = [correct_answer, ...
    incorrect_answers].sort(
        () => Math.random() - 0.5
        );

    return (
    <div>
        <div className="bg-white text-purple-800 p-10
    rounded shadow-md">
    <h2 
        className="text-2xl" 
        dangerouslySetInnerHTML={{ __html: question }}
    />
    </div>
    <div className="grid grid-cols-2 gap-6 mt-6">
        {shuffledAnswers.map((answer) => {
            const bgColor = showAnswers
            ? answer === correct_answer
                ? 'bg-green-500'
                : 'bg-red-500'
            : 'text-purple-700';

            //const textColor = showAnswers ?
            //'text-white' : 'text-purple-800'
            return (    
            <button
                className={`bg white
                p-4 font-semibold
                rounded shadow`}
                onClick={() => handleAnswer
                (answer)}
                dangerouslySetInnerHTML= {{ __html: answer}}
                />
                );
                })}
            </div>
            {showAnswers && (
                <button
                onClick={handleNextQuestion}
                className={`ml-auto bg-purple-700
                text-white p-4 font-semibold rounded
                shadow`}>
                    Next Question
                </button>
            )}
        </div>
    );
};


export default Questionaire;