import React from 'react';
import {Container,Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter,Route } from 'react-router-dom';
import CreateStudent from './creationfilters/CreateStudent';
import CreateTeacher from './creationfilters/CreateTeacher';

const CreateUsers = () => {

    return (
        <BrowserRouter>
            <h2 className="text-center">Create Student/ Teacher</h2>
            <Container className="text-center">
            <b>Filters:</b>
            <LinkContainer to="/create/student"><Button className="mx-2" size="sm">Student</Button></LinkContainer>
            <LinkContainer to="/create/teacher"><Button className="mx-2" size="sm">Teacher</Button></LinkContainer>
            <div className="small py-3"><b>Instructions: Please select one of the options to create either student or teacher</b></div>
            <Route path="/create/student" component={CreateStudent}></Route>
            <Route path="/create/teacher" component={CreateTeacher}></Route>
            </Container>
        </BrowserRouter>
    )
}

export default CreateUsers
