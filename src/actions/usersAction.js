import { FETCH_USERS, SET_USERS } from "./types";

export const fetchUsers = () => {

   // done for redux-saga
   return {
      type: FETCH_USERS
   }
};

export const setUsers = (users=null) => {
   if(users) {
      return {
         type: SET_USERS,
         payload: users
      }
   }
};