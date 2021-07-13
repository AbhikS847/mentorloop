import React from 'react';
import {Container,Button} from 'react-bootstrap';
import All from './filters/All';
import { BrowserRouter,Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Students from './filters/Students';
import Teachers from './filters/Teachers';

const AllUsers = () => {

    return (
<BrowserRouter>
            <h2 className="text-center">This shows all users</h2>
            <Container className="text-center py-2">
            <b>Filters:</b>
            <LinkContainer to="/all"><Button className="mx-2" size="sm">All</Button></LinkContainer>
            <LinkContainer to="/students"><Button className="mx-2" size="sm">Students only</Button></LinkContainer>
            <LinkContainer to="/teachers"><Button className="mx-2" size="sm">Teachers only</Button></LinkContainer>
            <div className="small py-3"><b>Instructions: Please select one of the filters above to display the lists</b></div>
            <Route path="/all" component={All} ></Route>
            <Route path="/students" component={Students}></Route>
            <Route path="/teachers" component={Teachers}></Route>
            </Container>
</BrowserRouter>
    )
}

export default AllUsers
