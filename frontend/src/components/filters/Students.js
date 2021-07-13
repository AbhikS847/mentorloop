import React from 'react';
import axios from 'axios';
import {Card} from 'react-bootstrap';
import { useEffect,useState } from 'react';

const Students = () => {

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
                        {state.map((user)=>{
                return(
                    <div key={user._id} className="text-center">
                    <Card className="my-2" style={{ width: 'auto',backgroundColor:'crimson',color:'#FFF' }}>
  <Card.Body>
    <Card.Title><h4>Student ID: {user._id} </h4></Card.Title>
    <Card.Text>
    <p>Student Name: {user.Fullname}</p>
                        <p>Interests: {user.Interest.join(', ')}</p>
    </Card.Text>
  </Card.Body>
</Card>
                    </div>
                )
            })}

        </div>
    )
}

export default Students
