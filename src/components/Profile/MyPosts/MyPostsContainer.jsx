import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer.js';
import MyPosts from './MyPosts.jsx';
import {connect} from "react-redux";


// const MyPostsContainer = (props) => {
// 	//let state = props.store.getState();
// 
// 	
// 
// 	return(
// 		<StoreContext.Consumer>
// 			{ (store) => {
// 				let state = store.getState();
// 
// 				let addPost = () => {   		// будем передавать функцию в button
// 					store.dispatch(addPostActionCreator());
// 				};
// 
// 				let onPostChange = (text) => {
// 					let action = updateNewPostTextActionCreator(text);
// 					store.dispatch(action);		// обновляет текст
// 				};
// 
// 				return <MyPosts 
// 								updateNewPostText = {onPostChange}
// 								addPost = {addPost}
// 								posts = {state.profilePage.posts}
// 								newPosts = {state.profilePage.newPostText} />
// 			}
// 		}
// 		
// 		</StoreContext.Consumer>
// 	);
// }

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPosts: state.profilePage.newPostText
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