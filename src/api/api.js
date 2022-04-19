import axios from "axios";
import { unFollow } from "../redux/users-reducer";

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "30b9c454-cd31-46cf-8ac8-a7807c723f5a"
   }
});

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => {
            return response.data;
         });
   },
   follow(userID) {
      return instance.post(`follow/${userID}`)
   },
   unFollow(userID) {
      return instance.delete(`follow/${userID}`)
   },
   getProfile(userID) {
      return instance.get(`profile/` + userID);
   },
}

export const authAPI = {
   me() {
      return instance.get(`auth/me`)
   }
}

export default usersAPI;
