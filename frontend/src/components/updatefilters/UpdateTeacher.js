import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Col,Form,Row,Button } from 'react-bootstrap';

const UpdateTeacher = () => {

    const [state,setState] = useState({
        teacher:{
            _id:'',
            Fullname:'',
            Experience:0,
            Weekends:false
        },
        Teachers:[]
    })

    useEffect(()=>{
        const getTeachers = async() =>{
            const allTeachers = await axios.get('http://localhost:5000/teachers');
            console.log(allTeachers.data);
            setState({
                teacher:{
                    _id:'',
                    Fullname:'',
                    Experience:0,
                    Weekends:false
                },
                Teachers:allTeachers.data
            })
        }
        getTeachers();
    },[])

    return (
        <div>
 <Form>
                                <Row>
            <Col xs={12} sm={"auto"} className="my-2">
                    <Form.Label><b>Select Teachers</b></Form.Label>
                    <Form.Control as="select" onChange={(event)=>{
                        state.teacher._id = event.target.value;
                    }} >
                    {state.Teachers.map((Teacher)=>{
                        return(
                            <option key={Teacher._id} value={Teacher._id}>{Teacher.Fullname}</option>
                        )
                    })}
      </Form.Control>
      <Form.Text className="d-flex justify-content-center" muted>
      Select a student from the dropdown list
  </Form.Text>
                    </Col>
                    </Row>
                    </Form>
        </div>
    )
}

export default UpdateTeacher
