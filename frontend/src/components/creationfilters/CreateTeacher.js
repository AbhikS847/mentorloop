import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Form,Col,Button,Row } from 'react-bootstrap';

const CreateTeacher = () => {

    const [state,setState] = useState({
        Teacher:{
            Fullname:"",
            Experience:0,
            Weekends:false,
        },
    })

    const handleClick = async() =>{
        console.log(state.Teacher);
        const data = axios.post('http://localhost:5000/create/newteacher',{
            Fullname:state.Teacher.Fullname,
            Experience:state.Teacher.Experience,
            Weekends:state.Teacher.Weekends,
        })

    }

   useEffect(()=>{
        const getOptions = async() =>{
            setState({
                Teacher:{
                    Fullname:"",
                    Experience:0,
                    Weekends:false,
                }
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
                    <Form.Control placeholder="Example - Mister Miyagi" defaultValue={state.Teacher.Fullname} onChange={(event)=>{
                        state.Teacher.Fullname = event.target.value;
                    }}/>
                    </Col>
                    <Col className="my-2" xs={12} sm={8}>
                    <Form.Label><b>Teaching Experience (in years)</b></Form.Label>
                    <Form.Control type="number" placeholder="Enter your teaching experience" defaultValue={state.Teacher.Experience} onChange={(event)=>{
                        state.Teacher.Experience = event.target.value;
                    }}/>
                    <Form.Text className="d-flex justify-content-center" muted>
                    Please insert a number
  </Form.Text>
                    </Col>
                    <hr></hr>
                    <div className="d-flex justify-content-center">
                    <Form.Check onClick={()=>{state.Teacher.Weekends=true}}className=" px-3"
          type="radio"
          label="Available on weekends"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check onClick={()=>{state.Teacher.Weekends=false}} className="px-3"
          type="radio"
          label="Unavailable on weekends"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
                    </div>
                    <Button onClick={handleClick} type="" className="my-2" style={{width:'50%',marginLeft:'25%'}}>Create Teacher</Button>
                </Row>
            </Form>
        </div>
    )
}

export default CreateTeacher;
