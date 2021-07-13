import React from 'react';
import {Container,Form,Button, Col,Row} from 'react-bootstrap';
import {useEffect,useState} from 'react';
import axios from 'axios';

const CreateUsers = () => {

    const [state,setState] = useState({
        Student:{

        },
        Teacher:[

        ]
    })

    useEffect(()=>{
        const getOptions = async() =>{
            const res = await axios.get('http://localhost:5000/teachers');
            const teachers = res.data;
            setState({
                Teacher:teachers
            })
        }

        getOptions();
    })

    return (
        <div>
            <h2 className="text-center">Create Student/ Teacher</h2>
            <Container>
            <Form>
                <Row>
                    <Col className="my-2" xs={12} sm={4}>
                    <Form.Label><b>Fullname</b></Form.Label>
                    <Form.Control placeholder="Example - John Smith" />
                    </Col>
                    <Col className="my-2" xs={12} sm={8}>
                    <Form.Label><b>Interests</b></Form.Label>
                    <Form.Control placeholder="Type in your interested areas" />
                    <Form.Text className="d-flex justify-content-center" muted>
                    Seperate each interests with a comma. For example - Business, Arts, Science,Engineering, Health...
  </Form.Text>
                    </Col>
                    <Col xs={12} className="my-2">
                    <Form.Label><b>Teacher</b></Form.Label>
                    <Form.Control as="select" placeholder="Example - Arts, Graphics Design, etc...">
                    {state.Teacher.map((teacher)=>{
                        return(
                            <option>{teacher.Fullname}</option>
                        )
                    })}
      </Form.Control>
      <Form.Text className="d-flex justify-content-center" muted>
      Select a teacher from the dropdown list
  </Form.Text>
                    </Col>
                </Row>
            </Form>
            </Container>
        </div>
    )
}

export default CreateUsers
