import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper,Button } from '@mui/material';
import {useState,useEffect} from 'react';

export default function Student() {
    const paperStyle={padding:'50px 20px',width:600,margin:'20px auto'}
    const [name,setName]=useState('')
    const [address,setAddress]=useState('')
    const [status,setStatus]=useState('')
    const [student,setStudent]=useState([])
    

    

    const handleClick=(e)=>{
        e.preventDefault()
        const student={name,address}
        console.log(student)
        fetch("http://localhost:8080/student/add",
            {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(student)
            }).then(()=>{
                setStatus("New Student Added")
            })
    }

    useEffect(()=>{
      
        fetch("http://localhost:8080/student/studentdata"
            ).then(res=>
               res.json()
            ).then(result=>{
                setStudent(result);
            })
    },[])
    
    console.log(student)
  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 ><u>Add Student</u></h1>
            <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1 } }}
            noValidate
            autoComplete="off"
            >
            <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth value={name} onChange={(e)=>setName(e.target.value)} />
            <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth value={address} onChange={(e)=>setAddress(e.target.value)} />
            <Button variant="contained" onClick={handleClick}>Submit</Button>
               <br/> {status}
            </Box>
           
        </Paper>
        <h1 ><u> Student List</u></h1>
        <Paper elevation={3} style={paperStyle}>
        
           {student.map(student=>(
            <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={student.id}>
                Id: { student.id}<br/>
                Name:{student.name}<br/>
                Address:{student.address}

            </Paper>
           ))
           }
           
        </Paper>
        
    </Container>
  );
}
