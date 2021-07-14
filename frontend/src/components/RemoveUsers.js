import React from 'react';
import {Container,Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter,Route } from 'react-router-dom';
import RemoveStudent from './removefilters/RemoveStudent';
import RemoveTeacher from './removefilters/RemoveTeacher';

const RemoveUsers = () => {
    return (
        <BrowserRouter>
            <h2 className="text-center">Remove Student/Teacher</h2>
            <Container className="text-center">
            <b>Filters:</b>
            <LinkContainer to="/remove/student"><Button className="mx-2" size="sm">Student</Button></LinkContainer>
            <LinkContainer to="/remove/teacher"><Button className="mx-2" size="sm">Teacher</Button></LinkContainer>
            <div className="small py-3"><b>Instructions: Please select one of the options to create either student or teacher, select by their name afterwards</b></div>
            <Route path="/remove/student" component={RemoveStudent}></Route>
            <Route path="/remove/teacher" component={RemoveTeacher}></Route>
            </Container>
        </BrowserRouter>
    )
}

export default RemoveUsers;
