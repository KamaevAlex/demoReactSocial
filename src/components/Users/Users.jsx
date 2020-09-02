import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/userDefault.png';
import {NavLink} from "react-router-dom";
import axios from "axios";


let Users = (props) => {

	let pagesCount = Math.ceil(props.usersTotalCount / props.pageSize);
		let pages = [];
		for (let i=1; i<=pagesCount; i++) {
			pages.push(i);
		}

	return <div>
	<div className = {s.pageNum}>
		{pages.map( p => {
			return <span 	className = {props.currentPage === p ? s.selectedPage:undefined}
										onClick={ (e) => {props.onPageChanged(p)} }>{p} </span> // 55 34:30		setCurrentPage делаем в mapDispatchToProps
			})}

	</div>
	{
		props.users.map( u => <div key={u.id}>
			<span>
				<div>
					<NavLink to = {'/profile/' + u.id}>
					<img src={u.photos.small != null ? u.photos.small : userPhoto} alt="user photo" className = {s.userPhoto}/>
					</NavLink>
				</div>
				<div>
					{u.followed
						? <button onClick = {()=> {

							axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
								withCredentials: true,
								headers: {
									"API-KEY" : "e140c06d-c267-4416-a0de-191aab3a91c1"
								}
							})
								.then(response => {
									if (response.data.resultCode == 0) {  // в API 0 - значит операция выполнена успешно
										props.unfollow(u.id); 	//вызываем callback (dispatch в reducer)
									}

								});


						}}>Unfollow</button>
						: <button onClick = {() => {

							axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
								withCredentials: true,
								headers: {
									"API-KEY" : "e140c06d-c267-4416-a0de-191aab3a91c1"
								}
							})
								.then(response => {
									if (response.data.resultCode == 0) {  // в API 0 - значит операция выполнена успешно
										props.follow(u.id); 	//вызываем callback (dispatch в reducer)
									}

								});

						}}>Follow</button>}
					</div>
				</span>
				<span>
					<span>
						<div>{u.name}</div>
						<div>{u.status}</div>
					</span>
					<span>
						<div>{"u.location.country"}</div>
						<div>{"u.location.city"}</div>
					</span>
				</span>
				</div> )
		}
		</div>
	}

export default Users;