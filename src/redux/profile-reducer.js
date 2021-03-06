const ADD_POST = 'ADD-POST'; 														// добавление поста
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';		// изменение набираемого в текущий момент текста
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
	posts: [
	{id:1, message: 'Hi, how are you?', likesCount: '12'},
	{id:2, message: 'It\'s my first post', likesCount: '18'}
	],
	newPostText: 'it-kamasutra',
	profile: null
};

const profileReducer = (state = initialState, action) => {		//initialState по умолчанию
	switch(action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: state.newPostText,
				likesCount: 0
			};
			
			return {
				...state,
				posts: [...state.posts, newPost],			// копируем посты, push newPost
				newPostText: ''
			};
		}

		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newText
			};
		}

		case SET_USER_PROFILE: {
			return {...state, profile: action.profile}
		}

		default:
			return state;
	}
	
}

//Action creators
export const addPostActionCreator = () => ({type: ADD_POST});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const updateNewPostTextActionCreator = (text) =>
	({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;