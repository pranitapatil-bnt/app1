import React,{useContext,useState,useEffect} from 'react'
import { Link,useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import{Form,FormGroup,Label,Input,Button} from 'reactstrap'; //npm i bootstrap reactstrap


export const EditUser = (props) => {
    const [selectedUser, setSelectedUser]=useState({
        id: '',
        name: ''
    });
    const {users,editUser}=useContext(GlobalContext);
    const history=useHistory(); 
    const currentUserId=props.match.params.id;

    useEffect(()=>{
        const userId=currentUserId;
        console.log(typeof userId);
        const selectedUser=users.find(user => user.id === userId);
        setSelectedUser(selectedUser)
       //console.log(selectedUser);
    }, [currentUserId, users])
    const onSubmit=()=>{
       editUser(selectedUser)
        history.push('/');//if u click on submit it on home page.
    }

    const onChange=(e)=>{
        setSelectedUser({...selectedUser, [e.target.name]:e.target.value})
    }
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" name="name" value={selectedUser.name} onChange={onChange} placeholder="Enter Name"></Input>
            </FormGroup>
            <br></br>
            <Button type="submit">Edit Name</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
        
    )
}
