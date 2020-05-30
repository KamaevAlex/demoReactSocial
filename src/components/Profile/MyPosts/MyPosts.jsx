import React from 'react';
import Post from './Post/Post.jsx';
import s from './MyPosts.module.css';


const MyPosts = (props) => {

	let newPostElement = React.createRef(); // empty link
	let postsElements = props.posts
		.map ( p => (<Post message={p.message} likesCount={p.likesCount}/>));

	let onAddPost = () => {   		// будем передавать функцию в button
		props.addPost();
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);			// обновляет текст

	};

	return(		
			<div className = {s.postsBlock}>
				<h3>My posts</h3>
				<div>
					<div>
						<textarea onChange = {onPostChange} ref = {newPostElement} value = {props.newPostText} />
					</div>
					<div>
						<button onClick = {onAddPost} >Add post</button>
					</div>
				</div>
				
				<div className = {s.posts}>
					{postsElements}
				</div>
			</div>
	);
}
export default MyPosts;