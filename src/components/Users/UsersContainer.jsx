import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC} from '../../redux/users-reducer.js'

let mapStateToProps = (state) => {			// функция принимает глобальный state целиком
	return {															// возвращает объект с теми данными, которые на данный момент
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		usersTotalCount: state.usersPage.usersTotalCount,
		currentPage: state.usersPage.currentPage
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
			dispatch(setUsersAC(users))
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber))
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setUsersTotalCountAC(totalCount))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (Users); // создаём контейнерную компоненту с помощью connect из react-redux