import React, { useState } from 'react';
import { questions, tips as allTips } from './Data';
import ReactSpeedometer from "react-d3-speedometer"
import './styles.css';

const DepressionQuiz = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [tips, setTips] = useState([]);

	const handleAnswerOptionClick = (answerScore) => {

		setScore(score + answerScore);

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			const scorePer = score/15;
			if(scorePer < 30) {
				setTips(allTips.low);
			}
			else if(scorePer < 60) {
				setTips(allTips.medium);
			}
			else {
				setTips(allTips.high);
			}
		}
	};

	return (
		<div className='quiz-parent'>
			<h1 className='quiz-heading'>Depression Assessment</h1>
			{showScore ? (
				<>
					<div className='score-section'>
						Your Depression metric is {(score/15)}.
					</div>
					<ReactSpeedometer
						maxValue={80}
						value={(score/15)}
						needleColor="red"
						startColor="green"
						segments={20}
						maxSegmentLabels={5}
						currentValueText="Depression Metric"
						height={350}
						width={400}
						endColor="red"
					/>
					<h4>Here are a few things we recommend you to do based on this: </h4>
					<br/>
					<ul>
					{tips && tips.map((tip) => (
								<li className='tips-list-item'>{tip}</li>
							))}
					</ul>
				</>
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