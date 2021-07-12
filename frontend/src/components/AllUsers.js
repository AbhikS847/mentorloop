import React from 'react';
import axios from 'axios';
import {Container,Card} from 'react-bootstrap';
import { useEffect,useState } from 'react';

const AllUsers = () => {

    const [state,setState] = useState([

    ]);

    useEffect(()=>{
        const getAllUsers = async()=>{
            const res = await axios.get('http://localhost:5000/students');
            const users = res.data;
            setState(users);
        }

        getAllUsers();
    })

    return (
        <div>
            <h2 className="text-center">This shows all users</h2>
            <Container className="text-center">
            {state.map((user)=>{
                return(
                    <div>
                    <Card className="my-2" style={{ width: 'auto' }}>
  <Card.Body>
    <Card.Title><h4>Student ID: {user._id} </h4></Card.Title>
    <Card.Text>
    <p>Student Name: {user.Fullname}</p>
                        <p>Assigned Teacher: {user.Teacher}</p>
                        <p>Interests: {user.Interest.join(', ')}</p>
                        <p>Enrolled:{user.Enrolled === true ? "Enrolled" : "Not Enrolled"}</p>
    </Card.Text>
  </Card.Body>
</Card>
                    </div>
                )
            })}
            </Container>

        </div>
    )
}

export default AllUsers
