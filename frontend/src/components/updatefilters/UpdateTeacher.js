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

    const handleClick = async()=>{
        console.log(state.teacher);
        const res = await axios.put('http://localhost:5000/update/teacher',{
            id:state.teacher._id,
            Fullname:state.teacher.Fullname,
            Experience:state.teacher.Experience,
            Weekends:state.teacher.Weekends,
        });
    }

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
      Select a Teacher from the dropdown list
  </Form.Text>
                    </Col>
                    <Col className="my-2" xs={12} sm={4}>
                    <Form.Label><b>Edit Fullname</b></Form.Label>
                    <Form.Control placeholder="Example - John Smith" defaultValue={state.teacher.Fullname} onChange={(event)=>{
                        state.teacher.Fullname = event.target.value;
                    }}/>
                          <Form.Text className="d-flex justify-content-center" muted>
                          Enter a name to update existing Teacher
  </Form.Text>
                    </Col>
                    <Col className="my-2" xs={12} sm={4}>
                    <Form.Label><b>Edit Experience (In years)</b></Form.Label>
                    <Form.Control type="number" placeholder="Example - John Smith" defaultValue={state.teacher.Experience} onChange={(event)=>{
                        state.teacher.Experience = event.target.value;
                    }}/>
                          <Form.Text className="d-flex justify-content-center" muted>
                          Enter a name to update existing Teacher
  </Form.Text>
                    </Col>
                    <hr></hr>
                    <div className="d-flex justify-content-center">
                    <Form.Check onClick={()=>{state.teacher.Weekends=true}}className=" px-3"
          type="radio"
          label="Available on weekends"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check onClick={()=>{state.teacher.Weekends=false}} className="px-3"
          type="radio"
          label="Unavailable on weekends"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
                    </div>
                    <Button onClick={handleClick} type="" className="my-2" style={{width:'50%',marginLeft:'25%'}}>Update Teacher</Button>
                    </Row>
                    </Form>
        </div>
    )
}

export default UpdateTeacher
