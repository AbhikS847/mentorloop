import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Col,Form,Row,Button } from 'react-bootstrap';

const UpdateStudent = () => {

    const [state,setState] = useState( {
        Student:{
            _id:'',
            Fullname:'',
            Interests:'',
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
                    Interests:'',
                    Teacher:'',
                    Enrolled:false
                },
                AllStudents:allStudents.data,
                Teacher:allTeachers.data
            })
        }

        getStudent();
    },[])

    const handleClick = async() =>{
        console.log(state.Student);
        const data = axios.put('http://localhost:5000/update/student',state.Student._id,{
            Fullname:state.Student.Fullname,
            Interest:state.Student.Interests.split(","),
            Enrolled:state.Student.Enrolled,
            Teacher:state.Student.Teacher
        })
        console.log(data);
    }

    return (
        <div>
                                <Form>
                                <Row>
            <Col xs={12} sm={"auto"} className="my-2">
                    <Form.Label><b>Select Student</b></Form.Label>
                    <Form.Control as="select" onChange={(event)=>{
                        state.Student.Fullname = event.target.value;
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
                    <Form.Label><b>Edit Fullname</b></Form.Label>
                    <Form.Control placeholder="Example - John Smith" defaultValue={state.Student.Fullname} onChange={(event)=>{
                        state.Student.Fullname = event.target.value;
                    }}/>
                          <Form.Text className="d-flex justify-content-center" muted>
                          Enter a name to update existing student
  </Form.Text>
                    </Col>
            <Col xs={12} sm={4} className="my-2">
                    <Form.Label><b>Edit Teacher(Select)</b></Form.Label>
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
      Select a teacher to update for the student
  </Form.Text>
                    </Col>
                    <Col className="my-2" xs={12} sm={12}>
                    <Form.Label><b>Change Interests</b></Form.Label>
                    <Form.Control placeholder="Type in your interested areas" defaultValue={state.Student.Interests} onChange={(event)=>{
                        state.Student.Interests = event.target.value;
                    }}/>
                    <Form.Text className="d-flex justify-content-center" muted>
                    Seperate each interests with a comma. For example - Business, Arts, Science,Engineering, Health, etc. Also, note that
                    previous interests will be modified.
  </Form.Text>
                    </Col>
                    <hr></hr>
                    <div className="d-flex justify-content-center">
                    <Form.Check onClick={()=>{state.Student.Enrolled=true}}className=" px-3"
          type="radio"
          label="Enroll"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check onClick={()=>{state.Student.Enrolled=false}} className="px-3"
          type="radio"
          label="Unenroll"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
                    </div>
                    </Row>
                    <Button onClick={handleClick} type="" className="my-2" style={{width:'50%',marginLeft:'25%'}}>Update Student</Button>
                    </Form>
        </div>
    )
}

export default UpdateStudent
