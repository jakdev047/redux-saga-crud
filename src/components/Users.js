import React,{ useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { fetchUsers } from '../actions/usersAction';

const Users = ({users}) => {
   const dispatch = useDispatch();
   useEffect(()=>{
      dispatch(fetchUsers());
   },[])
  return (
    <div>
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
