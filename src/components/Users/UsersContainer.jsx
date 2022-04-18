import { connect } from "react-redux";
import { followAS, setCurrentPageAC, setUsersAC, unFollowAS, setUsersTotalCountAC } from "../../redux/users-reducer";
import Users from "./Users.jsx";

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
   }
}

let mapDispatchToProps = (dispatch) => {
   debugger;
   return {
      follow: (userID) => {
         dispatch(followAS(userID));
      },
      unfollow: (userID) => {
         dispatch(unFollowAS(userID));
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users));
      },
      setCurrentPage: (pageNumber) => {
         dispatch(setCurrentPageAC(pageNumber))
      },
      setTotalCount: (totalCount) => {
         dispatch(setUsersTotalCountAC(totalCount))
      }
   }
}



export default connect (mapStateToProps, mapDispatchToProps) (Users);