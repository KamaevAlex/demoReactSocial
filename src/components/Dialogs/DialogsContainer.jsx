import React from "react";
import s from "./Dialogs.module.css";
//import {NavLink} from "react-router-dom";
//import DialogItem from "./DialogItem/DialogItem.jsx" //name of the user in the field
//import Message from "./Message/Message.jsx"
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer.js";
import Dialogs from "./Dialogs.jsx";
import {connect} from "react-redux";


// const DialogsContainer = () => {
// 	
// 
// 
// 	return <StoreContext.Consumer> 
// 		{ (store) => {
// 			let state = store.getState().dialogsPage;
// 
// 			let onSendMessageClick = () => {
// 				store.dispatch(sendMessageCreator())
// 			}
// 
// 			let onNewMessageChange = (body) => {
// 				store.dispatch(updateNewMessageBodyCreator(body));
// 			}
// 
// 			return <Dialogs 	updateNewMessageBody = {onNewMessageChange}
// 								sendMessage = {onSendMessageClick}
// 								dialogsPage = {state} />
// 		}	
// 	}
// 	</StoreContext.Consumer>
// 
// }

const mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageBody: (body) => {
			dispatch(updateNewMessageBodyCreator(body));
		},
		sendMessage: () => {
			dispatch(sendMessageCreator());
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;