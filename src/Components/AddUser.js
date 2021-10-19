import React,{useContext,useState} from 'react'
import { Link,useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import{Form,FormGroup,Label,Input,Button} from 'reactstrap'; //npm i bootstrap reactstrap
import {v4 as uuid} from 'uuid';


export const AddUser = () => {
    const [name,setName]=useState('');
    const {addUser}=useContext(GlobalContext);
    const history=useHistory();

    const onSubmit=()=>{
        const newUser={
            id:uuid(),
            name
        }
        addUser(newUser);
        history.push('/');//if u click on submit it on home page.
    }

    const onChange=(e)=>{
        setName(e.target.value);
    }
    return (
        
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" value={name} onChange={onChange} placeholder="Enter Name"></Input>
            </FormGroup>
            <br></br>
            <Button type="submit">Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
        
    )
}
