import React, { useEffect, useState } from 'react'
import './appointments.css';
import { io } from 'socket.io-client';
import {useStoreState } from 'easy-peasy';
import moment from 'moment';

import {therapists} from './therapistsData';
import Message from './Message';

// Structure of a message for messageFeed
// message {
// 	from: "Name",
// 	time: "12:47",
//	text: "A message"
// 	isUserMessage: true // whether or not the message is sent or received (for layout)
// }

// {
// 		from: "Name",
// 		time: "12:47",
// 		text: "A message",
// 		isUserMessage: true
// 	}
const Appointments = () => {
	const [socket, setSocket] = useState(null);
	const [message, setMessage] = useState("");
	const [currentRoom, setCurrentRoom] = useState("");
	const [messageFeed, setMessageFeed] = useState([{
		from: "MindPeace Bot",
		time: moment().format('h:mm a'),
		text: "Welcome to MindPeace professional help! Please click on one of our therapists to consult with them immediately.",
		isUserMessage: false
	}]);
	
	const authState = useStoreState(state => state.auth.user);

	useEffect(() => {
		try {
			const socket = io('http://localhost:8000/');

			socket.on('message', (message) => {
				const newMessage = {
					...message,
					isUserMessage: false
				}
				setMessageFeed(currentMessageFeed => [
					...currentMessageFeed,
					newMessage
				])
			
				// Scroll down
			});
			setSocket(socket);
		}
		catch(err) {
			console.log(err);
		}
	}, []);

	const joinRoom = therapist => {
		if(!socket) return;
		// clear messages
		setMessageFeed([]);
		try {
			const botMsg = therapist.status == "Online" ? "You're currently talking to " + therapist.name : therapist.name + " is currently offline, please check back later."
			socket.emit('joinRoom', { username: authState.name, room: therapist.room, botMsg });
			setCurrentRoom(therapist.room);
		} catch (error) {
			setCurrentRoom(null);
		}
	}

	const sendMessage = e => {
		e.preventDefault();
		const newMessage = {
			from: authState.name,
			text: message.trim(),
			time: moment().format('h:mm a'),
			isUserMessage: true
		}
		if(newMessage.text == "") return;

		socket.emit('chatMessage', newMessage);
		setMessageFeed(currentMessageFeed => [
			...currentMessageFeed,
			newMessage
		])
		setMessage("");
		console.log("SEdning " + message)
	}

	return (
	<div className="appointments">
		<section className='therapists-container'>
			<header className="msger-header" >
				<div className="msger-header-title">
					Therapists
				</div>
			</header>
			<div className="therapists">
				{therapists.map((therapist, index) => {
					let activeClass = 'therapist-detail';
					activeClass += currentRoom == therapist.room ? " therapist-active": "";
					return (
					<div className={activeClass} onClick={() => joinRoom(therapist)}>
						<img className='therapist-photo' src={therapist.photo} alt={therapist.name} />
						<div>
							<h4>{therapist.name}</h4>
							<p className={therapist.status == "Online" ? 'therapist-online': 'therapist-offline'}>{therapist.status}</p>
						</div>
					</div>
				)})} 

			</div>
		</section>
		<section className="msger">
			<header className="msger-header">
				<div className="msger-header-title">
					<i className="fas fa-comment-alt"></i> SimpleChat
				</div>
			</header>

			<main className="msger-chat">
				{messageFeed.map((message, index) => (
					<Message key ={index} message={message}/>
				))}
			</main>

			<form className="msger-inputarea" onSubmit={e => sendMessage(e)}>
				<input type="text" 
					className="msger-input" 
					disabled={!currentRoom}
					value={message} 
					onChange={e => setMessage(e.target.value)} 
					placeholder="Enter your message..." />
				<button 
					type="submit" 
					disabled={!currentRoom}
					className="msger-send-btn">Send</button>
			</form>
		</section>
	</div>
		
	)
}

export default Appointments