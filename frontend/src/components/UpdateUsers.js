import React from 'react';
import {Container,Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter,Route } from 'react-router-dom';
import UpdateStudent from './updatefilters/UpdateStudent';
import UpdateTeacher from './updatefilters/UpdateTeacher';

const UpdateUsers = () => {
    return (
        <BrowserRouter>
            <h2 className="text-center">Update Student/Teacher</h2>
            <Container className="text-center">
            <b>Filters:</b>
            <LinkContainer to="/update/student"><Button className="mx-2" size="sm">Student</Button></LinkContainer>
            <LinkContainer to="/update/teacher"><Button className="mx-2" size="sm">Teacher</Button></LinkContainer>
            <div className="small py-3"><b>Instructions: Please select one of the options to create either student or teacher, select by their name afterwards</b></div>
            <Route path="/update/student" component={UpdateStudent}></Route>
            <Route path="/update/teacher" component={UpdateTeacher}></Route>
            </Container>
        </BrowserRouter>
    )
}

export default UpdateUsers;
