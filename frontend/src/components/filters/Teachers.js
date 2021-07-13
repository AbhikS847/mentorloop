import React from 'react';
import axios from 'axios';
import {Card} from 'react-bootstrap';
import { useEffect,useState } from 'react';

const Teachers = () => {

    const [state,setState] = useState([

    ]);

    useEffect(()=>{
        const getAllUsers = async()=>{
            const res = await axios.get('http://localhost:5000/teachers');
            const users = res.data;
            setState(users);
        }

        getAllUsers();
    })


    return (
        <div>
        {state.map((user)=>{
            return(
                <div className="text-center">
                <Card className="my-2" style={{ width: 'auto',backgroundColor:'#4caf50',color:"#FFF" }}>
<Card.Body>
<Card.Title><h4>Teacher ID: {user._id} </h4></Card.Title>
<Card.Text>
<p>Teacher Name: {user.Fullname}</p>
                    <p>Teaching Experience (In Years): {user.Experience}</p>
                    <p>Weekends:{user.Weekends === true ? " Available" : " Unavailable"}</p>
</Card.Text>
</Card.Body>
</Card>
                </div>
            )
        })}

    </div>
    )
}

export default Teachers
