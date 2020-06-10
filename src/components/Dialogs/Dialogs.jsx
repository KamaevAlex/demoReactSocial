import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem.jsx' //name of the user in the field
import Message from './Message/Message.jsx'
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer.js';



const Dialogs = (props) => {
	let state = props.dialogsPage;

	let dialogsElements = state.dialogs
		.map (d => <DialogItem name = {d.name} key={d.id} id = {d.id}/>);

	let messagesElements = state.messages
		.map (m => <Message message = {m.message} key = {m.id}/>);

	let newMessageBody = state.newMessageBody;

	let onSendMessageClick = () => {
		props.sendMessage();
	}

	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
	}


	return (

		<div className = {s.dialogs}>
			<div className = {s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className = {s.messages}>
				<div>
					{messagesElements}
				</div>
		
				<div className = {s.newMessageArea}>
					<div>
						<textarea 	placeholder = 'add message' 
												value = {newMessageBody} 
												onChange = {onNewMessageChange}
												></textarea>
					</div>
					<div>
						<button onClick = {onSendMessageClick}>Send message</button>
					</div>
				</div>
			</div>

			
		</div>
		);
}

export default Dialogs;