import React from 'react';
import {connect} from 'react-redux';
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC, toggleIsFetchingAC} from '../../redux/users-reducer.js'
import axios from 'axios';
import Users from './Users';
import preloader from './../../assets/images/Rolling-1s-200px.svg';
import s from './users.module.css';
import Preloader from '../common/preloader/prelaoder';

class UsersContainer extends React.Component {
	// constructor (props) {
	// 	super(props);
	// }

	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.data.items);
			});
	}

	render() {
		

		return <>
			{ this.props.isFetching ? <Preloader/>: null }
				<Users 		usersTotalCount = {this.props.usersTotalCount}
									pageSize = {this.props.pageSize}
									currentPage = {this.props.currentPage}
									onPageChanged = {this.onPageChanged}
									users = {this.props.users}
									follow = {this.props.follow}
									unfollow = {this.props.unfollow}
				/> 
			</>
	}
}


let mapStateToProps = (state) => {			// функция принимает глобальный state целиком
	return {															// передаёт в usersContainer через connect				
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		usersTotalCount: state.usersPage.usersTotalCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}

let mapDispatchToProps = (dispatch) => {  // функция для передачи презентационной компоненте callback-ов через props, которые презент. компонента может вызывать
	return {																// возвращаем объект
		follow: (userId) => {									// функция-callback follow и подобные будет dispatch-ить action creator
			dispatch(followAC(userId));
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId));
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users));
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber));
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setUsersTotalCountAC(totalCount));
		},
		toggleIsFetching: (isFetching) => {
			dispatch(toggleIsFetchingAC(isFetching));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer); // создаём контейнерную компоненту с помощью connect из react-redux