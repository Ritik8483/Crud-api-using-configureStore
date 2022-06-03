import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useDispatch, useSelector } from 'react-redux';
import { getDelete, getThunk } from '../reducer/reducer';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const dispatch=useDispatch();
    const navigate =useNavigate();

    const fetchedData=useSelector((state)=>state.userRED.userValue);
    console.log('All Data',fetchedData);

    useEffect(()=>{
        dispatch(getThunk());
    },[]);
    const handleDelete=(id)=>{
        console.log('USer Id',id)   
        dispatch(getDelete(id));
    }
    const handleAddUser=()=>{
        navigate('/adduser');
    }


  return (
    <div>
        <Button onClick={handleAddUser} style={{marginTop:'20px'}} variant="contained">Add User</Button>
    <TableContainer style={{marginTop:'20px'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">School Name</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Delete</TableCell>
            <TableCell align="center">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fetchedData.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{user.name}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center">{user.phone}</TableCell>
              <TableCell align="center">{user.schoolName}</TableCell>
              <TableCell align="center">{user.address}</TableCell>
              <TableCell align="center">
                <Button onClick={()=>handleDelete(user.id)} style={{marginTop:'8px'}} variant="contained" startIcon={<DeleteIcon />}>
                  Delete
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button style={{marginTop:'8px'}} variant="contained" startIcon={<EditIcon />}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Home