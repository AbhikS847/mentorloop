import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Col,Form,Row } from 'react-bootstrap';

const UpdateStudent = () => {

    const [state,setState] = useState( {
        Student:{
            _id:'',
            Fullname:'',
            Interest:'',
            Teacher:'',
            Enrolled:false
        },
        AllStudents:[],
        Teacher:[]
    })

    useEffect(()=>{
        const getStudent = async()=>{
            const allStudents = await axios.get('http://localhost:5000/students');
            const allTeachers = await axios.get('http://localhost:5000/teachers');
            console.log(allStudents);
            setState({
                Student:{
                    _id:'',
                    Fullname:'',
                    Interest:'',
                    Teacher:'',
                    Enrolled:false
                },
                AllStudents:allStudents.data,
                Teacher:allTeachers.data
            })
        }

        getStudent();
    },[])

    return (
        <div>
                                <Form>
                                <Row>
            <Col xs={12} sm={"auto"} className="my-2">
                    <Form.Label><b>Select Student</b></Form.Label>
                    <Form.Control as="select" onChange={(event)=>{
                        state.Student.Fullname = event.target.value
                    }} >
                    {state.AllStudents.map((student)=>{
                        return(
                            <option key={student._id}>{student.Fullname}</option>
                        )
                    })}
      </Form.Control>
      <Form.Text className="d-flex justify-content-center" muted>
      Select a student from the dropdown list
  </Form.Text>
                    </Col>
                    <Col className="my-2" xs={12} sm={4}>
                    <Form.Label><b>Fullname</b></Form.Label>
                    <Form.Control placeholder="Example - John Smith" defaultValue={state.Student.Fullname} onChange={(event)=>{
                        state.Student.Fullname = event.target.value;
                    }}/>
                    </Col>
            <Col xs={12} sm={4} className="my-2">
                    <Form.Label><b>Teacher(Select)</b></Form.Label>
                    <Form.Control as="select" onChange={(event)=>{
                        state.Student.Teacher = event.target.value
                    }} >
                    {state.Teacher.map((teacher)=>{
                        return(
                            <option key={teacher._id}>{teacher.Fullname}</option>
                        )
                    })}
      </Form.Control>
      <Form.Text className="d-flex justify-content-center" muted>
      Select a teacher from the dropdown list
  </Form.Text>
                    </Col>
                    </Row>
                    </Form>
        </div>
    )
}

export default UpdateStudent
