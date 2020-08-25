import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/preloader";

const ProfileInfo = (props) => {

	if (!props.profile) {
		return <Preloader />
	}


	return(
		<div>
			<div>
				<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQa3EUd2obKfU9TNmcAtMAq7zJ9zDR2vWO93SYzlSr-rCvmmvI3&usqp=CAU' alt=""/>
			</div>
			<div className = {s.description_block}>
				<img src = {props.profile.photos.large} />
				ava + descripton
			</div>
		</div>
	);
}

export default ProfileInfo;