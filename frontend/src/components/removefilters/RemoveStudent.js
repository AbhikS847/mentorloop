import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { Col,Form,Row,Button } from 'react-bootstrap';

const RemoveStudent = () => {

    const [state,setState] = useState({
        Students:[],
        Student:{
            _id:'',
            Fullname:'',
            Interest:'',
            Teacher:''
        } 
    });

    useEffect(()=>{
        const getAllStudents = async()=>{
            const res = await axios.get('http://localhost:5000/students');
            console.log(res.data);
            setState({
                Students:res.data,
                Student:{
                    _id:'',
                    Fullname:'',
                    Interest:'',
                    Teacher:''
                }
            })
        }
        getAllStudents();
    },[])

    const checkforID = (event) =>{
        state.Student.Fullname = event.target.value;
        let i;
        let name;
        for(i=0;i<state.Students.length;i++){
            name = state.Students[i].Fullname;
            if(name === state.Student.Fullname){
                state.Student.id = state.Students[i]._id;
                console.log(state.Student.id);
            }
        }
        }

    return(
        <div>
        <Form>
        <Row>
        <Col xs={12} sm={12} className="my-2">
                    <Form.Label><b>Select Student</b></Form.Label>
                    <Form.Control as="select" onChange={checkforID} >
                    {state.Students.map((student)=>{
                        return(
                            <option key={student._id}>{student.Fullname}</option>
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
