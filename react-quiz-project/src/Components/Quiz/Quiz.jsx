import { useState } from "react";
import "../Quiz/Quiz.scss";
import { QuizData } from "./QuizData/QuizData";

const Quiz = () =>{
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(0);
    const [score, setScore] = useState(0);

    const handleClick = (iscorrect) =>{
        if(iscorrect){
            setScore(score + 1);
        }
        const nextquestion = currentQuestion + 1;
        if(nextquestion < QuizData.length){
            setCurrentQuestion(nextquestion);
        }
        else{
            setShowScore(true);
        }
    }
    return(
        <>
            <div className="quiz-content">
                {showScore ? (
                <p>You scored {score} out of {QuizData.length}</p>
                ):(
                <div className="quiz-content-items">
                    <div className="quiz-question">
                        <h1>Question {currentQuestion + 1} / {QuizData.length}</h1>
                        <p>{QuizData[currentQuestion].questiontext}</p>
                    </div>
                    <div className="quiz-answer">
                        {
                            QuizData[currentQuestion].answeroption.map((answeroption)=>(
                                <button onClick={()=> handleClick(answeroption.iscorrect)} className="quiz-button">{answeroption.answertext}</button>
                            ))
                        }
                    </div>
                </div>
                )}
            </div>
        </>
    )
}
export default Quiz;