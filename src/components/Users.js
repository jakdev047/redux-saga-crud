import React,{ useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { fetchUsers } from '../actions/usersAction';
import { Table } from 'reactstrap';
import UserItem from './UserItem';

const Users = ({users}) => {
   const dispatch = useDispatch();
   useEffect(()=>{
      dispatch(fetchUsers());
   },[])
  return (
    <div>
      <Table hover responsive className="user-table">
         <thead>
            <tr>
            <th>{`photo(${users.length})`}</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>action</th>
            </tr>
         </thead>
         <tbody>
            {users.map(user => (
            <UserItem key={user.id} user={user} />
            ))}
         </tbody>
      </Table>
      {
         console.log(users)
      }
    </div>
  )
}

const mapStateToProps = state => {
   return  {
      users:state.userReducers
   }
}

export default connect(mapStateToProps)(Users);
