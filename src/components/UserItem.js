import React from 'react';
import { Button,Modal,ModalHeader,ModalBody,ModalFooter,Form,FormGroup,Input,CustomInput } from 'reactstrap';

const UserItem = ({
   user: { first_name,email,avatar,last_name}
}) => {
  return (
   <tr>
      <td>
         <img src={avatar} alt={first_name}/>
      </td>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{email}</td>
      <td className="user-updt">
         <Button color="user-update-icon" title='edit'>Edit </Button> 
         <Button color="user-update-icon" title='delete'>Delete</Button>
      </td>
   </tr>
  )
}

export default UserItem;
