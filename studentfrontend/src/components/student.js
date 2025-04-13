import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles'; 
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme?.spacing ? theme.spacing(1) : '8px', 
    },
  },
}));

export default function Student() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [students, setStudents] = useState([]);
  const classes = useStyles();

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address };
    console.log(student);
    fetch('http://localhost:8080/student/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    }).then(() => {
      console.log('New Student added');
      // optional: refresh the list
      fetchStudents();
    });
  };

  const fetchStudents = () => {
    fetch('http://localhost:8080/student/getAll')
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: 'green' }}>
          <u>Add Student</u>
        </h1>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-name"
            label="Student Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-address"
            label="Student Address"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button variant="contained" color="secondary" onClick={handleClick}>
            Submit
          </Button>
        </form>
      </Paper>

      <h1>Students</h1>

      <Paper elevation={3} style={paperStyle}>
        {students.map((student) => (
          <Paper
            key={student.id}
            elevation={6}
            style={{ margin: '10px', padding: '15px', textAlign: 'left' }}
          >
            <strong>Id:</strong> {student.id}
            <br />
            <strong>Name:</strong> {student.name}
            <br />
            <strong>Address:</strong> {student.address}
          </Paper>
        ))}
      </Paper>
    </Container>
  );
}
