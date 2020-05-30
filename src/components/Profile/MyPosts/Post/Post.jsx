import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return(		
		<div className = {s.item}>
			<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9MvvCu2uZUeq_EYdsKE132cebunludxEJniucd8ejNSIp3TWP&usqp=CAU' alt='avatar'/>
			{props.message}
			<div>
				{props.likesCount} like
			</div>
		</div>
	);
}

export default Post;