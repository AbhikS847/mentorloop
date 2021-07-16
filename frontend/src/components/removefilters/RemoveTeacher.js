import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { Col,Form,Row,Button } from 'react-bootstrap';

const RemoveTeacher = () => {

    const [state,setState] = useState({
        Teachers:[],
        teacher:{
            id:'',
            Fullname:''
        }
    })

    useEffect(()=>{
        const getTeachers = async()=>{
            const res = await axios.get('http://localhost:5000/teachers');
            console.log(res.data);
            setState({
                Teachers:res.data,
                teacher:{
                    id:'',
                    Fullname:''
                }
            })
        }
        getTeachers();
    },[])

    const handleClick = async() =>{
        alert (`Teacher with id ${state.teacher.id} has been deleted!`);
        const res = await axios.delete('http://localhost:5000/remove/teacher',{
            data:{
                id:state.teacher.id
            }
        });
        console.log(res)

    }

    return (
        <div>
<Form>
                                <Row>
            <Col xs={12} sm={12} className="my-2">
                    <Form.Label><b>Select Teacher</b></Form.Label>
                    <Form.Control as="select" onChange={(event)=>{
                        state.teacher.id = event.target.value;
                        console.log(state.teacher.id);
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
                    <Button variant="danger" onClick={handleClick} type="" className="my-2" style={{width:'50%',marginLeft:'25%'}}>Delete Student</Button>
                    </Row>
                    </Form>
        </div>
    )
}

export default RemoveTeacher
