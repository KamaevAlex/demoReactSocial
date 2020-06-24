import React from 'react';
import s from './users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/userDefault.png';

let Users = (props) => {
	let getUsers = () => {

		if (props.users.length === 0) { 							// Иначе будет зацикливание 49ур 57мин
			axios.get("https://social-network.samuraijs.com/api/1.0/users")
				.then(response => {
					props.setUsers(response.data.items);
				});
		}
	}

	return <div>
		<button onClick = {getUsers}>Get Users</button>
		{
			props.users.map( u => <div key={u.id}>
				<span>
					<div>
						<img src={u.photos.small != null ? u.photos.small : userPhoto} alt="user photo" className = {s.userPhoto}/>
					</div>
					<div>
						{u.followed
							? <button onClick = {()=> {props.unfollow(u.id)}}>Unfollow</button> 	
							: <button onClick = {() => {props.follow(u.id)}}>Follow</button>}
					</div>
				</span>
				<span>
					<span>
						<div>{u.name}</div>
						<div>{u.status}</div>
					</span>
					<span>
						<div>{"u.location.coutry"}</div>
						<div>{"u.location.city"}</div>
					</span>
				</span>
			</div> )
			}
	</div>
}

export default Users;




// props.setUsers ([
// 			{id:1, photoUrl: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1677602.jpg', 
// 			followed: false, fullName: 'Dmitry', status: 'I am a boss', location : {city: 'Minsk', country: 'Belarus'} },
// 			{id:2, photoUrl: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1677602.jpg', 
// 			followed: true, fullName: 'Sasha', status: 'I am a boss too', location : {city: 'Moscow', country: 'Russia'} },
// 			{id:3, photoUrl: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1677602.jpg', 
// 			followed: true, fullName: 'Andrew', status: 'I am a boss too', location : {city: 'Ukraine', country: 'Ukraine'} }]
// 			);