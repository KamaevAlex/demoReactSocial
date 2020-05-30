import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return(
		<div>
			<div>
				<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQa3EUd2obKfU9TNmcAtMAq7zJ9zDR2vWO93SYzlSr-rCvmmvI3&usqp=CAU' alt=""/>
			</div>
			<div className = {s.description_block}>
				ava + descripton
			</div>
		</div>
	);
}

export default ProfileInfo;