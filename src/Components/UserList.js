import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

import {
    ListGroup,ListGroupItem,Button} from 'reactstrap';
export const UserList = () => {
    const {users,removeUser}=useContext(GlobalContext);
   // console.log(users);//to see userlist object user1 user2 ..
    return (
       <ListGroup className="mt-4"> 
           {users.map(user=>(    //to map the list of users
                <ListGroupItem className="d-flex">
                <strong>{user.name}</strong>
                <div className="ml-auto">
                <Link className="btn btn-warning mr-1" to={`/edit/${user.id}`}>Edit</Link>
                <Button onClick={()=> removeUser(user.id)} color="danger">Delete</Button>
                </div>
                 </ListGroupItem>
           ))}
           </ListGroup>
    )
}
