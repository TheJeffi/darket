const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW'
const SET_USERS = 'SET-USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'


let initialState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
};

const usersReducer = (state = initialState, action) => {

   switch (action) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(user => { return { ...user, followed: true } })
         }
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(user => { return { ...user, followed: false } })
         }
      case SET_USERS:
         {
            return { ...state, users: action.users }
         }
      case SET_CURRENT_PAGE:
         {
            return { ...state, currentPage: action.currentPage }
         }
      case SET_TOTAL_USERS_COUNT:
         {
            return { ...state, currentPage: action.count }
         }
      default:
         return state;
   }
}

export const unFollowAS = (userID) => ({ type: UNFOLLOW, userID });
export const followAS = (userID) => ({ type: FOLLOW, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export default usersReducer;