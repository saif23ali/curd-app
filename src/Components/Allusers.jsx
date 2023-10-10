import { useEffect,useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow,styled,Button } from "@mui/material";
import { getUsers,deleteUser } from '../Service/api';
import { Link } from "react-router-dom";


const StyledTable = styled(Table)`
width: 50%;
margin: 50px auto 0 auto;
`
const Thead = styled(TableRow)`
background:#000;
& > th{
  color:white;
  font-size:20px;
}
`
const TBody = styled(TableRow)`
& > td{
  font-size:20px;
}
`
const TCell = styled(TableCell)`
display:flex;
`

const Allusers = () => {
 const [users,setUsers] = useState([]);

useEffect(()=>{
  getUsersDetails();
},[])


const getUsersDetails = async() =>{
  let response = await getUsers();
  console.log(response) ;
  setUsers(response.data);
}

const deleteUserData = async (id)=>{
  await deleteUser(id);
  getUsersDetails();
}

  return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Surname</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell> 
          <TableCell></TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {
          users.map(user =>(
            <TBody >
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.Surname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TCell>
                <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                <Button variant="contained" color="secondary" onClick={()=>deleteUserData(user.id)}>Delete</Button>                
              </TCell>
            </TBody>
          ))
          }
      </TableBody>
    </StyledTable>
  )
}

export default Allusers;
