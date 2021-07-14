import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Form,Col,Button,Row } from 'react-bootstrap';

const CreateStudent = () => {

    const [state,setState] = useState({
        Student:{
            Fullname:"",
            Interests:"",
            Teacher:'',
            Enrolled:false,
        },
        Teacher:[

        ]
    })

    const handleClick = async() =>{
        console.log(state.Student);
        const data = axios.post('http://localhost:5000/create/newstudent',{
            Fullname:state.Student.Fullname,
            Interest:state.Student.Interests.split(","),
            Enrolled:state.Student.Enrolled,
            Teacher:state.Student.Teacher
        })

    }

   useEffect(()=>{
        const getOptions = async() =>{
            const res = await axios.get('http://localhost:5000/teachers');
            const teachers = res.data;
            setState({
                Student:{
                    Fullname:"",
                    Interests:"",
                    Teacher:'',
                    Enrolled:false,
                },
                Teacher:teachers
            })
        }

        getOptions();
    },[]);

    return (
        <div>
                        <Form>
                <Row>
                    <Col className="my-2" xs={12} sm={4}>
                    <Form.Label><b>Fullname</b></Form.Label>
                    <Form.Control placeholder="Example - John Smith" defaultValue={state.Student.Fullname} onChange={(event)=>{
                        state.Student.Fullname = event.target.value;
                    }}/>
                    </Col>
                    <Col className="my-2" xs={12} sm={8}>
                    <Form.Label><b>Interests</b></Form.Label>
                    <Form.Control placeholder="Type in your interested areas" defaultValue={state.Student.Interests} onChange={(event)=>{
                        state.Student.Interests = event.target.value;
                    }}/>
                    <Form.Text className="d-flex justify-content-center" muted>
                    Seperate each interests with a comma. For example - Business, Arts, Science,Engineering, Health...
  </Form.Text>
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
                    <hr></hr>
                    <div className="d-flex justify-content-center">
                    <Form.Check onClick={()=>{state.Student.Enrolled=true}}className=" px-3"
          type="radio"
          label="Enrolled"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check onClick={()=>{state.Student.Enrolled=false}} className="px-3"
          type="radio"
          label="Unenrolled"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
                    </div>
                    <Button onClick={handleClick} type="" className="my-2" style={{width:'50%',marginLeft:'25%'}}>Create Student</Button>
                </Row>
            </Form>
        </div>
    )
}

export default CreateStudent;
