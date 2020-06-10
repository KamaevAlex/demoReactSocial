import React from 'react';
import s from './users.module.css';

let Users = (props) => {

	if (props.users.length === 0) { 							// Иначе будет зацикливание 49ур 57мин
		props.setUsers ([
			{id:1, photoUrl: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1677602.jpg', 
			followed: false, fullName: 'Dmitry', status: 'I am a boss', location : {city: 'Minsk', country: 'Belarus'} },
			{id:2, photoUrl: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1677602.jpg', 
			followed: true, fullName: 'Sasha', status: 'I am a boss too', location : {city: 'Moscow', country: 'Russia'} },
			{id:3, photoUrl: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1677602.jpg', 
			followed: true, fullName: 'Andrew', status: 'I am a boss too', location : {city: 'Ukraine', country: 'Ukraine'} }]
			);
	}

	return <div>
		{
			props.users.map( u => <div key={u.id}>
				<span>
					<div>
						<img src={u.photoUrl} alt="user photo" className = {s.userPhoto}/>
					</div>
					<div>
						{u.followed
							? <button onClick = {()=> {props.unfollow(u.id)}}>Unfollow</button> 	
							: <button onClick = {() => {props.follow(u.id)}}>Follow</button>}
					</div>
				</span>
				<span>
					<span>
						<div>{u.fullName}</div>
						<div>{u.status}</div>
					</span>
					<span>
						<div>{u.location.coutry}</div>
						<div>{u.location.city}</div>
					</span>
				</span>
			</div> )
			}
	</div>
}

export default Users;