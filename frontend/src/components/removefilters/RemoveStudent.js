import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { Col,Form,Row,Button } from 'react-bootstrap';

const RemoveStudent = () =>{

    const [state,setState] = useState({
        Students:[],
        student:{
            id:'',
            Fullname:''
        }
    })

    useEffect(()=>{
        const getStudents = async()=>{
            const res = await axios.get('http://localhost:5000/students');
            console.log(res.data);
            setState({
                Students:res.data,
                student:{
                    id:'',
                    Fullname:''
                }
            })
        }
        getStudents();
    },[])

    return(
        <div>
                                <Form>
                                <Row>
            <Col xs={12} sm={12} className="my-2">
                    <Form.Label><b>Select Student</b></Form.Label>
                    <Form.Control as="select" onChange={(event)=>{
                        state.student.id = event.target.value;
                        console.log(state.student.id);
                    }} >
                    {state.Students.map((student)=>{
                        return(
                            <option key={student._id} value={student._id}>{student.Fullname}</option>
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

export default RemoveStudent;
