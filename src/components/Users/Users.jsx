import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Users.module.css";

function Users(props) {

   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }
   return (
      <div>
         <div>
            {pages.map(page => {
               return <span className={props.currentPage === page && css.selectedPage} onClick={() => { props.onPageChanged(page) }}>{page}</span>
            })}
         </div>
         {
            props.users.map(user => <div key={user.id}>
               <span>
                  <div>
                     <NavLink to={'/profile/' + user.id}>
                        {/* <img src={props.users.photos.small != null ? props.user.photos.small : 'https://pixelbox.ru/wp-content/uploads/2021/09/avatar-boys-vk-68.jpg'} /> */}
                     </NavLink>
                  </div>
                  <div>
                     {
                        user.followed ?
                           <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => { props.unfollow(user.id) }}  >Удалить из друзей</button>
                           : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => { props.follow(user.id) }}  >Добавить в друзья</button>
                     }
                  </div>
               </span>
               <span>
                  <span>
                     <div>{user.userName}</div>
                     <div>{user.userStatus}</div>
                  </span>
                  <span>
                     {/* <div>{"user.location.country"}</div>
                     <div>{"user.location.city"}</div> */}
                  </span>
               </span>
            </div>)
         }
      </div>
   )
}

export default Users;