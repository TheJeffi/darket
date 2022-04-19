import { usersAPI } from './../api/api';

const SET_USERS = 'SET-USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'


let initialState = {

   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
   followingInProgress: false,
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
      case TOGGLE_IS_FETCHING:
         {
            return { ...state, isFetching: action.isFetching }
         }
      case TOGGLE_IS_FOLLOWING_PROGRESS:
         {
            return {
               ...state,
               followingInProgress: action.isFetching ? [...state.followingInProgress, action.id] : state.followingInProgress.filter(id => id != action.id)
            }
         }
      default:
         return state;
   }
}

export const unfollowSuccess = (id) => ({ type: UNFOLLOW, id });
export const followSuccess = (id) => ({ type: FOLLOW, id });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, id) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, id })

export const getUsers = (currentPage, pageSize) => {
   return (dispatch) => {
      dispatch(setIsFetching(true));
      usersAPI.getUsers(currentPage, pageSize).then(data => {
         dispatch(setIsFetching(false));
         dispatch(setUsers(data.items));
         dispatch(setTotalCount(data.totalCount));
      });
   }
}

export const follow = (userID) => {
   return (dispatch) => {
      dispatch(toggleFollowingProgress(true, userID));
      usersAPI.follow(userID)
         .then((response) => {
            if (response.data.resultCode == 0) {
               dispatch(followSuccess(userID));
            }
            dispatch(toggleFollowingProgress(false, userID));
         });
   }
}

export const unfollow = (userID) => {
   return (dispatch) => {
      dispatch(toggleFollowingProgress(true, userID));
      usersAPI.unfollow(userID)
         .then((response) => {
            if (response.data.resultCode == 0) {
               dispatch(unfollowSuccess(userID));
            }
            dispatch(toggleFollowingProgress(false, userID));
         });
   }
}

export default usersReducer;