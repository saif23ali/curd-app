import { useState } from 'react';
import styled from '@emotion/styled';
import { FormControl, FormGroup, InputLabel,Input,Typography,Button } from '@mui/material'
import React from 'react';
import { addUser } from '../Service/api';
import {useNavigate} from 'react-router-dom';

const Container = styled(FormGroup)`
width:50%;
margin: 5% auto 0 auto;
& > div{
  margin-top :20px;
}
`
const initialValues ={
  name:'',
  username:'',
  email:'',
  phone:''
}

const Addusers = () => {
  const [user,setUser] = useState(initialValues);
  const navigate = useNavigate();

  const onValueChange = (e) =>{

    setUser({...user,[e.target.name]:e.target.value})
    console.log(user)
  }

   const addUsersDetails =async () =>{
      await addUser(user);
      navigate('/all')
   }
  return (
  <Container>
     <Typography variant='h4'>Add User</Typography>
    <FormControl> 
      <InputLabel>Name</InputLabel>
      <Input onChange={(e)=>onValueChange(e)} name ="name"/>
    </FormControl>
    <FormControl>
      <InputLabel>Surname</InputLabel>
      <Input onChange={(e)=>onValueChange(e)} name ="Surname"/>
    </FormControl>
    <FormControl> 
      <InputLabel>Email</InputLabel>
      <Input onChange={(e)=>onValueChange(e)} name ="email"/>
    </FormControl>
    <FormControl>
      <InputLabel>Phone</InputLabel>
      <Input onChange={(e)=>onValueChange(e)} name ="phone"/>
    </FormControl>
    <FormControl>
      <Button  onClick={addUsersDetails}variant='contained'>ADD USERS</Button>
    </FormControl>
  </Container>
  )
}

export default Addusers