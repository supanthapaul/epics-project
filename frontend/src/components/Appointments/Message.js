import React from 'react'

const Message = ({ message}) => {

	const messageClass = message.isUserMessage ? "msg right-msg" : "msg left-msg";
	return (
		<div className={messageClass}>

			<div className="msg-bubble">
				<div className="msg-info">
					<div className="msg-info-name">{message.from}</div>
					<div className="msg-info-time">{message.time}</div>
				</div>

				<div className="msg-text">
				{message.text}
				</div>
			</div>
		</div>
	)
}

export default Message