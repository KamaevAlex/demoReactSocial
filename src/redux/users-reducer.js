const FOLLOW = 'FOLLOW'; 														// добавление поста
const UNFOLLOW = 'UNFOLLOW';		// изменение набираемого в текущий момент текста
const SET_USERS = 'SET_USERS';

let initialState = {
	users: [
		
	]
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
			return {...state, users: [ ...state.users, ...action.users ]} // users: склеиваем копию старого state.users и users из action, т.е. добавляем
		}


		default:
			return state;
	}
	
}

export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export const setUsersAC = (users) => ({ type: SET_USERS, users });		// для взятия users с сервера и set в state

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