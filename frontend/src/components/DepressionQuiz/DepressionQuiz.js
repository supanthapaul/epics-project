import React, { useState } from 'react';
import { questions } from './questions';
import './styles.css';

const DepressionQuiz = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (answerScore) => {

		setScore(score + answerScore);

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	return (
		<div className='quiz-parent'>
			<h1 className='quiz-heading'>Depression Assessment</h1>
			{showScore ? (
				<div className='score-section'>
					Your Depression metric is {(score/15)}.
				</div>
			) : (
				<>
					
					<p className='quiz-top-line'>These questions will let us know how you're feeling right now so that we can serve you better. There are no right or wrong answers, make sure to answer whatever you feel is right for you.</p>
					<div className='question-parent'>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion + 1}</span>/{questions.length}
							</div>
							<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								<button className='btn blue btn--wide answer-btn' onClick={() => handleAnswerOptionClick(answerOption.score)}>{answerOption.answerText}</button>
							))}
						</div>
					</div>
				</>

			)}
		</div>
	)
}

export default DepressionQuiz;