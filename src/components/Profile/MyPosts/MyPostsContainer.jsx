import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer.js';
import MyPosts from './MyPosts.jsx';
import {connect} from "react-redux";



const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (text) => {
			let action = updateNewPostTextActionCreator(text);
			dispatch(action);		// обновляет текст
		},
		addPost: () => {
			dispatch(addPostActionCreator()); 	//передаёт функцию в button
		}
	}
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);
export default MyPostsContainer;