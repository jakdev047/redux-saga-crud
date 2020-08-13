import React, { Component,Fragment } from 'react';
import { Button} from 'reactstrap';

class UserItem extends Component {
   constructor(props) {
      super();
   }
  render() {
     const { first_name,email,avatar,last_name } = this.props.user
    return (
      <Fragment>
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
      </Fragment>
    )
  }
};

export default UserItem;

