const FOLLOW = 'FOLLOW'; 														// добавление поста
const UNFOLLOW = 'UNFOLLOW';		// изменение набираемого в текущий момент текста
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
	users: [],
	pageSize: 5,
	usersTotalCount: 0,
	currentPage: 1,
	isFetching: false
};

const usersReducer = (state = initialState, action) => {		//initialState по умолчанию
	switch(action.type) {																			// будет меняться type у action
		case FOLLOW: 																						// при значении FOLLOW
			return {
                ...state,																		// делаем копию state
                users: state.users.map( u =>  {  						// map перебирает state.users, делая его копию; 
                    if (u.id === action.userId) { 					// если id элемента    'u'    перебираемого массива равен, "userID" из action
                        return {...u, followed: true}				// возвращает копию элемента   'u'   со значением followed: true
                    }
                    return u;																// иначе возвращаем неизмененный элемент   'u'
                })
            }


		case UNFOLLOW:
			return {
				...state,																						
				users: state.users.map ( u => {					
					if (u.id === action.userId) {											
						return {...u, followed: false}									
					}
					return u;																					
				})
			}

		case SET_USERS: {
			return {...state, users: action.users} // users: склеиваем копию старого state.users и users из action, т.е. добавляем
		}

		case SET_CURRENT_PAGE: {
			return {...state, currentPage: action.currentPage} // создаём объект и меняем currentPage на тот, который сидит в action. Его диспатчим из компоненты Users
		}

		case SET_TOTAL_USERS_COUNT: {
			return {...state, usersTotalCount: action.count} 
		}

		case TOGGLE_IS_FETCHING: {
			return {...state, isFetching: action.isFetching} 
		}


		default:
			return state;
	}
	
}


// action-creators
export const follow = (userId) => ({ type: FOLLOW, userId });

export const unfollow = (userId) => ({ type: UNFOLLOW, userId });

export const setUsers = (users) => ({ type: SET_USERS, users });		// для взятия users с сервера и set в state

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default usersReducer;




// const usersReducer = (state = initialState, action) => {		//initialState по умолчанию
// 	switch(action.type) {																			// будет меняться type у action
// 		case FOLLOW: 																						// при значении FOLLOW
// 			return {
// 				...state,																						// делаем копию state
// 				users: state.users.map ( u => {											// map перебирает state.users, делая его копию; 
// 					if (u.id === action.userId) {											// если id элемента    'u'    перебираемого массива равен, "userID" из action
// 						return {...u, followed: true}										// возвращает копию элемента   'u'   со значением followed: true
// 					}
// 					return u;																					// иначе возвращаем неизмененный элемент   'u'
// 				})
// 			}