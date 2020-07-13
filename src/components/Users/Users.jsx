import React from 'react';
import s from './users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/userDefault.png';

class Users extends React.Component {
	// constructor (props) {
	// 	super(props);
	// }

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
			});
	}

	render() {
		let pagesCount = Math.ceil(this.props.usersTotalCount / this.props.pageSize);
		let pages = [];
		for (let i=1; i<=pagesCount; i++) {
			pages.push(i);
		}
		return <div>
		<div>
			{pages.map( p => {
				return <span className = {this.props.currentPage === p ? s.selectedPage:undefined }
								onClick={ (e) => {this.onPageChanged(p)} }>{p}</span> // 55 34:30		setCurrentPage делаем в mapDispatchToProps
				})}
			
		</div>
		{
			this.props.users.map( u => <div key={u.id}>
				<span>
					<div>
						<img src={u.photos.small != null ? u.photos.small : userPhoto} alt="user photo" className = {s.userPhoto}/>
					</div>
					<div>
						{u.followed
							? <button onClick = {()=> {this.props.unfollow(u.id)}}>Unfollow</button> 	
							: <button onClick = {() => {this.props.follow(u.id)}}>Follow</button>}
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
	}


export default Users;
