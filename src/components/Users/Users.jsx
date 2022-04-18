import axios from "axios";
import React from "react";
import css from "./Users.module.css";



class Users extends React.Component {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
         this.props.setUsers(res.data.items)
         this.props.setTotalUsersCount(res.data.totalCount)
      });
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage (pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(res => {
         this.props.setUsers(res.data.items)
      });
   }
   render() {

      let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

      let pages = [];
      for (let i = 1; i <= pagesCount; i++) {
         pages.push(i);
      }
      return (
         <div>
            <div>
               {pages.map (page => {
                  return <span className={this.props.currentPage === page && css.selectedPage} onClick={() => {this.onPageChanged(page)}}>{page}</span>
               })}
            </div>
            {
               this.props.users.map(user => <div key={user.id}>
                  <span>
                     <div>
                        <img src={user.photos.small != null ? user.photos.small : 'https://pixelbox.ru/wp-content/uploads/2021/09/avatar-boys-vk-68.jpg'} />
                     </div>
                     <div>
                        {
                           user.followed ?
                              <button onClick={() => { this.props.toggleFollow(user.id) }}>Удалить из друзей</button>
                              : <button onClick={() => { this.props.follow(user.id) }}>Добавить в друзья</button>}
                     </div>
                  </span>
                  <span>
                     <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                     </span>
                     <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                     </span>
                  </span>
               </div>)
            }
         </div>)
   }
}
export default Users;