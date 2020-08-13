import {takeEvery,call, put} from 'redux-saga/effects';
import userService from '../service/userService';
import { setUsers } from '../actions/usersAction';
import { FETCH_USERS } from '../actions/types';

function* fetchUsers() {
   try {
      const users = yield call(userService.getAllUser);
      yield put(setUsers(users));
   } catch (error) {
      console.log(error);
   }
};

export function* waitFetchUsers(){
   yield takeEvery(FETCH_USERS,fetchUsers);
};