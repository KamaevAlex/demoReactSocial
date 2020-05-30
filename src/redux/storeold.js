import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer.js';
import sidebarReducer from './sidebar-reducer.js';



let store = {
	_state: {
		profilePage:{
			posts: [
			{id:1, message: 'Hi, how are you?', likesCount: '12'},
			{id:2, message: 'It\'s my first post', likesCount: '18'}
			],
			newPostText: 'it-kamasutra'
		},

		dialogsPage: {
			messages: [
			{id:1, message:'Hi'},
			{id:2, message:'How are you?'},
			{id:3, message:'yoyoy'}
			],
			dialogs: [
			{id:1, name:'Dimych'},
			{id:2, name:'Andrey'},
			{id:3, name:'Sveta'},
			{id:4, name:'Sasha'},
			{id:5, name:'Victor'},
			{id:6, name:'Valera'}
			],
			newMessageBody: ""
		},

		sidebar: {}
	},
	_callSubscriber () {
		console.log('state changed');
	},	

	getState () {
		return this._state;
	},
	subscribe (observer) {
		this._callSubscriber = observer;		// наблюдатель паттерн
	},

	dispatch (action) {

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	}
}






//export default store;
